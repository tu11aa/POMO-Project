const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const helper = require("../../helpers/helper");
const methodHelper = require("../../helpers/methodHelper");
const { Schedule } = require("../../models/systemModel");

const createSchedule = asyncHandler(async (req, res) => {
  const { date } = req.body;

  methodHelper.createDocument(res, Schedule, {
    userID: req.user._id,
    date,
  });
});

const updateSchedule = asyncHandler(async (req, res) => {
  methodHelper.updateDocument(
    res,
    Schedule,
    req.params.id,
    req.body,
    async (schedule) => await schedule.userID.equals(userID)
  );
});

const getSchedules = asyncHandler(async (req, res) => {
  const schedules = await Schedule.find({
    roomMaster: req.user._id,
  });

  helper.sendRes(res, httpStatus.OK, schedules);
});

const deleteSchedule = asyncHandler(async (req, res) => {
  methodHelper.deleteDocument(
    res,
    Schedule,
    "Schedule",
    req.params.id,
    async (schedule) => await schedule.userID.equals(req.user._id)
  );
});

module.exports = {
  createSchedule,
  updateSchedule,
  getSchedules,
  deleteSchedule,
};
