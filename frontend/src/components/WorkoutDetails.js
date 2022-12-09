import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { deleteWorkout } = useContext(WorkoutsContext);



  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span
        onClick={() => {
          deleteWorkout(workout._id);
        }}
      >
        Delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
