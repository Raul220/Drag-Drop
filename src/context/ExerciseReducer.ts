import { ExerciseDataState, State } from "./ExerciseState";



export interface updateDataResponseActions {
    type: 'UPDATE_DATA_RESPONSE';
    payload: ExerciseDataState;
}

type Action =
    | updateDataResponseActions
    ;

const ExerciseReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "UPDATE_DATA_RESPONSE":
            return {
                ...state,
                exerciseData: action.payload,
            }
    }

}

export default ExerciseReducer;