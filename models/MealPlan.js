const { Schema, model, Types } = require('mongoose')

const MealPlan = new Schema({
   
    name:
    {
        type: String,
        required: true,
    },
    calories:
    {
        type: Number,
      
    },
    proteins:{
        type: Number,
   
    },
    fats: {
        type: Number,
    
    },
    carbhydrates: {
        type: Number,

    },
    user:
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    meals:[
        {
            name:{
                type: String,
         
            },
            products:[
                {
                    amount:
                    {
                        type: Number,
                   
                    },
                    name:{
                        type: String,
                     
                    },
                    category:{
                        type: String,
                 
                    },
                    proteins:{
                        type: Number,
                   
                    },
                    fats: {
                        type: Number,
                    
                    },
                    carbhydrates: {
                        type: Number,
               
                    },
                    calory: {
                        type: Number,
               
                    }
                }
            ]
        }
    ]
 })

module.exports = model('MealPlan', MealPlan)
