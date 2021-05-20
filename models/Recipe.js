const { Schema, model } = require('mongoose')

const Recipe = new Schema({
    duration:
    {
        type: String,
        required: true
    },

    servings:
    {
        type: String,
        required: true
    },

    picture:
    {
        type: String,
        required: true
    },
    food:
        
            {
                type: Schema.Types.ObjectId,
                ref: 'Food'
            },

    ingredients: [{
        name: {
            type: String
        },
        count: {
            type: Number
        },
        metric:
        {
            type: String
        }

    }],
    instructions: [{
        step: {
            type: Number
        },
        description: {
            type: String         
        },
    }]
})

module.exports = model('Recipe', Recipe)
