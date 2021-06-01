const { Schema, model } = require('mongoose')

const Workout = new Schema({
    name:
    {
        type: String,
        required: true
    },

    purpose:
    {
        type: String,
        required: true
    },

    level:
    {
        type: String,
        required: true
    },

    inventory:
    {
        type: String
    },

    place: {
        type: String,
        required: true
    },

    picture: {
        type: String,
    },

    gender: {
        type: String,
        required: true
    },

    count: {
        type: Number,
    },

    duration: {
        type: String,
    },

    days: [{
        number: {
            type: Number
        },
        params: {
            type: String,
        },
        exercises: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Exercise'
            }
        ]
    }]

})

module.exports = model('Workout', Workout)
