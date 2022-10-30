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

    //Create the subtitle
    const subtitle = new Subtitle({
        title: title,
        totalHours: totalHours,
        course: courseid


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

module.exports = { addSubtitle}
