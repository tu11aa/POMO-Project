const mongoose = require("mongoose");

const schedule_schema = mongoose.Schema(
  {
    data: {
      type: Date,
      required: [true, "Please add a date"],
    },
    task_ids: {
      type: [
        { type: mongoose.Schema.Types.ObjectID, ref: "Task", required: true },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const task_schema = mongoose.Schema(
  {
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
    room_master: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    member_id: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    report_id: {
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

const report_schema = mongoose.Schema(
  {
    reason: {
      type: String,
      required: [true, "Please add a reason"],
    },
    reporter: {
      type: mongoose.Schema.Types.ObjectId,
      red: "User",
      required: true,
    },
    reported_time: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const blacklist_schema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    report_id: {
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

const removed_user_schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    removed_day: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Schedule = mongoose.model("Schedule", schedule_schema);
const Task = mongoose.model("Task", task_schema);
const Room = mongoose.model("Room", roomSchema);
const Report = mongoose.model("Reported User", report_schema);
const Blacklist = mongoose.model("Blacklist", blacklist_schema);
const RemovedUser = mongoose.model("Removed User", removed_user_schema);

module.exports = { Schedule, Task, Room, Report, Blacklist, RemovedUser };
