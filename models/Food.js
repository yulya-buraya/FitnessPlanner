const { Schema, model, Types } = require('mongoose')

const Food = new Schema({
    name:
    {
        type: String,
        required: true,
    },
    category:
    {
        type: String,
        required: true
    },
    proteins:
    {
        type: Number,
        required: true
    },
    fats:
    {
        type:Number,
        required:true
    },
    carbhydrates:
    {
        type: Number,
        required: true
    },
    calory:
    {
        type: Number,
        required: true
    }
})

module.exports = model('Food', Food)
