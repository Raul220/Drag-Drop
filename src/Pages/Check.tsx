import * as React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import LinkComponent from "../components/LinkComponent/LinKComponent";
import { useExerciseContext } from "../context/ExerciseState";
import "./Check.scss";

const Check = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    state: { exerciseData },
  } = useExerciseContext();
  const rightElements: number = exerciseData.animals.filter(e => e.valid).length;
  const percent: number = rightElements*100/5;

  return exerciseData.solved ? (
    <div className="container-response">
      <h3 style={{color: percent > 50 ? 'green': 'red'}}>{percent == 100 ? "¡Felicidades! Acertaste en todas." : (percent ? `Conseguiste responder el ${percent}% correctamente.`:'No acertaste en ninguna posición.')}</h3>
      <ul>
        {
            exerciseData.animals.map((item, index) => (
                <li key={index} className={`response-element ${item.valid ? 'ok' : 'wrong'}`}>
                  {item.valid ? '✔ ' : 'X '}
                    {item.name}
                </li>
            ))
        }
      </ul>

      <LinkComponent url="/" text="Atrás" />   
      
    </div>
  ) : (
    <h1 style={{ textAlign: "center", color: 'red', marginTop: 100 }}> Acceso denegado</h1>
  );
};

export default Check;