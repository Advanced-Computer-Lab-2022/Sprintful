const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for this question'],
    },

    number: {
        type: Number,
yy    },
    // Array of 4 choices
    choices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Choice',
        default: [],
        max: [4, 'Choices cannot be more than 4'],
    }],

    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: [true, "Set Task id"]
    },

}, {
    timestamps: true
})



module.exports = mongoose.model('Question', questionSchema)