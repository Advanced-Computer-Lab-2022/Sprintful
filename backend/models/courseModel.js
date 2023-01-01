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
   /* ratingsArray: [{
        user: {
            type: 'ObjectId',
            ref:'user'   
        },
        username:String,
        //experience: String,
        //feedback: String,
        star: Number,
        date: {
            type: Date,
            default:Date.now
        }
     }],*/
    ratingsArray:{    //Not the best option but will be updated after authentication
        type: Array,
        default: [],
    },
    shortsummary: {
        type: String,
        requird: [true, 'Please add a short summary'],
    },
    reviews: {
        type: Array,
        default: [],
    },
    numofReviews: {
        type: Number,
        default: 0,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',                                 //we do not need to import Insrtuctor model to be able to write this line
        required:[true,"Set the instructor id"]
    },
    subtitles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtitle',
        default:[],
    }],
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

    discountExpireAt:{
        type :Date ,
        default:'2025-01-01'
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('Course', courseSchema)