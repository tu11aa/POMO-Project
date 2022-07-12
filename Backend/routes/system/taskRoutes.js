const express = require("express");
const router = express.Router();
const { protect } = require("../../middlewares/authMiddelware");
const { createTask } = require("../../controllers/system/taskController");

router.route("/").post(protect, createTask);

module.exports = router;
