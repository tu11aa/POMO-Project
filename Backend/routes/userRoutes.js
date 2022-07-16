//routes of user
const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getUser,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddelware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/:id", protect, getUser);

module.exports = router;
