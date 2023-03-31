import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import ExerciseReducer, { updateDataResponseActions } from "./ExerciseReducer";


export interface ExerciseDataState {
    animals: string[];
    solved: 'ok' | 'wrong' | 'unsolved';
}

export interface State {
    exerciseData: ExerciseDataState;
}

export interface Store {
    state: State;
    dispatch?: React.Dispatch<
        | updateDataResponseActions
    >;
}

const initialState: State = {
    exerciseData: {
        animals: ['Alcon', 'Cangrejo', 'Gato', 'Perro','Venado' ],
        solved: 'unsolved',
    },
};

const ExerciseContext = createContext<Store>({ state: initialState });
export const useExerciseContext = () => useContext(ExerciseContext);

const ExerciseState: React.FC<PropsWithChildren> = (props) => {
    const [state, dispatch] = useReducer(ExerciseReducer, initialState);

    return (
        <ExerciseContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ExerciseContext.Provider>
    );
}