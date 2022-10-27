const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
    },
    subject: {
        type: String,
    },
    totalhours: {
        type: Number,
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
    },
    rating: {
        type: Number,
        default: 0,
    },
    shortsummary: {
        type: String,
        requird: [true, 'Please add a short summary'],
    },
    reviews: {
        type: Array,
        default: [],
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',
        required:[true,"Set the instructor id"]
    },
    subtitles: {
        type: Array,
        default: [],
        required: [true, 'Please add subtitles'],
    },
    numofenrolledstudents: {
        type: Number,
        default: 0,
        
    },
    previewvideolink: {
        type: String,
        required: [true, 'Please add a preview video'],
    },
    discount: {
        type: Number,
        default: 0,
        required: [true, 'Please add subtitles'],
    },


},{
    timestamps: true
})


module.exports = mongoose.model('Course', courseSchema)