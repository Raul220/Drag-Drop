import * as React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import LinkComponent from "../components/LinkComponent/LinKComponent";
import { useExerciseContext } from "../context/ExerciseState";
import "./Home.scss";

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
      <LinkComponent url={!exerciseData.solved ? "/exercise" : ''} text="Ejercicio" disabled={exerciseData.solved} />
      <LinkComponent url={!!exerciseData.solved ? "/check" : ''} text="Revisar" disabled={!exerciseData.solved} />
    </div>
  );
};

export default Home;
