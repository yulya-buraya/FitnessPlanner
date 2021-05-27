export const ACTION_TYPES = {
    ADD_FOOD: 'FOOD.ADD_FOOD'
   }

export const foodAction = {
   addFood: (value) => ({
        type: ACTION_TYPES.ADD_FOOD,
        value
    }),
    deleteFood: (value) => ({
        type: ACTION_TYPES.DELETE_FOOD,
        value
    })

}