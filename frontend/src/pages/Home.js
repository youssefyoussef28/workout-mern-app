import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`/api/workouts/`);
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
        console.log(workouts);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        <h2>Home</h2>

        {workouts &&
          workouts.map((workout) => {
            return <WorkoutDetails key={workout._id} workout={workout} />;
          })}
      </div>
    </div>
  );
};

export default Home;
