const mongoose = require('mongoose')

const choiceSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for this choice'],
    },
    correctness: {
        type: Boolean,
        required: [true, 'Please add a correctness for this choice'],
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: [true, "Set Question id"]
    },

})

module.exports = mongoose.model('Choice', choiceSchema)