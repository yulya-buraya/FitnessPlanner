import { combineReducers } from 'redux';
import { biodataReducer as biodata } from '../store/Biodata/reducer';
import { caloriesReducer as calories } from '../store/Calorie/reducer';
import { constructorReducer } from '../store/Constructor/reducer';

export const rootReducer = combineReducers({
    biodata,
    calories,
    mealConstructor: constructorReducer
});