const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/database");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

connectDB(); //call func to connect to DB

const app = express();

app.use(express.json()); //allow to send json
app.use(express.urlencoded({ extended: false })); //allow using urlendcoded

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/admins", require("./routes/adminRoutes"));
app.use("/api/systems", require("./routes/systemRoutes"));

app.use("/api/rooms", require("./routes/system/roomRoutes"));
app.use("/api/tasks", require("./routes/system/taskRoutes"));
app.use("/api/reports", require("./routes/system/reportRoutes"));
app.use("/api/chatboxes", require("./routes/system/chatboxRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
} else {
  app.get("/", (_, res) => {
    res.status(200).json({ message: "Welcome to the MONO API" });
  });
}

app.use(errorHandler); //use error handler

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
