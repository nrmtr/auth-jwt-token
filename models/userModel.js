const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: {
        type: String
    }
})

module.exports = mongoose.model('users',userSchema)