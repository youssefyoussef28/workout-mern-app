const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// Delete a new workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a new workout" });
});

// Update a new workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a new workout" });
});

module.exports = router;
