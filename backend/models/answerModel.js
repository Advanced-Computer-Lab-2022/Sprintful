const mongoose = require('mongoose')

const answerSchema = mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: [true, "Set Question id"]
    },
    choiceindex: {
        type: Number,
        required: [true, "Set choice index"],
    },
    corporate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Corporate',
    },
    individual: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Individual',
    },
})

module.exports = mongoose.model('Answer', answerSchema)