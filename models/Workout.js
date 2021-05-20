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
/*         required: true
 */    },

    gender: {
        type: String,
        required: true
    },

    count: {
        type: Number,
/*         required: true
 */    },

    duration: {
        type: String,
/*         required: true
 */    },

    /*     user:
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    unique: true
                }
            ], */

    days: [{
        number: {
            type: Number
        },
        params: {
            type: String,
            /*             required: true*/
        },
        exercises: [
            {
                type: String,
                ref: 'Exercise'
            }
        ]
    }]

})

module.exports = model('Workout', Workout)
