const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Instructor = require('../models/instructorModel')
const Subtitle = require('../models/subtitleModel')
const Task = require('../models/taskModel')



const addTask = asyncHandler(async (req, res) => {
    const Instructorid = '635a591011ecdc081ce890f7'

    //attributes of task 
    const title = req.body.title
    const subtitleid = req.params.subtitleid    //getting the id of the course  //we can send it as in body req.body

    const task = new Task({
        title: title,
        subtitle: subtitleid


    })
    //add it to the subtitle coolections (.save())
    task.save(function (err) {
        if (err) {
            console.log(err);
        }
    })

    //test
    //res.json(task)

    const newTaskid = [task._id]
    const newTaskArray = (await Subtitle.findById(subtitleid)).tasks.concat(newTaskid)

    const updateSubtitlesTasks = await Subtitle.findByIdAndUpdate(subtitleid, { tasks: newTaskArray }, { new: true })
    // res.json(updateSubtitlesTasks)

    res.json(task)


})


/*
 //check if no one of them is empty
if(courseid && title &&totalHours){  

//Create the subtitle
const subtitle=new Subtitle({
    title:title,
    totalHours:totalHours,
    course:courseid


})
subtitle.save(function(err){
    if (err){
        console.log(err);
    }})

//test
res.json(subtitle)
}

else(
    res.json({message :'Please fill in  all details'})
)

*/


//add it to the subtitle coolections (.save())

//add its id to to the specified course's array of subtitles (array of subtitles' ids)

module.exports = { addTask, addSubtitle }
