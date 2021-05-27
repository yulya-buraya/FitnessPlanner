import { ACTION_TYPES } from "./action"

const initialState = {
    fats: 0,
    proteins: 0,
    carbohydrates: 0,
    calories: 0
};

export const biodataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_BIODATA:
            return { ...action.value };
        default:
            return state;
    }
}