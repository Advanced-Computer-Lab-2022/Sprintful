const mongoose = require('mongoose')

const corporateTraineeSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,       //What if the username was taken??
    },
    firstName:{
        type: String,
        default: ""
    },
    lastName:{
        type: String,
        default: ""
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password cannot be less than 6 characters'],

    },
    corporate: {
        type: String,
        required: [true, 'Please add a corporate'],
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


module.exports = mongoose.model('CorporateTrainee', corporateTraineeSchema)