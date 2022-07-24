"use strict";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authHelper = {};

authHelper.generateToken = (id, exp) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: exp,
  });
};

authHelper.decodeToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.id;
};

authHelper.hashPassword = async (password, length) => {
  const salt = await bcrypt.genSalt(length);
  return await bcrypt.hash(password, salt);
};

authHelper.comparePassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

module.exports = authHelper;
