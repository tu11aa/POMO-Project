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
  schedule.task_ids.push(task._id);

  //res token
  if (task) {
    res.status(201).json(task);
  } else {
    res.status(400);
    throw new error("Invalid data");
  }
});

module.exports = { createTask };
