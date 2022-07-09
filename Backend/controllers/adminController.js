const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerAdmin = asyncHandler(async (req, res) => {
  const { admin_name, email, password, fullname, phone } = req.body;

  if (!admin_name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  //check if admin is exist
  if (await Admin.findOne({ email })) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);

  // Create admin
  const admin = await Admin.create({
    admin_name,
    password: hashed_password,
    email,
    fullname,
    phone,
  });

  //res token
  if (admin) {
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new error("Invalid admin data");
  }
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { admin_name, password } = req.body;

  const admin = await Admin.findOne({ admin_name });

  if (admin) {
    if (await bcrypt.compare(password, admin.password)) {
      res.status(200).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401);
      throw new Error("Wrong password");
    }
  } else {
    res.status(401);
    throw new Error("Admin not found");
  }
});

module.exports = { registerAdmin, loginAdmin };
