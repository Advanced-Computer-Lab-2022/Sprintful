const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Add a subject to your report"]
    },
    body: {
        type: String,
        required: [true, "Add a body to your report"],
    },
    status: {
        type: String,
        default: "unseen"
    },
    type: {
        type: String,
        required: [true, "Add a type to your report"]
    },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',
    },

    individualTraineeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IndividualTrainee',
    },
    corporateTraineeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CorporateTrainee',
    }
})

module.exports = mongoose.model('Report', reportSchema)