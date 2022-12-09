import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span
        className="material-symbols-outlined"
        onClick={() => {
          deleteWorkout(workout._id);
        }}
      >
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
