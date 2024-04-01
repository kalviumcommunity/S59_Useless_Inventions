const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FirstName : {
        type : String,
        required : true
    },
    LastName : {
        type : String,
        required: false
    },
    Email : {
        type: String,
        required: true
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model('users', UserSchema)
module.exports = User