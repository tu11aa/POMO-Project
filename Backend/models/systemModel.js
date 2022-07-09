const mongoose = require("mongoose");

const schedule_schema = mongoose.Schema({
  data: {
    type: Date,
    required: [true, "Please add a date"],
  },
  task_ids: {
    type: Array,
    default: [],
  },
});

const task_schema = mongoose.Schema({
  content: {
    type: String,
    required: [true, "Please add a task"],
  },
  time: {
    type: Date,
    required: [true, "Please add a time"],
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const roomSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please include type of room"],
  },
  name: {
    type: String,
    default: "",
  },
  password: {
    type: String,
  },
  room_master: {
    type: String,
    required: true,
  },
  member_id: {
    type: Array,
    default: [],
  },
  report_id: {
    type: Array,
    default: [],
  },
});

const Schedule = mongoose.model("Schedule", schedule_schema);
const Task = mongoose.model("Task", task_schema);
const Room = mongoose.model("Room", roomSchema);

module.exports = { Schedule, Task, Room };
