//control what happen when user route is  called
const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, fullname } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  //check if user is exist
  if (await User.findOne({ username })) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashed_password,
    fullname,
  });

  //res token
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Wrong password");
    }
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

//get user info (private)
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

//route: api/users/:id
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

module.exports = { registerUser, loginUser, getMe, getUser };
