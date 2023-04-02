import { State } from "./ExerciseState";

export interface UpdateDataResponseActions {
    type: 'UPDATE_DATA_RESPONSE';
    payload: ExerciseDataState;
}

type Action =
    | UpdateDataResponseActions
    ;

const ExerciseReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "UPDATE_DATA_RESPONSE":
            return {
                ...state,
                exerciseData: action.payload,
            };
        default:
            return state;
    }

}

export default ExerciseReducer;