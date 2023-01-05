const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Subtitle = require('../models/subtitleModel')

//Mehod for adding a subtitle for a certain course 
const addSubtitle = asyncHandler(async (req, res) => {

    //getting the id of the instructor 
    const instructorid = '635a591011ecdc081ce890f7'   //Static for the sake of sprint 1 and that we do not have any authentication technique implemented

    //attribute for subtitles (req.body) and course id from params
    const courseid = req.params.courseid   //getting the id of the course  //we can send it as in body req.body
    const title = req.body.title
    const totalHours = req.body.totalHours
    const  content =req.body.content 
    //Create the subtitle
    const subtitle = new Subtitle({
        title: title,
        totalHours: totalHours,
        course: courseid,
        content:content


    })
    //add it to the subtitle coolections (.save())
    subtitle.save(function (err) {
        if (err) {
            console.log(err);
        }
    })

    //add its id to to the specified course's array of subtitles (array of subtitles' ids)
    const newSubtitleid = [subtitle._id]
    const newSubtitleArray = (await Course.findById(courseid)).subtitles.concat(newSubtitleid)

    const updateCourseSubtitles = await Course.findByIdAndUpdate(courseid, { subtitles: newSubtitleArray }, { new: true })
    res.json(subtitle)

})

const addYoutubeLinkAndDescript =asyncHandler(async (req,res)=>{
 const subtitle_id=req.params.subtitleid  ;
  const videoLink =req.body.youtubevideo;
  const videoDescription=req.body.videoDescription;
  const videohours=parseInt(req.body.videohours);
  console.log('heree')
  //finding No.of hours of that video =No.of hours of subtitle/No of videos in that subtitle 
     //finding the subtitle 
     const subtitle=await Subtitle.findById(subtitle_id)
     const subtitleshours=subtitle.totalHours
     const videoArray=subtitle.videos;
     const videosArrayLength=subtitle.videos.length
     const newVideo={youtubevideo :videoLink , videoDescription :videoDescription ,totalNoofHours :videohours  }
     const PartialVideoArray=[newVideo]

     //getting total number of video hours in subtitle and adding to them new video hours then checking if it is possible to 
      // add the new video 
      //let totalnumberofVideoHours ;
      let videohoursSum=0;
      //let videodocument;
      for(  i=0; i<videosArrayLength;i++){
       
        videohoursSum=videohoursSum+subtitle.videos[i].totalNoofHours
        }

        videohoursSum=videohoursSum+videohours;
        console.log(videohoursSum)
        console.log(!(videohoursSum > subtitleshours))
        if(!(videohoursSum > subtitleshours)){
            const newVideoArray=subtitle.videos.concat(PartialVideoArray)
            const updatingvideos=await Subtitle.findOneAndUpdate({_id:subtitle_id},{videos:newVideoArray},{new:true});
            if(updatingvideos){
               res.json(updatingvideos);

            }
            else{
             res.json({message:"error"})
            }
    

        }
        else{
            res.json({message:"Sorry cannot add Video"})
        }



     //Finding Past video array and concatenating to it newVideoArray
     





  //const newvideo ={youtubevideo:videoLink ,videoDescription:videoDescription};

//   const subtitleupdated=await Subtitle.findOneAndUpdate({_id :subtitle_id },update,{new : true});
  
  
  
})

const getSubtitle=asyncHandler(async(req,res)=>{
    const subtitleid=req.params.subtitleid;
    // const subtitle=await Subtitle.findById(subtitleid).exec();
    //  res.json(subtitle);
    const idArray=subtitleid.split("\n")
    const newid=idArray[0];
    const subtitle= await Subtitle.findOne({_id:newid}).populate('tasks')
    res.json(subtitle);
}    
)


const addContent=asyncHandler(async(req,res)=>{

    const subtitle_id=req.params.subtitleid  ;
    const idArray=subtitle_id.split("\n")
    const newid=idArray[0];
    const content =req.body.content;
   
    const update ={content:content};
  
    const subtitleupdated=await Subtitle.findOneAndUpdate({_id :newid},update,{new : true});
    if(subtitleupdated){
    res.json(subtitleupdated);
    }
    
    else{
      res.json({message:"This subtitle is not found"})
    }
   
}    
)

module.exports = { addSubtitle,addYoutubeLinkAndDescript,getSubtitle,addContent}
