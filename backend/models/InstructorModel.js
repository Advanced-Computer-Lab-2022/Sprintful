const mongoose = require('mongoose')

const instructorSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password cannot be less than 6 characters'],

    },
    firstName: {
        type: String,


    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0,
        range: [0, 5],
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    reviews: {
        type: Array,
        default: [],
    },
    money: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Instructor', instructorSchema)