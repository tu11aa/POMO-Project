const asyncHandler = require("express-async-handler");
const { Schedule, Task, Room } = require("../models/systemModel");

const getScheduleByUserID = asyncHandler(async (req, res) => {});

module.exports = { getScheduleByUserID };
