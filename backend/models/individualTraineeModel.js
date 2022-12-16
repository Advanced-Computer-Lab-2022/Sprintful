const mongoose = require('mongoose')

const individualTraineeSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,       //What if the username was taken??
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,      
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password cannot be less than 6 characters'],

    },
    firstName: {
        type: String,
        required: [true, 'Please add a username'],
    },
    lastName: {
        type: String,
        required: [true, 'Please add a username'],
    },
    gender: {
        type: String, // not sure
        // required: [true, 'Please add a username'],
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',                                 //we do not need to import Insrtuctor model to be able to write this line
        required:[true,"Set the course id"],
        default:[]
    }],
    // role:{
    //     type: String,
    //     required: [true]
    // }
}, {
    timestamps: true
})


module.exports = mongoose.model('IndividualTrainee', individualTraineeSchema)