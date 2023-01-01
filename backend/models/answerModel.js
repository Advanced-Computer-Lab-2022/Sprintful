const mongoose = require('mongoose')

const answerSchema = mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: [true, "Set Question id"]
    },
    choiceindex: {
        type: String,
        required: [true, "Set choice index"],
    },
    corporate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CorporateTrainee',
    },
    individual: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IndividualTrainee',
    },
})

module.exports = mongoose.model('Answer', answerSchema)