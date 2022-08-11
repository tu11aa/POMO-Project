const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const helper = require("../../helpers/helper");
const methodHelper = require("../../helpers/methodHelper");
const { Task, Schedule } = require("../../models/systemModel");

//api/schedules/:scheduleID/tasks
const createTask = asyncHandler(async (req, res) => {
  const { content } = req.body;
  //need a user?
  if (!content) {
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "Please include all fields"
    );
  }

  await methodHelper.createDocument(res, Task, {
    userID: req.user._id,
    content,
    time: Date.now(),
    status: "Todo",
  });
});

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ userID: req.user._id });

  helper.sendRes(res, httpStatus.OK, tasks);
});

const updateTask = asyncHandler(async (req, res) => {
  await methodHelper.updateDocument(
    res,
    Task,
    req.params.id,
    req.body,
    async (task) => await task.userID.equals(userID)
  );
});

const deleteTask = asyncHandler(async (req, res) => {
  await methodHelper.deleteDocument(
    res,
    Task,
    "Task",
    req.params.id,
    async (task) => await task.userID.equals(req.user._id)
  );
});

const deleteTaskbyuserID = asyncHandler(async (req, res, userID) => {
  await methodHelper.deleteByuserID(res, Task, "Task", userID);
});

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  deleteTaskbyuserID,
  getTasks,
};
