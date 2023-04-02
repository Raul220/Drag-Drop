import * as React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useExerciseContext } from "../context/ExerciseState";

const Home = () => {
  const {
    state: { exerciseData },
    dispatch,
  } = useExerciseContext();

  useEffect(() => {
    console.log(exerciseData);
  }, [])

  return (
    <div className="nav">
      <NavLink to={!exerciseData.solved ? "/exercise" : ''}>Ejercicio</NavLink>
      <NavLink to={!!exerciseData.solved ? "/preview" : ''}>Comprobación</NavLink>

      <ol>
        {
          exerciseData.animals.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))
        }
      </ol>
    </div>
  );
};

export default Home;
