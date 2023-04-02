import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import _default from "react-bootstrap/esm/Accordion";
import { DEFAULT_EXERCISE_DATA } from "../constants/variables";
import ExerciseReducer, { UpdateDataResponseActions } from "./ExerciseReducer";

export interface State {
    exerciseData: ExerciseDataState;
}

export interface Store {
    state: State;
    dispatch?: React.Dispatch<
         UpdateDataResponseActions
    >;
}

const initialState: State = {
    exerciseData: DEFAULT_EXERCISE_DATA,
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

export default ExerciseState;