interface ItemListResponse {
    name: string;
    valid: number;
}

interface ExerciseDataState {
    animals: ItemListResponse[];
    solved: boolean;
}