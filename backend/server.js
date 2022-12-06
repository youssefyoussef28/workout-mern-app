const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
// var cors = require("cors");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();
// app.use(cors());

//  middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/workouts", workoutRoutes);

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app!" });
});

//  connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`connected to DB and Listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
