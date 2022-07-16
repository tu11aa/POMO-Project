const asyncHandler = require("express-async-handler");
const { Schedule } = require("../../models/systemModel");

const createSchedule = asyncHandler(async (req, res) => {
  const { date } = req.body;

  const schedule = await Schedule.create({
    userID: req.user._id,
    date,
  });

  if (schedule) {
    res.status(201).json(schedule);
  } else {
    res.status(400);
    throw new error("Invalid schedule data");
  }
});

const updateSchedule = asyncHandler(async (req, res) => {
  let schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    res.status(400);
    throw new Error("Schedule not found");
  }

  if (!schedule.userID.equals(req.user._id)) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedSchedule = await Schedule.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedSchedule);
});

const getSchedules = asyncHandler(async (req, res) => {
  const schedules = await Schedule.find({ roomMaster: req.user._id });
  res.status(200).json(schedules);
});

const getSchedule = asyncHandler(async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    res.status(400);
    throw new Error("Room not found");
  }

  res.status(200).json(schedule);
});

const deleteSchedule = asyncHandler(async (req, res) => {
  const schedule = Schedule.findById(req.params.id);
  if (!schedule) {
    res.status(400);
    throw new Error("Schedule not found");
  }

  if (!schedule.userID.equals(req.user._id)) {
    res.status(401);
    throw new Error("Not authorized");
  }

  //delete all task first

  const rs = await schedule.remove();

  res.status(200).json(rs);
});

const deleteScheduleByuserID = asyncHandler(async (req, res, userID) => {
  const schedules = await Schedule.find({ userID: userID });
  if ((await schedules).length === 0) {
    res.status(400);
    throw new Error("Schedule not found");
  }

  //delete all task first
  schedules.forEach(async (schedule) => {
    await schedule.remove();
  });

  res.status(200).json(rs);
});

module.exports = {
  createSchedule,
  updateSchedule,
  getSchedule,
  getSchedules,
  deleteSchedule,
  deleteScheduleByuserID,
};
