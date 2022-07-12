const asyncHandler = require("express-async-handler");
const { Task } = require("../../models/systemModel");

const createTask = asyncHandler(async (req, res) => {
  const { content } = req.body;

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

  //res token
  if (task) {
    res.status(201).json(task);
  } else {
    res.status(400);
    throw new error("Invalid data");
  }
});

module.exports = { createTask };
