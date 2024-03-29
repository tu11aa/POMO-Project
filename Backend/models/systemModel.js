const mongoose = require("mongoose");

// const scheduleSchema = mongoose.Schema(
//   {
//     userID: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     date: {
//       type: Date,
//       required: [true, "Please add a date"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const taskSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // scheduleID: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Schedule",
    //   required: true,
    // },
    content: {
      type: String,
      required: [true, "Please add a task"],
    },
    time: {
      type: Date,
      required: [true, "Please add a time"],
    },
    status: {
      type: String,
      enum: ["Todo", "Doing", "Done"],
      default: "Todo",
    },
  },
  {
    timestamps: true,
  }
);

const roomSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "Please include type of room"],
      enum: ["Private", "Public"],
      default: "Private",
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    password: {
      type: String,
    },
    roomMaster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    memberIDs: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    reportIDs: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Reported User",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const reportSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reason: {
      type: String,
      required: [true, "Please add a reason"],
    },
    reporter: {
      type: mongoose.Schema.Types.ObjectId,
      red: "User",
      required: true,
    },
    reportedTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const blacklistSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    reportIDs: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Reported User",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const removeduserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    removedDay: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//chua xong
const message = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: [true, "Please add a task"],
    },
    time: {
      type: Date,
      required: [true, "Please add a time"],
    },
  },
  {
    timestamps: true,
  }
);

const chatboxSchema = mongoose.Schema(
  {
    roomID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    messageIDs: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Message",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// const Schedule = mongoose.model("Schedule", scheduleSchema);
const Task = mongoose.model("Task", taskSchema);
const Room = mongoose.model("Room", roomSchema);
const Report = mongoose.model("Reported User", reportSchema);
const Blacklist = mongoose.model("Blacklist", blacklistSchema);
const RemovedUser = mongoose.model("Removed User", removeduserSchema);
const Message = mongoose.model("Message", message);
const Chatbox = mongoose.model("Chatbox", chatboxSchema);

module.exports = {
  Task,
  Room,
  Report,
  Blacklist,
  RemovedUser,
  Message,
  Chatbox,
};
