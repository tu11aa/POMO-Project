const asyncHandler = require("express-async-handler");
const helper = require("../../helpers/helper");
const methodHelper = require("../../helpers/methodHelper");
const { Room } = require("../../models/systemModel");

const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({ roomMaster: req.user._id }).populate(
    "reportIDs"
  );
  res.status(200).json(rooms);
});

const createRoom = asyncHandler(async (req, res) => {
  const { type, name, password, memberIDs, reportIDs } = req.body;

  if (!type || !name) {
    helper.sendRes(res, 400, null, "Please include all fields");
  }

  //check if room's name is same
  if (await Room.findOne({ room_master: req.user._id, name: name })) {
    helper.sendRes(res, 400, null, "Room with same name is extis");
  }

  methodHelper.createDocument(res, Room, {
    type,
    name,
    password,
    roomMaster: req.user._id,
    memberIDs,
    reportIDs,
  });
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
  methodHelper.updateDocument(
    res,
    Room,
    "Room",
    req.params.id,
    req.body,
    async (room) => await room.roomMaster.equals(req.user._id)
  );
});

const deleteRoomByuserID = asyncHandler(
  async (req, res, userID = "62cbf741d3e3f7707a52e158") => {
    await methodHelper.deleteByuserID(res, Room, "Room", userID);
  }
);

module.exports = {
  createRoom,
  deleteRoom,
  updateRoom,
  getRooms,
  deleteRoomByuserID,
};
