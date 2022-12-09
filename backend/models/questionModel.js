const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for this question'],
    },

    //number: {
     //   type: Number,
    //},
    // Array of 4 choices
    choices: [{
        text: String,
        isCorrect: Boolean,
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