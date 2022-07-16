const express = require("express");
const {
  createSchedule,
  getSchedules,
  getSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../../controllers/system/scheduleController");
const { protect } = require("../../middlewares/authMiddelware");
const router = express.Router();

router.route("/").post(protect, createSchedule).get(protect, getSchedules);
router
  .route("/:id")
  .get(protect, getSchedule)
  .put(protect, updateSchedule)
  .delete(protect, deleteSchedule);

module.exports = router;
