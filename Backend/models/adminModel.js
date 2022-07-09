const mongoose = require("mongoose");

const admin_schema = mongoose.Schema({
  admin_name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  fullname: {
    type: String,
    required: [true, "Please add your fullname"],
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.Schema("Admin", admin_schema);
