const express = require("express");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET ALL WORKOUTS" });
});

// Get a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout" });
});

// Post a new workout
router.post("/", (req, res) => {
  res.json({ message: "Post a new workout" });
});

// Delete a new workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a new workout" });
});

// Update a new workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a new workout" });
});

module.exports = router;
