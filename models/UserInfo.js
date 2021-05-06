const { Schema, model, Types } = require('mongoose')

const UserInfo = new Schema({
    firstName:
    {
        type: String,
        required: true,
        unique: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    user:
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    age:
    {
        type: Number,
        required: true
    },
    height:
    {
        type: Number,
        required: true
    },
    weight:
    {
        type: Number,
        required: true
    }
})

module.exports = model('UserInfo', UserInfo)
