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
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// const user_info_schema = mongoose.Schema(
//   {
//     user_id: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: [true, "Please add a name"],
//       unique: true,
//     },
//     nickname: {
//       type: String,
//     },
//     bio: {
//       type: String,
//     },
//     gender: {
//       type: String,
//     },
//     dob: {
//       type: Date,
//     },
//     schoolS: {
//       type: Array,
//       default: [],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const user_data_schema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    schedule_ids: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Schedule" }],
      default: [],
    },
    result_ids: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "None" }], //result table saved on localstorage
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

const User = mongoose.model("User", user_schema);
const UserData = mongoose.model("User Data", user_data_schema);

module.exports = { User, UserData };
