const mongoose = require('mongoose')

const requestAccessSchema = mongoose.Schema({
    corporateTraineeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CorporateTrainee',                                 
        required:[true,"Set the corporate trainee id"],
        
    },
    corporateTraineeUsername: {
        type: String,
        default: ""
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',                                
        required:[true,"Set the course id"],
        
    },
    courseName: {
        type: String,
        default: ""
    },
    state: {   //could be pending, false, true
        type: String,
        default: "false"
    },
    Corporate: {   //could be pending, false, true
        type: String
    }

},
 {
    timestamps: true
})

module.exports = mongoose.model('RequestAccess', requestAccessSchema)