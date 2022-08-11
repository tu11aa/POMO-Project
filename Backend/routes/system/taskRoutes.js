const express = require("express");
const router = express.Router({ mergeParams: true });
const { protect } = require("../../middlewares/authMiddelware");
const {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
} = require("../../controllers/system/taskController");

router.route("/").post(protect, createTask).get(protect, getTasks);
router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
