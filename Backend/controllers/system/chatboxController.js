const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const helper = require("../../helpers/helper");
const methodHelper = require("../../helpers/methodHelper");
const { Chatbox, Room, Message } = require("../../models/systemModel");

const createChatbox = asyncHandler(async (req, res) => {
  const { roomID } = req.body;

  if (!roomID)
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "PLease include all fields"
    );

  methodHelper.createDocument(res, Chatbox, {
    roomID,
  });
});

const updateChatbox = asyncHandler(async (req, res) => {
  const { content } = req.body;
  if (!content) {
    helper.sendRes(
      res,
      httpStatus.BAD_REQUEST,
      null,
      "PLease include all fields"
    );
  }

  const message = await Message.create({
    userID: req.user._id,
    content,
    time: Date.now(),
  });

  if (message) {
    const chatbox = await Chatbox.findById(req.params.id);
    if (chatbox) {
      chatbox.messageIDs.push(message._id);
      await chatbox.save();
      helper.sendRes(res, httpStatus.CREATED, message);
      return;
    }
  }

  helper.sendRes(res, httpStatus.BAD_REQUEST, null, "Add messgae success");
});

const getChatbox = asyncHandler(async (req, res) => {
  const chatbox = await Chatbox.findOne({
    roomID: req.body.roomID,
  }).populate({
    path: "messageIDs",
    populate: { path: "userID", select: "username" },
  });

  helper.sendRes(res, httpStatus.OK, chatbox);
});

const deleteChatbox = asyncHandler(async (req, res) => {
  methodHelper.deleteDocument(
    res,
    Chatbox,
    "Chatbox",
    req.params.id,
    async (chatbox) => {
      const room = await Room.findById(chatbox.roomID);
      return room && room.roomMater.equals(req.user._id);
    }
  );
});

module.exports = {
  createChatbox,
  updateChatbox,
  getChatbox,
  deleteChatbox,
};
