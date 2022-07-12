const express = require("express");
const {
  createRoom,
  deleteRoom,
} = require("../../controllers/system/roomController");
const { protect } = require("../../middlewares/authMiddelware");
const router = express.Router();

router.route("/").post(protect, createRoom);

module.exports = router;
