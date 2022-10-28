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
    const myCoursesDocuments=await Course.find({instructor :'635a591011ecdc081ce890f7'},'-_id title').exec()
    if(myCoursesDocuments.length===0){
      return  res.status(200).json({message :"No Courses to display !"})  //return is used to tell it do not complete the rest of function
    }
    res.status(200).json(myCoursesDocuments)

    //while loop in Javascript to put titles' values in an array to be able to work with them in Frontend

});

//Function for filtering the courses of the instructor himself based on subject or price  
const filterMyCourses=asyncHandler(async(req,res)=>{
     
    //Saving the id of the instructor 
    const instructorId='635a591011ecdc081ce890f7'
    //Getting the subject and price according the user's choice 
    const subjectName=req.params.subject
    const MaxPriceamount =req.params.price
    //Searching for the title of courses of this instructor himself whose its subject = the specified subject in filter or its price <= the specified price  ($lte)
      //for a free course 
       if(MaxPriceamount=='Free'){
        const queriedCourses=await Course.find({instructor:instructorId,$or:[{subject:subjectName},{price:0}]},'-_id title')
       }
     //for a paid course 
       else{
        const queriedCourses=await Course.find({instructor:instructorId,$or:[{subject:subjectName},{price:{$lte:MaxPriceamount} }]},'-_id title')
  
        }
    //checking for any results 
    if (queriedCourses.length===0){
     return res.json({message :"No courses with these choices are found "})
    }
    res.status(200).json(queriedCourses)
})





module.exports = { filterMyCourses,viewMyCourses,viewCourses ,addCourse};
