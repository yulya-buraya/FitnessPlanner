const { Schema, model } = require('mongoose')

const Exercise = new Schema({

    name:
    {
        type: String,
        required: true,
        unique: true
    },
    muscule:
    {
        type: String,
        required: true
    },
    link:
    {
        type: String,
        required: true
    },
    inventory:
    {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
})

module.exports = model('Exercise', Exercise)
