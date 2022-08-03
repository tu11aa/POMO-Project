const express = require("express");
const {
  createReport,
  getReports,
} = require("../../controllers/system/reportController");
const { protect, protectAdmin } = require("../../middlewares/authMiddelware");
const router = express.Router();

router.route("/").post(protect, createReport).get(protectAdmin, getReports);


module.exports = router;
