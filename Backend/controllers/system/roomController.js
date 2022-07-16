const asyncHandler = require("express-async-handler");
const { Room } = require("../../models/systemModel");

const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({ roomMaster: req.user._id });
  res.status(200).json(rooms);
});

const getRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (!room) {
    res.status(400);
    throw new Error("Room not found");
  }

  res.status(200).json(room);
});

const createRoom = asyncHandler(async (req, res) => {
  const { type, name, password, memberIDs, reportIDs } = req.body;

  if (!type || !name) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  //check if room's name is same
  if (await Room.findOne({ room_master: req.user._id, name: name })) {
    res.status(400);
    throw new Error("Room with same name is extis");
  }

  const room = await Room.create({
    type,
    name,
    password,
    roomMaster: req.user._id,
    memberIDs,
    reportIDs,
  });

  if (room) {
    res.status(201).json(room);
  } else {
    res.status(400);
    throw new error("Invalid room data");
  }
});

//route api/rooms/:id
const deleteRoom = asyncHandler(async (req, res) => {
  const room = Room.findById(req.params.id);
  if (!room) {
    res.status(400);
    throw new Error("Room not found");
  }

  if (!room.room_master.equals(req.user._id)) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const rs = await room.remove();

  res.status(200).json(rs);
});

//route api/rooms/:id
const updateRoom = asyncHandler(async (req, res) => {
  let room = await Room.findById(req.params.id);
  if (!room) {
    res.status(400);
    throw new Error("Room not found");
  }

  if (!room.roomMaster.equals(req.user._id)) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedRoom);
});

const deleteRoomByuserID = asyncHandler(async (req, res, userID = "62cbf741d3e3f7707a52e158") => {
  const rooms = await Room.find({ userID: userID });
  if (rooms.length === 0) {
    res.status(400);
    throw new Error("Room not found");
  }

  //delete all task first
  rooms.forEach(async (room) => {
    await room.remove();
  });

  res.status(200).json({ message: "Success" });
});

module.exports = { createRoom, deleteRoom, updateRoom, getRooms, getRoom, deleteRoomByuserID };
