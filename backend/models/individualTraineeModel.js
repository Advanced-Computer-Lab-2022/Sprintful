const mongoose = require('mongoose')

const individualTraineeSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,       //What if the username was taken??
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password cannot be less than 6 characters'],

    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',                                 //we do not need to import Insrtuctor model to be able to write this line
        required:[true,"Set the course id"],
        default:[]
    }],
   /* courses: [{
                            //This is an array of its courses or the ids of the courses they take
       
    }],*/
}, {
    timestamps: true
})


module.exports = mongoose.model('IndividualTrainee', individualTraineeSchema)