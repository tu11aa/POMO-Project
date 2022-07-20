const asyncHandler = require("express-async-handler");
const { Task, Schedule } = require("../../models/systemModel");

//api/schedules/:scheduleID/tasks
const createTask = asyncHandler(async (req, res) => {
  const { schedule_id, content } = req.body;
  //need a user?
  if (!content) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // Create user
  const task = await Task.create({
    content,
    time: Date.now(),
    status: "Todo",
  });

  let schedule = await Schedule.findById(schedule_id);
  schedule.taskIDs.push(task._id);
  schedule.save();

  //res token
  if (task) {
    res.status(201).json(task);
  } else {
    res.status(400);
    throw new error("Invalid data");
  }
});

const updateTask = asyncHandler(async (req, res) => {
  let task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  if (!task.useID.equals(req.user._id)) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  if (!task.userID.equals(req.user._id)) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const rs = await task.remove();

  res.status(200).json(rs);
});

const deleteTaskbyuserID = asyncHandler(async(userID)=>{
  
})

module.exports = { createTask, updateTask, deleteTask };
