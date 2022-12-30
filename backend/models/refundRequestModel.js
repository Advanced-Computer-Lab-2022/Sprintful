const mongoose = require('mongoose')

const RefundRequestSchema = mongoose.Schema({
 
    traineeName:{
        type:String 
                },

    course:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course', 
                  },
                     
    amount:{
        type:Number
    }  ,
               
    
    isAccepted:{
        type:Boolean,
        default:false
    }


    }, {timestamps: true
        })
        


module.exports = mongoose.model('RefundRequest',RefundRequestSchema )