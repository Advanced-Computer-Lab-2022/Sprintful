const mongoose = require('mongoose')

const subtitleSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for this subtitle'],
       
    },
    totalHours :{
        type: Number,
        required: [true, 'Please add a total hours for this subtitle'],
    },
         
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required:[true,"Set Course id"] 
    },
         
    }, {timestamps: true
        })
        


module.exports = mongoose.model('Subtitle',subtitleSchema )