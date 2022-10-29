const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Instructor =require('../models/instructorModel')
const Subtitle=require('../models/subtitleModel')
const Task=require('../models/taskModel')



const viewCourses = asyncHandler(async(req,res)=>{
    const course =await Course.find({},'title totalhours rating price')
    res.status(200).json(course)
})
const addCourse = asyncHandler(async (req,res)=>{
    // construct an object to add to the db
    const newCourse = new Course({
        title: req.body.title,
        subject:req.body.subject,
        price: req.body.price,
        totalhours: req.body.totalhours,
        shortsummary: req.body.shortsummary,
        instructor:'635a591011ecdc081ce890f7',
        previewvideolink:req.body.previewvideolink

        ,  //put a static id for the instructor for sprint 1
       // subtitles: req.body.subtitles
    });
    //newCourse.save().then(course => res.json(course)); // it is now in mem , save it to db
    newCourse.save(function(err){
        if (err){
            console.log(err);
        }})
    //putting the course id into an array newcourseid
    const newcourseid=[newCourse._id]; 
    //Saving the instructor reference id 
    //Getting the courses array and putting the neew course's id in this Instructor courses array
   const newCoursesList=((await Instructor.findById('635a591011ecdc081ce890f7')).courses).concat(newcourseid); //.concat concatenates the new array
   const updatedcoursesArray=await Instructor.findByIdAndUpdate('635a591011ecdc081ce890f7',{courses:newCoursesList}).exec();
    //put the static id in lines 
    res.json(newCourse)
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
    const subjectName=req.query.subject
    const MaxPriceamount =req.query.price
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


//Mehod for adding a subtitle for a certain course 
const addSubtitle=asyncHandler(async (req,res)=>{

//getting the id of the instructor 
 const instructorid = '635a591011ecdc081ce890f7'   //Static for the sake of sprint 1 and that we do not have any authentication technique implemented

                                                        
//attribute for subtitles (req.body) and course id from params
const courseid=req.params.courseid   //getting the id of the course  //we can send it as in body req.body
const title=req.body.title
const totalHours =req.body.totalHours

//Create the subtitle
const subtitle=new Subtitle({
    title:title,
    totalHours:totalHours,
    course:courseid


})
//add it to the subtitle coolections (.save())
subtitle.save(function(err){
    if (err){
        console.log(err);
    }})

//test


//add its id to to the specified course's array of subtitles (array of subtitles' ids)
const newSubtitleid=[subtitle._id]
const newSubtitleArray=(await Course.findById(courseid)).subtitles.concat(newSubtitleid)

const updateCourseSubtitles=await Course.findByIdAndUpdate(courseid,{subtitles:newSubtitleArray},{new :true})
//res.json(updateCourseSubtitles)
res.json(subtitle)

} )


const addTask =asyncHandler(async (req,res)=>{
    const Instructorid='635a591011ecdc081ce890f7'

    //attributes of task 
    const title=req.body.title
    const subtitleid=req.params.subtitleid    //getting the id of the course  //we can send it as in body req.body

    const task=new Task({
        title:title,
        subtitle:subtitleid
    
    
    })
    //add it to the subtitle coolections (.save())
    task.save(function(err){
        if (err){
            console.log(err);
        }})
    
    //test
    //res.json(task)

    const newTaskid=[task._id]
    const newTaskArray=(await Subtitle.findById(subtitleid)).tasks.concat(newTaskid)
    
    const updateSubtitlesTasks=await Subtitle.findByIdAndUpdate(subtitleid,{tasks:newTaskArray},{new :true})
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





module.exports = {addTask,addSubtitle,filterMyCourses,viewMyCourses,viewCourses ,addCourse};
