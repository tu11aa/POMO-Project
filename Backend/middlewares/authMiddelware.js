const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");

const protect = asyncHandler(async (req, res, next) => {
  const header_auth = req.headers.authorization;

  if (header_auth && header_auth.startsWith("Bearer")) {
    try {
      const token = header_auth.split(" ")[1]; //get token in header string
      const decoded = jwt.verify(token, process.env.JWT_SECRET); //decoded to get id
      //didn't add check expire day

      req.user = await User.findById(decoded.id).select("-password"); //get user by id deselect password

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized");
  }
});

module.exports = { protect };
