import * as React from "react";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useExerciseContext } from "../context/ExerciseState";

export interface ListToOrder {
  id: number;
  name: string;
}

const Exercise = () => {
  const {
    state: { exerciseData },
    dispatch,
  } = useExerciseContext();
  const [exerciseList, setExerciseList] = useState<ListToOrder[]>([]);

  // useEffect(() => {
  //   debugger
  //   // setList(shuffle(exerciseData.animals));
  // }, [list]);

  /**
   * Dado un arreglo cambiar orden al azar
   * @param array lista a sortear
   * @returns arreglo desordenado
   */
  const shuffle = (array: string[]) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  return (
    <div className="container">
      <h3>Ordena alfabeticamente los siguientes animales.</h3>
      <ReactSortable list={exerciseList} setList={setExerciseList}>
        {
          exerciseList.map((item, index) => (
            <span key={index}>{item.name}</span>
          ))
        }

      </ReactSortable>
    </div>
  );
};

export default Exercise;