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
        required: [true, 'e.g. name@gmail.com'],
    },
    rating: {
        type: Number,
        default: 0,
        range: [0, 5],
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        default:[],
    }]
    ,
    reviews: {
        type: Array,
        default: [],
    },
    money: {
        type: Number,
        default: 0,
    },
    biography: {
        type: String,
        default: '',
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Instructor', instructorSchema)