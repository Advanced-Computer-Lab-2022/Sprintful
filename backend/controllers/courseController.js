const asyncHandler = require('express-async-handler')
// const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Instructor=require('../models/instructorModel')

// @desc    Get course by id
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id)

    if (course) {
        res.json(course)
    } else {
        res.status(404)
        throw new Error('Course not found')
    }
})

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const corporateGetCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({}).select('-price')
    if (courses) {
        res.json(courses)
    } else {
        res.status(404)
        throw new Error('Courses not found')
    }
})

const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({})
    if (courses) {
        res.json(courses)
    } else {
        res.status(404)
        throw new Error('Courses not found')
    }
})

const instructorViewCourses = asyncHandler(async (req, res) => {
    const course = await Course.find({}, 'title totalhours rating price')
    res.status(200).json(course)
})


// @desc Set course
// @route POST /api/courses
// @access Private

const addCourse = asyncHandler(async (req, res) => {
    // construct an object to add to the db
    //const discount =(req.body.discount)/100
    const newCourse = new Course({
        title: req.body.title,
        subject: req.body.subject,
        price: req.body.price,
        totalhours: req.body.totalhours,
        shortsummary: req.body.shortsummary,
        instructor: '635a591011ecdc081ce890f7',                              //'635a591011ecdc081ce890f7'  //635a5a8b2a5fa2d4c62ce116
        previewvideolink: req.body.previewvideolink,
        discount: req.body.discount,
        //put a static id for the instructor for sprint 1
        // subtitles: req.body.subtitles
    });
    //newCourse.save().then(course => res.json(course)); // it is now in mem , save it to db
    newCourse.save(function (err) {
        if (err) {
            console.log(err);
        }
    })
    //putting the course id into an array newcourseid
    const newcourseid = [newCourse._id];
    //Saving the instructor reference id 
    //Getting the courses array and putting the neew course's id in this Instructor courses array
    const newCoursesList = ((await Instructor.findById('635a591011ecdc081ce890f7')).courses).concat(newcourseid); //.concat concatenates the new array
    const updatedcoursesArray = await Instructor.findByIdAndUpdate('635a591011ecdc081ce890f7', { courses: newCoursesList }).exec();
    //put the static id in lines 
    res.json(newCourse)
})

// @desc GET courses by instructor
// @route GET /api/courses/instructor/:id
// @access Private
//Method for getting titles of courses given by the instructor himself (Requirement #)
const instructorCourses = asyncHandler(async (req, res) => {
    //Searching in Courses Collection to get courses of the insructor himself using his id , then projecting on the title field(title of course)
    const myCoursesDocuments = await Course.find({ instructor: '635a591011ecdc081ce890f7' }, '-_id title').exec()
    if (myCoursesDocuments.length === 0) {
        return res.status(200).json({ message: "No Courses to display !" })  //return is used to tell it do not complete the rest of function
    }
    res.status(200).json(myCoursesDocuments)

    //while loop in Javascript to put titles' values in an array to be able to work with them in Frontend
});

// @desc GET filtered courses by subject and price
// @route GET /api/courses/instructor/filterMyCourses
// @access Private
//Function for filtering the courses of the instructor himself based on subject or price  
const filterMyCourses = asyncHandler(async (req, res) => {

    //Saving the id of the instructor 
    const instructorId = '635a591011ecdc081ce890f7'
    //Getting the subject and price according the user's choice 
    const subjectName = req.query.subject
    const MaxPriceamount = req.query.price
    //Searching for the title of courses of this instructor himself whose its subject = the specified subject in filter or its price <= the specified price  ($lte)
    //for a free course 
    let queriedCourses = []
    if (MaxPriceamount == 0) {
        queriedCourses = await Course.find({ instructor: instructorId, $or: [{ subject: subjectName }, { price: 0 }] }, '-_id title')
    }
    //for a paid course 
    else {
        queriedCourses = await Course.find({ instructor: instructorId, $or: [{ subject: subjectName }, { price: { $lte: MaxPriceamount } }] }, '-_id title')

    }
    //checking for any results 
    if (queriedCourses.length === 0) {
        return res.json({ message: "No courses with these choices are found " })
    }
    res.status(200).json(queriedCourses)
})


// Search for a course based on course title or subject or instructor
const searchCourse= asyncHandler(async (req,res) => {
    const title = req.query.title;
    const subject = req.query.subject;
    const instructorName = req.query.instructor;
    const instructorId = await instructor.find({name:instructorName}).select('_id');

   let result
    if(subject == null && instructorName == null){
        result = await courseModel.find({title: title});
        res.json(result);
    } else if(title == null && instructorName == null){
        result = await courseModel.find({subject: subject});
        res.json(result);
    } else if(title == null && subject == null){
        result = await courseModel.find({instructor: instructorId});
        res.json(result);
    } else {
        res.status(400).json({error:"No course found"});
    }
}) 

//filter the courses based on a subject and/or rating

const filterSubjectRating = asyncHandler(async (req, res) => {
    const subject = req.query.subject;
    const rating = req.query.rating;
    //const course = await courseModel.find({$or:[{subject:subject},{rating:rating}]});

    const result = await courseModel.find({ subject: subject });
    const result2 = await courseModel.find({ rating: rating });
    const final = result.concat(result2);

    if (final.length > 0) {
        res.status(200).json(final);
    }

    else {
        res.status(400).json({ error: "No course found" });
    }
})

//filter the courses based on price (price can be FREE)
const filterPrice = asyncHandler(async (req, res) => {
    const price = req.query.price;
    // if(price == "FREE"){
    //     const result = await courseModel.find({price:0}); 
    //     if(result.length>0){
    //         res.status(200).json(result);
    //     }
    //     else{
    //         res.status(400).json({error:"No course found"});
    //     } 
    // }
    // else{
    const result = await courseModel.find({ price: { $lte: price } });
    if (result.length > 0) {
        res.status(200).json(result);
    }
    else {
        res.status(400).json({ error: "No course found" });
    }
})

module.exports = {
    getCourseById,
    getCourses,
    addCourse,
    instructorCourses,
    filterMyCourses,
    instructorViewCourses,
    corporateGetCourses,
    searchCourse,
    filterSubjectRating,
    filterPrice
}