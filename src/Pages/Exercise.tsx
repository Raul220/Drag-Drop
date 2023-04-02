import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ReactSortable } from "react-sortablejs";
import { useExerciseContext } from "../context/ExerciseState";
import "./Exercise.scss";

export interface ListToOrderElement {
  id: number;
  name: string;
}

const Exercise = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    state: { exerciseData },
  } = useExerciseContext();
  const [exerciseList, setExerciseList] = useState<ListToOrderElement[]>([]);
  const [correctList, setCorrectList] = useState<ItemListResponse[]>([]);

  useEffect(() => {
    setCorrectList(exerciseData.animals);
    let listToExercise: ListToOrderElement[] = []
    let animalNames: string[] = [];
    exerciseData.animals.forEach(e => animalNames.push(e.name));
    const list: string[] = shuffle(animalNames);
    list.forEach((element, index) => {
      const item: ListToOrderElement = {
        id: index,
        name: element,
      }
      listToExercise.push(item);
    });
    setExerciseList(listToExercise);
  }, []);
  useEffect(() => console.log(exerciseData), [exerciseData])

  const save = () => {
    let array: ItemListResponse[] = [];
    exerciseList.forEach((element, index) => {
      const item: ItemListResponse = {
        name: element.name,
        valid: element.name === correctList[index].name ? 1 : 0,
      }
      array.push(item);
    });
    const response: ExerciseDataState = {
      animals: array,
      solved: true,
    }
    if (dispatch) {
      dispatch({
        type: 'UPDATE_DATA_RESPONSE',
        payload: response
      });
    }
    console.log(exerciseData);
    navigate('/');
  }

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
    <div className="container-exercise">
      <h3>Ordena alfabeticamente los siguientes animales.</h3>
      <ReactSortable list={exerciseList} setList={setExerciseList} className="sortable-list">
        {
          exerciseList.map((item, index) => (
            <span key={index} className="list-item" >{item.name}</span>
          ))
        }

      </ReactSortable>

      <button className="save-btn" onClick={save}>Guardar</button>
    </div>
  );
};

export default Exercise;