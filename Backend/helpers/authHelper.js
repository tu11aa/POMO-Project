"use strict";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authHelper = {};

authHelper.generateToken = (id, exp) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: exp,
  });
};

authHelper.decodeToken = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

authHelper.hashPassword = async (password, length) => {
  const salt = await bcrypt.genSalt(length);
  return await bcrypt.hash(password, salt);
};

authHelper.comparePassword = async (pass, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

module.exports = authHelper;
