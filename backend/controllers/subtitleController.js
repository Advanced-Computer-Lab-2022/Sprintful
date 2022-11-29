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
  const update ={youtubevideo:videoLink ,videoDescription:videoDescription};

  const subtitleupdated=await Subtitle.findOneAndUpdate({_id :subtitle_id },update,{new : true});
  if(subtitleupdated){
  res.json(subtitleupdated);
  }
  
  else{
    res.json({message:"This subtitle is not found"})
  }




})


module.exports = { addSubtitle,addYoutubeLinkAndDescript}
