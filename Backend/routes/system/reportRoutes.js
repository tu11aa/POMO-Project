const express = require("express");
const { createReport } = require("../../controllers/system/reportController");
const { protect } = require("../../middlewares/authMiddelware");
const router = express.Router();

router.route("/").post(protect, createReport);

module.exports = router;
