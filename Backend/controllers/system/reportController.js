const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const helper = require("../../helpers/helper");
const methodHelper = require("../../helpers/methodHelper");
const { Report, Room, Blacklist } = require("../../models/systemModel");
const { User } = require("../../models/userModels");

// const getReports = async (req, res) => {};

const createReport = asyncHandler(async (req, res) => {
  const { userID, reason } = req.body;
  const reporter = req.user._id;

  if (!reason) {
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "Please include all fields"
    );
  }

  if (!(await User.findById(userID))) {
    helper.sendRes(res, httpStatus.BAD_REQUEST, null, "User not found");
  }

  if (
    await Report.findOne({ userID: userID, reporter: reporter, reason: reason })
  ) {
    helper.sendRes(res, 400, null, "Same reason");
  }

  const room = await Room.findById(req.query.roomID);
  if (!room) {
    helper.sendRes(res, httpStatus.BAD_REQUEST, null, "Room not found");
  }

  methodHelper.createDocument(
    res,
    Report,
    {
      userID,
      reason,
      reporter,
      reportedTime: new Date(),
    },
    async (report) => {
      room.reportIDs.push(report._id);
      room.save();

      const blacklist = await Blacklist.findOne({ userID: userID });
      if (blacklist) {
        blacklist.reportIDs.push(report._id);
        await blacklist.save();
      } else {
        //create blacklist
        await methodHelper.createDocument(
          res,
          Blacklist,
          {
            userID,
            reportIDs: [report._id],
          },
          null,
          true
        );
      }
    }
  );
});

const getReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({ userID: req.query.userID });
  if (reports === [])
    helper.sendRes(res, httpStatus.BAD_REQUEST, null, "Report not found");

  return helper.sendRes(res, httpStatus.OK, reports);
});

const deleteReport = asyncHandler(async (req, res) => {
  await methodHelper.deleteDocument(
    res,
    Report,
    "Report",
    req.params.reportID,
    async (task) => await task.reporter.equals(req.user._id)
  );
});

module.exports = { createReport, deleteReport, getReports };
