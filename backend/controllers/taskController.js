const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Subtitle = require('../models/subtitleModel')
const Task = require('../models/taskModel')
const Course = require('../models/courseModel')
const { log } = require('console')

// const addTask = asyncHandler(async (req, res) => {
//     const Instructorid = '635a591011ecdc081ce890f7'

//     //attributes of task 
//     const title = req.body.title
//     //const subtitleid = req.params.subtitleid    //getting the id of the course  //we can send it as in body req.body

//     const task = new Task({
//         title: title,
//         //subtitle: subtitleid


//     })
//     //add it to the subtitle coolections (.save())
//     task.save(function (err) {
//         if (err) {
//             console.log(err);
//         }
//     })

//     //test
//     //res.json(task)

//     const newTaskid = [task._id]
//     //const newTaskArray = (await Subtitle.findById(subtitleid)).tasks.concat(newTaskid)

//     //const updateSubtitlesTasks = await Subtitle.findByIdAndUpdate(subtitleid, { tasks: newTaskArray }, { new: true })
//     // res.json(updateSubtitlesTasks)

//     res.json(task)


// })

const addTask = asyncHandler(async(req,res) =>{
    const title = req.body.title;
    //const courseId = '638488aceed9d3bac959ba50'
    const id = req.query.id;
    //const subtitleId = '635dac77833ecf164e898814'
    //const subtitleId = req.params.subtitle
    const course = await Course.findById(id)
    const subtitle= await Subtitle.findById(id)
    if (course) {
        console.log("course found")
        console.log("old course"+ course)
    const newTask = await Task.create({
        title: title,
        course: id
    });
    console.log("course found"),

    console.log(newTask)
    //course.tasks.push(newTask)
    
    console.log("course found task pushed")
    await course.save()
    console.log("new course" + course)
    console.log("course found, course saved")

    res.status(201).json(newTask)
    }
    else if(subtitle) {
        const newTask = await Task.create({
            title: title,
            subtitle: id
        });
        subtitle.tasks.push(newTask)
        await subtitle.save()
        res.status(201).json(newTask)
    }
    else{
        res.status(404)
        throw new Error('Course or Subtitle not found')
    }
});


module.exports = { addTask}