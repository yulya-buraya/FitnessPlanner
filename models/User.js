const {Schema, model, Types} = require('mongoose')

const User = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  roles: [{ type: String, ref: 'Role' }]
})

module.exports = model('User', User)
