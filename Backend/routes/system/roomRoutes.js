const express = require("express");
const {
  createRoom,
  deleteRoom,
  updateRoom,
  getRooms,
  getRoom,
  deleteRoomByuserID,
} = require("../../controllers/system/roomController");
const { protect, protectAdmin } = require("../../middlewares/authMiddelware");
const router = express.Router();

router.use("/:roomID/tasks", require("./taskRoutes"));

router.route("/test").delete(protectAdmin, deleteRoomByuserID);
router
  .route("/:id")
  .get(protect, getRoom)
  .delete(protect, deleteRoom)
  .put(protect, updateRoom);

router.route("/").post(protect, createRoom).get(protect, getRooms);

module.exports = router;
