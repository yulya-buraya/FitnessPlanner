import {ACTION_TYPES} from "./action"
const initialState = 
    { name:'',
      fats:0,
      proteins:0,
      carbohydrates:0, 
      calories:0
    };

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_FOOD:
            return state + action.value;
            case ACTION_TYPES.DELETE_FOOD:
            return state + action.value;
        default:
            return state;
    }
}