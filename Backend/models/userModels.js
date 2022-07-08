const mongoose = require("mongoose");
//User object (User table from database)

const user_schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    fullname: {
      type: String,
      required: [true, "Please add a name"],
    },
  },
  {
    timestamps: true,
  }
);

const user_info_schema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
    },
    nickname: {
      type: String,
    },
    bio: {
      type: String,
    },
    gender: {
      type: String,
    },
    dob: {
      type: Date,
    },
    schoolS: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", user_schema);
const user_info = mongoose.model("User Infomation", user_info_schema);

module.exports = { User, user_info };
