const mongoose = require("mongoose");
//User object (User table from database)

const user_schema = mongoose.Schema(
  {
    username: {
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

const user_data_schema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
    },
    schedule_ids: {
      type: Array,
      default: [],
    },
    result_ids: {
      type: Array,
      default: [],
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const report_schema = mongoose.Schema({
  reason: {
    type: String,
    required: [true, "Please add a reason"],
  },
  reporter: {
    type: String,
    required: true,
  },
  reported_time: {
    type: String,
  },
});

const blacklist_schema = mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
  },
  report_id: {
    type: Array,
    default: [],
  },
});

const removed_user_schema = mongoose.Schema({
  removed_day: {
    type: Date,
    required: true,
  },
});

const User = mongoose.model("User", user_schema);
const UserInfo = mongoose.model("User Infomation", user_info_schema);
const UserData = mongoose.model("User Data", user_data_schema);
const Report = mongoose.model("Reported User", report_schema);
const Blacklist = mongoose.model("Blacklist", blacklist_schema);
const RemovedUser = mongoose.model("Removed User", removed_user_schema);

module.exports = { User, UserInfo, UserData, Report, Blacklist, RemovedUser };
