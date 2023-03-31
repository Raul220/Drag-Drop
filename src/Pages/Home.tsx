import * as React from "react";
import { NavLink } from "react-router-dom";
import { useExerciseContext } from "../context/ExerciseState";

const Home = () => {
  const {
    state: { exerciseData },
    dispatch,
  } = useExerciseContext();

  return (
    <div className="nav">
      <NavLink to={exerciseData.solved === 'unsolved' ? "/exercise" : ''}>Ejercicio</NavLink>
      <NavLink to={exerciseData.solved !== 'unsolved' ? "/preview" : ''}>Comprobación</NavLink>
    </div>
  );
};

export default Home;
