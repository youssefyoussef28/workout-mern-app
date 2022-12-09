import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  // Delete Workout
  const deleteWorkout = async (id) => {
    const response = await fetch(`/api/workouts/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("Error in deleting");
    }
    if (response.ok) {
      console.log("deleted", json);
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch, deleteWorkout }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
