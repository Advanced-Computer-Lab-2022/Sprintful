const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,
        minlength: [2, 'Username cannot be less than 2 characters'],
        lowercase: true,
        
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password cannot be less than 6 characters'],
    },
    // role:{
    //     type: String,
    //     required: [true]
    // }
}, {
    timestamps: true
})



module.exports = mongoose.model('Admin', adminSchema)