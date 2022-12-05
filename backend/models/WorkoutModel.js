// MongoDB is schemaLess
// We need mongoose to create this schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// This line below creates a model which we will import in other files
// The name should be in singular because it will Change to plural automatically to create a workout collection in MongoDB
// So below is Workout Model
// https://www.youtube.com/watch?v=O8IipcpTmYU&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=5
module.exports = mongoose.model("Workout", workoutSchema);
