//control what happen when user route is  called
const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const authHelper = require("../helpers/authHelper");
const helper = require("../helpers/helper");
const methodHelper = require("../helpers/methodHelper");
const { User } = require("../models/userModels");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, fullname } = req.body;

  if (!username || !email || !password) {
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "Please include all fields"
    );
  }

  //check if user is exist
  if (await User.findOne({ $or: [{ username: username }, { email: email }] })) {
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "User or email already exists"
    );
  }

  // Hash password
  const hashed_password = await authHelper.hashPassword(password, 10);

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashed_password,
    fullname,
  });

  //res token
  if (user) {
    data = {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: authHelper.generateToken(user._id, "30d"),
    };
    helper.sendRes(res, httpStatus.CREATED, data);
  } else {
    helper.sendRes(res, httpStatus.BAD_REQUEST, null, "Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user) {
    if (await authHelper.comparePassword(password, user.password)) {
      data = {
        _id: user._id,
        username: user.username,
        email: user.email,
        token: authHelper.generateToken(user._id, "30d"),
      };

      helper.sendRes(res, httpStatus.OK, data);
    } else {
      helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "Wrong password");
    }
  } else {
    helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "User not found");
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
    helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "User not found");
  }

  helper.sendRes(res, httpStatus.OK, user);
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  if (users === []) {
    helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "User not found");
  }

  helper.sendRes(res, httpStatus.OK, users);
});

const deleteUser = asyncHandler(async (req, res) => {
  methodHelper.deleteDocument(req, User, "User", req.params.id);
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getUser,
  deleteUser,
  getUsers,
};
