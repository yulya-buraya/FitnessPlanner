export const ACTION_TYPES = {
    SET_BIODATA: 'BIODATA.SET_BIODATA'
   }

export const biodataAction = {
   setBiodata: (value) => ({
        type: ACTION_TYPES.SET_BIODATA,
        value
    })

}