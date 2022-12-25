const mongoose = require('mongoose')

const requestAccessSchema = mongoose.Schema({
    corporateTraineeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CorporateTrainee',                                 
        required:[true,"Set the corporate trainee id"],
        
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',                                
        required:[true,"Set the course id"],
        
    },
    state: {
        type: String,
        default: "false"
    }
},
 {
    timestamps: true
})

module.exports = mongoose.model('RequestAccess', requestAccessSchema)