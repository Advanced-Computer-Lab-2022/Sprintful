const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for this subtitle'],

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
        required: [true, "Set Subtitle id"]
    },


}, {
    timestamps: true
})



module.exports = mongoose.model('Task', taskSchema)