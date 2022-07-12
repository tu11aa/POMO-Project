const asyncHandler = require("express-async-handler");
const { mongo, default: mongoose } = require("mongoose");
const { Room } = require("../../models/systemModel");
const { User } = require("../../models/userModels");

const createRoom = asyncHandler(async (req, res) => {
  const { type, name, password, room_master, member_id, report_id } = req.body;

  if (!type || !name || !room_master) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  //check if user is exist
  const user = await User.findById(room_master);
  if (!user) {
    res.status(400);
    throw new Error("Room master is not exits");
  }

  //check if room's name is same
  if (await Room.findOne({ room_master: user._id, name: name })) {
    res.status(400);
    throw new Error("Room with same name is extis");
  }

  const room = await Room.create({
    type,
    name,
    password,
    room_master: user._id,
    member_id,
    report_id,
  });

  if (room) {
    res.status(201).json(room);
  } else {
    res.status(400);
    throw new error("Invalid room data");
  }
});

const deleteRoom = asyncHandler(async (req, res) => {
  const { id: _id } = req.body;

  if (!id) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  //check if room is exist
  const room = await Room.findById(id);
  if (!room) {
    res.status(400);
    throw new Error("Room is not exits");
  }

  const rs = await room.remove();

  res.status(200).json(rs);
});

module.exports = { createRoom, deleteRoom };
