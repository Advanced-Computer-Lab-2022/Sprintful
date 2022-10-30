const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Instructor = require('../models/instructorModel')

const viewCourses = asyncHandler(async(req,res)=>{
    const course =await Course.find({},'title totalhours rating price')
    res.status(200).json(course)
})

// const addCourse = asyncHandler(async (req,res)=>{
//     // construct an object to add to the db
//     const newCourse = new Course({
//         title: req.body.title,
//         price: req.body.price,
//         totalhours: req.body.totalhours,
//         rating: req.body.rating,
//         shortsummary: req.body.shortsummary,
//         subtitles: req.body.subtitles
//     });
//     newCourse.save().then(course => res.json(course)); // it is now in mem , save it to db
// })

const searchCourses = asyncHandler(async (req,res)=>{
    const {title, subject}=req.body
    let course

    if(subject!=null){
         course= await Course.find({instructor:'635a591011ecdc081ce890f7',$text: {$search: subject}},'-_id')
    }   
    if(title!=null){
        course= await Course.find({instructor:'635a591011ecdc081ce890f7',$text: {$search: title}},'-_id')
    }                                                             
   
    if(!course){
        res.status(400)
        throw new Error('Course not found') 
    }
    else{
        res.json(course)
    }
})

module.exports = { viewCourses ,searchCourses }
