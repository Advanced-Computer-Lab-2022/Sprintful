const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for this task'],
    },
    // Array of Questions
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        default: [],
    }],

    subtitle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtitle',
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },


}, {
    timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)