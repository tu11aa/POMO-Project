const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const helper = require("../../helpers/helper");
const methodHelper = require("../../helpers/methodHelper");
const { Room, Chatbox } = require("../../models/systemModel");

const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({ roomMaster: req.user._id }).populate(
    "reportIDs"
  );

  helper.sendRes(res, httpStatus.OK, rooms);
});

const createRoom = asyncHandler(async (req, res) => {
  const { type, name, password, memberIDs, reportIDs } = req.body;

  if (!type || !name) {
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "Please include all fields"
    );
  }

  //check if room's name is same
  if (await Room.findOne({ room_master: req.user._id, name: name })) {
    helper.sendRes(res, 400, null, "Room with same name is extis");
  }

  await methodHelper.createDocument(
    res,
    Room,
    {
      type,
      name,
      password,
      roomMaster: req.user._id,
      memberIDs,
      reportIDs,
    },
    async (room) =>
      await methodHelper.createDocument(
        res,
        Chatbox,
        { roomID: room._id },
        null,
        true
      )
  );
});

//route api/rooms/:id
const deleteRoom = asyncHandler(async (req, res) => {
  await methodHelper.deleteDocument(
    res,
    Room,
    "Room",
    req.params.id,
    async (room) => await room.room_master.equals(req.user._id)
  );
});

//route api/rooms/:id
const updateRoom = asyncHandler(async (req, res) => {
  await methodHelper.updateDocument(
    res,
    Room,
    "Room",
    req.params.id,
    req.body,
    async (room) => await room.roomMaster.equals(req.user._id)
  );
});

module.exports = {
  createRoom,
  deleteRoom,
  updateRoom,
  getRooms,
};
