const mongoose = require('mongoose')

const corporatesSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a corporate name'],
        unique: true,
        lowercase: true,
        
    },
    subject: {
        type: String,
        required: [true, 'Please add a subject'],
    }
}, 
{
    timestamps: true
})



module.exports = mongoose.model('Corporates', corporatesSchema)