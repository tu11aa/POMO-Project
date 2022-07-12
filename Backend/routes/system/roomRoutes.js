const express = require("express");
const {
  createRoom,
  deleteRoom,
  updateRoom,
  getRooms,
} = require("../../controllers/system/roomController");
const { protect } = require("../../middlewares/authMiddelware");
const router = express.Router();

router.use("/:roomID/tasks", require("./taskRoutes"));

router.route("/").post(protect, createRoom).get(protect, getRooms);
router.route("/:id").delete(protect, deleteRoom).put(protect, updateRoom);

module.exports = router;
