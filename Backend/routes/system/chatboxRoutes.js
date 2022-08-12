const express = require("express");
const {
  createChatbox,
  getChatbox,
  updateChatbox,
  deleteChatbox,
} = require("../../controllers/system/chatboxController");
const { protect } = require("../../middlewares/authMiddelware");
const router = express.Router();

router.route("/").post(protect, createChatbox).get(protect, getChatbox);
router.route("/:id").put(protect, updateChatbox).delete(protect, deleteChatbox);

module.exports = router;
