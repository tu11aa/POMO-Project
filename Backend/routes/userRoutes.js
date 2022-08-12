//routes of user
const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getUser,
  deleteUser,
  getUsers,
  updateUser,
} = require("../controllers/userController");
const { protect, protectAdmin } = require("../middlewares/authMiddelware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/", protectAdmin, getUsers);
router
  .route("/:id")
  .get(protect, getUser)
  .delete(protectAdmin, deleteUser)
  .put(protect, updateUser);

module.exports = router;
