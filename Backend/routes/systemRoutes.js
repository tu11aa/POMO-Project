const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddelware");
const { getScheduleByUserID } = require("../controllers/systemController");

router.get("/schedules", protect, getScheduleByUserID);

module.exports = router;
