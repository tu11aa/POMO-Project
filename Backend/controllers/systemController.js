const asyncHandler = require("express-async-handler");
const { Schedule, Task, Room } = require("../models/systemModel");

const getScheduleByUserID = asyncHandler(async (req, res) => {
  const { user_id } = req.body;

  const schedules = await Schedule.find({ user_id: user_id });

  res.status(200).json({ schedules: schedules });
});

module.exports = { getScheduleByUserID };
