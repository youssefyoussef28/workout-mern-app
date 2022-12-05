const express = require("express");
require("dotenv").config();

const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

//  middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app!" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
