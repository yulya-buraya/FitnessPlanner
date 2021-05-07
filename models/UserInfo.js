const { Schema, model, Types } = require('mongoose')

const UserInfo = new Schema({
 
    
    firstname:
    {
        type: String,
        required: true,
    },
    lastname:
    {
        type: String,
        required: true
    },
    user:
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'User', 
                unique: true

            }
        ],
    age:
    {
        type: Number,
        required: true
    },
    gender:
    {
        type:String,
        required:true
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
    }, 
    activity:
    {
        type:String,
        required:true
    },
    purpose:
    {
        type:String,
        required:true
    }
})

module.exports = model('UserInfo', UserInfo)
