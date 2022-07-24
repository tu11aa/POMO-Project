const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModels");
const Admin = require("../models/adminModel");
const authHelper = require("../helpers/authHelper");
const helper = require("../helpers/helper");
const httpStatus = require("http-status");

const protectAdmin = asyncHandler(async (req, res, next) => {
  const header_auth = req.headers.authorization;

  if (header_auth && header_auth.startsWith("Bearer")) {
    try {
      console.log("hello");
      const token = header_auth.split(" ")[1]; //get token in header string
      const decoded = authHelper.decodeToken(token); //decoded to get id

      req.admin = await Admin.findById(decoded).select("-password"); //get user by id deselect password

      next();
    } catch (error) {
      helper.sendRes(res, httpStatus.UNAUTHORIZED, null, error);
    }
  } else {
    helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "Not authorized");
  }
});

const protect = asyncHandler(async (req, res, next) => {
  const header_auth = req.headers.authorization;

  if (header_auth && header_auth.startsWith("Bearer")) {
    try {
      const token = header_auth.split(" ")[1]; //get token in header string
      const decoded = authHelper.decodeToken(token); //decoded to get id

      req.user = await User.findById(decoded).select("-password"); //get user by id deselect password

      if (!req.user) {
        helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "Not authorized");
      }

      next();
    } catch (error) {
      helper.sendRes(res, httpStatus.UNAUTHORIZED, null, error);
    }
  } else {
    helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "Not authorized");
  }
});

module.exports = { protect, protectAdmin };
