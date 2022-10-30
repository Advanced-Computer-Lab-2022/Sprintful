const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for this subtitle'],
       
    },
         
    subtitle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtitle',
        required:[true,"Set Subtitle id"] 
    },

    // Questions array (ref :Questions)
    
    
    
         
    }, {timestamps: true
        })
        


module.exports = mongoose.model('Task',taskSchema )