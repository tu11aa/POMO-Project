const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getMe,
  deleteAdmin,
} = require("../controllers/adminController");
const { protectAdmin } = require("../middlewares/authMiddelware");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/me", protectAdmin, getMe);
router.delete("/:id", protectAdmin, deleteAdmin);

module.exports = router;
