export const ACTION_TYPES = {
    SET_ACTIVE_MEAL: 'CONSTRUCTOR.SET_ACTIVE_MEAL',
    ADD_MEALS: 'CONSTRUCTOR.ADD_MEALS',
    SET_MEAL_NAME: 'CONSTRUCTOR.SET_MEAL_NAME',
    ADD_MEAL_PRODUCT: 'ADD_MEAL_PRODUCT',
    DELETE_MEAL_PRODUCT: 'DELETE_MEAL_PRODUCT',
    UPDATE_PRODUCT_AMOUNT: 'UPDATE_PRODUCT_AMOUNT',
    EDIT_MEAL_PLAN: 'EDIT_MEAL_PLAN',
    SET_NAME: 'SET_NAME',
    CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR'
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
    }),
    editMealPlan: (mealPlan) => ({
        type: ACTION_TYPES.EDIT_MEAL_PLAN,
        mealPlan
    }),
    setName: (name) => ({
        type: ACTION_TYPES.SET_NAME,
        name
    }),
    clearConstruct: () => ({
        type: ACTION_TYPES.CLEAR_CONSTRUCTOR
    })
};