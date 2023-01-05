const mongoose = require('mongoose')

const corporateWatchedVideosSchema= mongoose.Schema({
    corporateid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IndividualTrainee',       //What if the username was taken??
    },
   
    videosWatched: [{
       type: String, 
       default:[]  //save the ids as strings 
    }],
}, {
    timestamps: true
})



module.exports = mongoose.model('IndividualWatchedVideos',corporateWatchedVideosSchema ) 