//routes of user
const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");

router.get("/register", registerUser);

module.exports = router;
