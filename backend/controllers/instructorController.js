const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Instructor =require('../models/instructorModel')

const viewCourses = asyncHandler(async(req,res)=>{
    const course =await Course.find({},'title totalhours rating price')
    res.status(200).json(course)
})
const addCourse = asyncHandler(async (req,res)=>{
    // construct an object to add to the db
    const newCourse = new Course({
        title: req.body.title,
        price: req.body.price,
        totalhours: req.body.totalhours,
        rating: req.body.rating,
        shortsummary: req.body.shortsummary,
        instructor:'635a591011ecdc081ce890f7'
        ,  //put a static id for the instructor for sprint 1
        subtitles: req.body.subtitles
    });
    newCourse.save().then(course => res.json(course)); // it is now in mem , save it to db
    //putting the course id into an array newcourseid
    let newcourseid=[newCourse._id]; 
    //Saving the instructor reference id 
    //Getting the courses array and putting the neew course's id in this Instructor courses array
   let newCoursesList=(await Instructor.findById('635a591011ecdc081ce890f7').courses).concat(newcourseid); //.concat concatenates the new array
   const updatedcoursesArray=await Instructor.findByIdAndUpdate('635a591011ecdc081ce890f7',{courses:newCoursesList}).exec();
    //put the static id in lines 
})

//Method for getting titles of courses given by the instructor himself (Requirement #)
const viewMyCourses=asyncHandler(async(req,res)=>{
    //Searching in Courses Collection to get courses of the insructor himself using his id , then projecting on the title field(title of course)
    const myCoursesDocuments=await Course.find({instructor :'635a591011ecdc081ce890f7'},'title').exec()
    res.json(myCoursesDocuments)

    //while loop in Javascript to put titles' values in an array to be able to work with them in Frontend
    
});







module.exports = { viewCourses ,addCourse};
