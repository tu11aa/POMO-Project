const asyncHandler = require("express-async-handler");
const authHelper = require("../helpers/authHelper");
const helper = require("../helpers/helper");
const Admin = require("../models/adminModel");
const httpStatus = require("http-status");

const registerAdmin = asyncHandler(async (req, res) => {
  const { adminName, email, password, fullname, phone } = req.body;

  if (!adminName || !email || !password) {
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "Please include all fields"
    );
  }

  //check if admin is exist
  const findAmind = await Admin.findOne({ adminName });
  const findAmindEmail = await Admin.findOne({ email });
  if (findAmind || findAmindEmail) {
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "Admin or email already exists"
    );
  }

  // Hash password
  const hashed_password = await authHelper.hashPassword(password, 10);

  // Create admin
  const admin = await Admin.create({
    adminName,
    password: hashed_password,
    email,
    fullname,
    phone,
  });

  //res token
  if (admin) {
    data = {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: authHelper.generateToken(admin._id, "30d"),
    };
    helper.sendRes(res, httpStatus.CREATED, data);
  } else {
    helper.sendRes(res, httpStatus.BAD_REQUEST, null, "Invalid admin data");
  }
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { adminName, password } = req.body;

  const admin = await Admin.findOne({ adminName });

  if (admin) {
    if (await authHelper.comparePassword(password, admin.password)) {
      data = {
        _id: admin._id,
        admin_name: admin.admin_name,
        email: admin.email,
        token: generateToken(admin._id),
      };
      helper.sendRes(res, httpStatus.OK, data);
    } else {
      helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "Wrong password");
    }
  } else {
    helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "Admin not found");
  }
});

const getMe = asyncHandler(async (req, res) => {
  helper.sendRes(res, httpStatus.OK, req.admin);
});

module.exports = { registerAdmin, loginAdmin, getMe };
