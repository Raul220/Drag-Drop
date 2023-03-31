import * as React from "react";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useExerciseContext } from "../context/ExerciseState";
import styled from 'styled-components';

export interface ListToOrderElement {
  id: number;
  name: string;
}

const Exercise = () => {
  const {
    state: { exerciseData },
    dispatch,
  } = useExerciseContext();
  const [exerciseList, setExerciseList] = useState<ListToOrderElement[]>([]);

  useEffect(() => {
    let listToExercise: ListToOrderElement[] = []
    const list: string[] = shuffle(exerciseData.animals);
    list.forEach((element, index) => {
      const item: ListToOrderElement = {
        id: index,
        name: element,
      }
      listToExercise.push(item);
    });
    setExerciseList(listToExercise);
  }, []);

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
    <div>
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