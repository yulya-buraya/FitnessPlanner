import { ACTION_TYPES } from "./action"

const initialState = {
    current: 0,
    meals: [],
    biodata: {
        fats: 0,
        proteins: 0,
        carbhydrates: 0,
        calory: 0
    }
};

const mealTemplate = {
    name: '',
    products: []
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_ACTIVE_MEAL:
            return { ...state, current: action.index };
        case ACTION_TYPES.ADD_MEALS:
            if(state.meals.length === 0) {
                state.meals = Array(action.count)
                    .fill({})
                    .map(() => ({ name: '', products: [] }));
            }

            if(state.meals.length !== 0 && state.meals.length < action.count) {
                state.meals
                    .push(...Array(action.count - state.meals.length)
                        .fill({})
                        .map(() => ({ name: '', products: [] }))
                    );
            }

            if(state.meals.length !== 0 && state.meals.length > action.count) {
                state.meals = state.meals.slice(0, action.count);
            }

            return { ...state };
        case ACTION_TYPES.SET_MEAL_NAME:
            const { name } = action;
            state.meals[state.current].name = name;
            return { ...state };
        case ACTION_TYPES.ADD_MEAL_PRODUCT:
            action.product.amount = 100;
            state.biodata = addBiodata(state.biodata, action.product);
            state.meals[state.current].products.push({ ...action.product });
            return { ...state };
        case ACTION_TYPES.DELETE_MEAL_PRODUCT:
            const { mealId, productId } = action;
            state.biodata = deleteBiodata(state.biodata, state.meals[mealId].products[productId]);
            state.meals[mealId].products.splice(productId, 1);
            return { ...state };
        case ACTION_TYPES.UPDATE_PRODUCT_AMOUNT:
            state.biodata = deleteBiodata(state.biodata, state.meals[action.mealId].products[action.productId]);
            state.meals[action.mealId].products[action.productId].amount = +action.amount;
            state.biodata = addBiodata(state.biodata, state.meals[action.mealId].products[action.productId]);
            return { ...state };
        default:
            return { ...state };
    }
}

function calculate(amount, value) {
    const res = ((value * amount / 100).toFixed(2));
    console.log(res);
    return res;
}

function addBiodata(biodata, product) {
    const { amount, fats, proteins, carbhydrates, calory } = product;

    biodata.fats += +calculate(amount, fats);
    biodata.proteins += +calculate(amount, proteins);
    biodata.carbhydrates += +calculate(amount, carbhydrates);
    biodata.calory += +calculate(amount, calory);

    return biodata;
}

function deleteBiodata(biodata, product) {
    const { amount, fats, proteins, carbhydrates, calory } = product;

    biodata.fats -= +calculate(amount, fats);
    biodata.proteins -= +calculate(amount, proteins);
    biodata.carbhydrates -= +calculate(amount, carbhydrates);
    biodata.calory -= +calculate(amount, calory);

    return biodata;
}

function fix(biodata) {
}