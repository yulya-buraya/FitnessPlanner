export const ACTION_TYPES = {
    SET_ACTIVE_MEAL: 'CONSTRUCTOR.SET_ACTIVE_MEAL',
    ADD_MEALS: 'CONSTRUCTOR.ADD_MEALS',
    SET_MEAL_NAME: 'CONSTRUCTOR.SET_MEAL_NAME',
    ADD_MEAL_PRODUCT: 'ADD_MEAL_PRODUCT',
    DELETE_MEAL_PRODUCT: 'DELETE_MEAL_PRODUCT',
    UPDATE_PRODUCT_AMOUNT: 'UPDATE_PRODUCT_AMOUNT'
};

export const constructorActions = {
    setActiveMeal: (index) => ({
        type: ACTION_TYPES.SET_ACTIVE_MEAL,
        index
    }),
    addMeals: (count) => ({
        type: ACTION_TYPES.ADD_MEALS,
        count
    }),
    setMealName: (name) => ({
        type: ACTION_TYPES.SET_MEAL_NAME,
        name
    }),
    addMealProduct: (product) => ({
        type: ACTION_TYPES.ADD_MEAL_PRODUCT,
        product
    }),
    deleteMealProduct: (mealId, productId) => ({
        type: ACTION_TYPES.DELETE_MEAL_PRODUCT,
        mealId,
        productId
    }),
    updateProductAmount: (mealId, productId, amount) => ({
        type: ACTION_TYPES.UPDATE_PRODUCT_AMOUNT,
        mealId,
        productId,
        amount
    })
};