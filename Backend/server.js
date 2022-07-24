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

app.use(errorHandler); //use error handler

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/admins", require("./routes/adminRoutes"));
app.use("/api/systems", require("./routes/systemRoutes"));

app.use("/api/rooms", require("./routes/system/roomRoutes"));
app.use("/api/schedules", require("./routes/system/scheduleRoutes"));
app.use("/api/tasks", require("./routes/system/taskRoutes"));

//need route, because its created and add to a schedule so routes seem difference
// app.use("/api/tasks", require("./routes/system/taskRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
