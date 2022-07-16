const express = require("express");
const router = express.Router({ mergeParams: true });
const { protect } = require("../../middlewares/authMiddelware");
const { createTask } = require("../../controllers/system/taskController");

router.route("/").post(protect, createTask);

module.exports = router;
