const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const req = require('express/lib/request')
// const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const CorporateTrainee = require('../models/corporateTraineeModel')
const IndividualTrainee = require('../models/individualTraineeModel')
const Instructor = require('../models/instructorModel')

// @desc    Get course by id
// @route   GET /api/courses/:id
// @access  Public

const getCourseById = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.query.id)

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

// search for all courses for corporate
const corporateGetCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({}).select('-price')
    if (courses) {
        res.json(courses)
    } else {
        res.status(404)
        throw new Error('Courses not found')
    }
})

// search for all courses except for corporate and instructor
const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({})
    if (courses) {
        res.json(courses)
    } else {
        res.status(404)
        throw new Error('Courses not found')
    }
})

// search for all courses for instructor
const instructorViewCourses = asyncHandler(async (req, res) => {
    const course = await Course.find({}, 'title totalhours rating price')
    res.status(200).json(course)
})


// @desc Set course
// @route POST /api/courses
// @access Private

// for instructor
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
    res.status(200).json(newCourse)
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

const CorporateCourses = asyncHandler(async (req, res) => {
    //Searching in Courses Collection to get courses of the insructor himself using his id , then projecting on the title field(title of course)
    const myCoursesDocuments = await CorporateTrainee.find({ _id: req.query.id }, '-_id courses').exec()
    let coursesIds;
    let flatArray;
    console.log(myCoursesDocuments)
    if (myCoursesDocuments[0] != null) {
        coursesIds = myCoursesDocuments[0].courses
        const courses = []
        for (let i = 0; i < coursesIds.length; i++) {
            courses[i] = (await Course.find({ _id: coursesIds[i] }))// [ [{course1}], [{course2}], [{course3}] ] --> [ {course1}, {course2}, {course3}]
        }
        flatArray = [].concat.apply([], courses);
    }
    // const courses = coursesIds.map( (course) => {


    // if (courses.length === 0) {
    //     return res.status(200).json({ message: "No Courses to display !" })  //return is used to tell it do not complete the rest of function
    // }
    console.log(flatArray)
    res.status(200).json(flatArray)
    //while loop in Javascript to put titles' values in an array to be able to work with them in Frontend
});


const IndividualCourses = asyncHandler(async (req, res) => {
    //Searching in Courses Collection to get courses of the insructor himself using his id , then projecting on the title field(title of course)
    const myCoursesDocuments = await IndividualTrainee.find({ _id: req.query.id }, '-_id courses').exec()
    let coursesIds;
    let flatArray;
    console.log(myCoursesDocuments)
    if (myCoursesDocuments[0] != null) {
        coursesIds = myCoursesDocuments[0].courses
        const courses = []
        for (let i = 0; i < coursesIds.length; i++) {
            courses[i] = (await Course.find({ _id: coursesIds[i] }))// [ [{course1}], [{course2}], [{course3}] ] --> [ {course1}, {course2}, {course3}]
        }
        flatArray = [].concat.apply([], courses);
    }
    console.log(flatArray)
    res.status(200).json(flatArray)
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
const searchCourse = asyncHandler(async (req, res) => {
    const title = req.query.title;
    const subject = req.query.subject;
    const firstName = req.query.first;
    const lastName = req.query.last;

    let result
    if (subject == null && firstName == null && lastName == null) {
        result = await Course.find({ title: title });
        res.json(result);
    } else if (title == null && firstName == null && lastName == null) {
        result = await Course.find({ subject: subject });
        res.json(result);
    } else if (title == null && subject == null) {
        const instructorId = await Instructor.find({ firstName: firstName, lastName: lastName }).select('_id').exec();
        result = await Course.find({ instructor: instructorId });
        res.json(result);
    } else {
        res.status(400).json({ error: "No course found" });
    }
})

//filter the courses based on a subject and/or rating

const filterSubjectRating = asyncHandler(async (req, res) => {
    const subject = req.query.subject;
    const rating = req.query.rating;
    //const course = await courseModel.find({$or:[{subject:subject},{rating:rating}]});

    const result = await Course.find({ subject: subject });
    const result2 = await Course.find({ rating: rating });
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
    const result = await Course.find({ price: { $lte: price } });
    if (result.length > 0) {
        res.status(200).json(result);
    }
    else {
        res.status(400).json({ error: "No course found" });
    }
})


//add a review on a course

const addCourseReview = asyncHandler(async (req, res, next) => {
    const { rating, comment, courseId } = req.body;
    console.log("I am woring");
    const review = {
        // user: req.user._id,    //no authentication 
        //name: req.user.name,
        rating: Number(rating),
        comment

    }
    const course = await Course.findById(courseId);
    /*const isReviewed = course.reviews.find(    //No authentication baby
        r => r.user.toString() === req.user._id.toString()
    )

    if(isReviewed){ 
        course.reviews.array.forEach(review => {
            if(review.user.toString() === req.user._id.toString()) {
                review.review = comment;
                review.rating = rating;
            }    
        });
    }*/
    //in else part
    course.reviews.push(comment);
    course.numofReviews = course.reviews.length;
    //review.rating = Number (rating);
    course.ratingsArray.push(rating);

    //course.rating = (ratingsArray / ratingsArray.length) * ratingsArray.length;

    var total = 0;
    for (var i = 0; i < course.ratingsArray.length; i++) {
        total += course.ratingsArray[i];
    }
    var avg = total / course.ratingsArray.length;
    course.rating = avg;
    console.log(avg);
    console.log(course.rating);
    //course.rating = course.reviews.reduce((acc, item) => item.rating + acc, 0) / course.reviews.length
    /* const updatedCurrentRating = await Course.findOneAndUpdate(
         { _id: req.params.courseId },
         [{$set: { rating: { $avg: 'rating.star' } }}],
         {
            new: true,
            useFindAndModify: true
         });
     console.log(updatedCurrentRating);
 */
    await course.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })
})
//Not working and I am about to lose my mind, no idea whyyyyyyyyyyyyyyyyyyyyy
const getCourseReviews = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id)

    /* if (course) {
         res.json(course)
     } else {
         res.status(404)
         throw new Error('Course not found')
     }*/

    //let course;
    for (var i = 0; i < courseModel.length; i++) {
        if (courseModel[i]._id == "6385c9f46f6bb55a030163d4") {
            console.log("I am working 0");
            course = courseModel[i];
        }
    }
    //const courseId = req.body;
    //console.log("I am working 0");
    //const course = await courseModel.findById(courseId);
    //const course = await Course.findById('6385c9f46f6bb55a030163d4')
    console.log("I am working 1");
    let allReviews
    let rating
    console.log("I am working 2");
    allReviews = await course.reviews;
    console.log("I am working 3");
    res.json(allReviews);
    rating = await course.rating;
    console.log("I am working 4");
    res.json(rating);
    console.log("I am working 5");
    if (allReviews.length > 0 && rating > 0) {
        res.status(200).json(result);
    }
    else {
        res.status(400).json({ error: "No reviews found" });
    }
})

const getCourseRating = asyncHandler(async (req, res) => {
    console.log("I am working 0");
    const course = await Course.findById('6385c9f46f6bb55a030163d4')
    console.log("I am working 1");
    let allReviews
    let rating
    console.log("I am working 2");
    allReviews = await course.reviews;
    console.log("I am working 3");
    rating = await course.rating;
    console.log("I am working 4");
    if (allReviews.length > 0 && rating > 0) {
        res.status(200).json(rating);
    }
    else {
        res.status(400).json({ error: "No reviews found" });
    }
    console.log("I am working 5");
    console.log(allReviews);
    console.log(rating);
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
    filterPrice, addCourseReview, getCourseReviews,
    getCourseRating,
    CorporateCourses,
    IndividualCourses
}