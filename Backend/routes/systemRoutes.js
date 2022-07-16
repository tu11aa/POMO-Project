const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddelware");
const { getScheduleByUserID } = require("../controllers/systemController");

module.exports = router;
