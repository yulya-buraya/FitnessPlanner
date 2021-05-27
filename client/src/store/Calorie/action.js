export const ACTION_TYPES = {
    ADD_CALORIES: 'CALORIE.ADD_CALORIES'
   }

export const caloriesAction = {
   addCalories: (value) => ({
        type: ACTION_TYPES.ADD_CALORIES,
        value
    })

}