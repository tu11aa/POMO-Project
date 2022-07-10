const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getMe,
} = require("../controllers/adminController");
const { protectAdmin } = require("../middlewares/authMiddelware");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/me", protectAdmin, getMe);

module.exports = router;
