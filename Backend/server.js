const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/database");
const dotenv = require("dotenv").config();
// import { express } from "express";
// import colors from "colors";
// import { errorHandler } from "./middlewares/errorMiddleware";
// import connectDB from "./config/database";
// import dotenv from "dotenv/config";
const PORT = process.env.PORT || 5000;

connectDB(); //call func to connect to DB

const app = express();

app.use(express.json()); //allow to send json
app.use(express.urlencoded({ extended: false })); //allow using urlendcoded

app.use(errorHandler); //use error handler

app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
