const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const Course = require('../models/courseModel')
const CorporateTrainee = require('../models/corporateTraineeModel')
const IndividualTrainee = require('../models/individualTraineeModel')
const Instructor = require('../models/instructorModel')
const subtitle = require('../models/subtitleModel.js')
var searchedCourses = []; 
const getSubtitles = asyncHandler(async (req, res) => {
    const courseId = req.query.courseId;
    //console.log(courseId)
    const course = await Course.find({_id:courseId});
    const subtitleIds = course[0].subtitles
    //console.log(course)
    const result = []
    let subtitleDetails = []
    
        //console.log("course subtitles")
         //console.log(subtitleIds)
        // res.json(course.subtitles);
        for(let i=0; i<subtitleIds.length; i++){
            subtitleDetails = await subtitle.findById(subtitleIds[i])
            result.push(subtitleDetails.title)
            //console.log("SUBTITLE")

            //console.log(result[i])
        }
         res.json(result);
    }
)

const getCourseById = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.query.id)

    if (course) {
        res.json(course)
    } else {
        res.status(400).json({ error: "No course found cid" });
    }
})

// search for all courses for corporate
const corporateGetCourses = asyncHandler(async (req, res) => {
    const searchTerm = req.query.searchTerm
    let result1, result2, result3, result4, instructorId
    result1 = await Course.find({title: { "$regex": searchTerm, "$options": "i" } }).select('-price');
    result2 = await Course.find({subject: { "$regex": searchTerm, "$options": "i" }}).select('-price'); 
    instructorId = await Instructor.find({firstName: { "$regex": searchTerm, "$options": "i" }}).select('_id');
    result3 = await Course.find({instructor: instructorId}).select('-price');
    instructorId = await Instructor.find({lastName: { "$regex": searchTerm, "$options": "i" }}).select('_id');
    result4 = await Course.find({instructor: instructorId}).select('-price');
    const courses = [result1,result2,result3,result4];
    flatArray = [].concat.apply([], courses);
    if(flatArray)
        res.json(flatArray);
    else 
        res.status(400).json({ error: "No course found" });
})

// search for all courses except for corporate
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

const acceptContract = asyncHandler(async (req, res) => {
    const id = req.query.id;
    const response =await Instructor.findByIdAndUpdate(id,{contract: true})
    if(response)
        res.json(response)
    else {
        res.status(404)
        throw new Error('Instructor not found')
    }

})

const addCourse = asyncHandler(async (req, res) => {
    //const discount =(req.body.discount)/100
    const newCourse = new Course({
        title: req.body.title,
        subject: req.body.subject,
        price: req.body.price,
        totalhours: req.body.totalhours,
        shortsummary: req.body.shortsummary,
        instructor: req.query.id , 
        previewvideolink: req.body.previewvideolink,
        discount: req.body.discount,
    });

    const contract = (await Instructor.findById(req.query.id)).contract
    console.log(contract)
    if(contract){
        newCourse.save(function (err) {
        if (err) {
            console.log(err);
        }
        })
        const newcourseid = [newCourse._id];
        //Saving the instructor reference id 
        //Getting the courses array and putting the neew course's id in this Instructor courses array
        const newCoursesList = ((await Instructor.findById(req.query.id )).courses).concat(newcourseid); //.concat concatenates the new array
        const updatedcoursesArray = await Instructor.findByIdAndUpdate(req.query.id , { courses: newCoursesList }).exec();
        res.status(200).json([newCourse,contract])
    }
    else{
        res.status(400).json({ error: "can't add course. Accept contract first" });
    }  
    //putting the course id into an array newcourseid
    
})


//Method for getting titles of courses given by the instructor himself
const instructorCourses = asyncHandler(async (req, res) => {
    const myCoursesDocuments = await Instructor.find({ _id: req.query.id }, '-_id courses').exec()
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
    if(flatArray){
        console.log(myCoursesDocuments)
        res.json(flatArray);
    }
    else {
        console.log("hello")
        res.status(400).json({ error: "No course found" });
    }
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
    console.log(flatArray)
    res.status(200).json(flatArray)
});

const searchCourse = asyncHandler(async (req,res) => {
    const searchTerm = req.query.searchTerm
    let result1, result2, result3, result4,instructorId

    result1 = await Course.find({title: { "$regex": searchTerm, "$options": "i" } });
    result2 = await Course.find({subject: { "$regex": searchTerm, "$options": "i" }}); 
    instructorId = await Instructor.find({firstName: { "$regex": searchTerm, "$options": "i" }}).select('_id');
    result3 = await Course.find({instructor: instructorId});
    instructorId = await Instructor.find({lastName: { "$regex": searchTerm, "$options": "i" }}).select('_id');
    result4 = await Course.find({instructor: instructorId});
    const courses = [result1,result2,result3,result4];
    flatArray = [].concat.apply([], courses);
    if(flatArray){
        searchedCourses = searchedCourses.concat(flatArray);
        res.json(flatArray);
    }
    else 
        res.status(400).json({ error: "No course found" });

}) 

const searchInstructorCourses = asyncHandler(async (req,res) => {
    const searchTerm = req.query.searchTerm
    const id = req.query.id
    let result1, result2
    result1 = await Course.find({
                            $and:[
                                { instructor: id },
                                { title: { "$regex": searchTerm, "$options": "i" }}
                             ] 
    });
    result2 = await Course.find({
                            $and:[
                                { instructor: id },
                                { subject: { "$regex": searchTerm, "$options": "i" }}
                            ] 
    });
    const courses = [result1,result2];
    flatArray = [].concat.apply([], courses);
    if(flatArray)
        res.json(flatArray);
    else 
        res.status(400).json({ error: "No course found" });
}) 

//filter the courses based on a subject and/or rating and/or price
const filter = asyncHandler(async (req, res) => {
    const subject = req.query.subject;
    const rating = req.query.rating;
    const price= req.query.price;
    //const course = await courseModel.find({$or:[{subject:subject},{rating:rating}]});
    
    if(subject=="null" ){
        if(rating=="null"){
            console.log("hello 1")
            result1 = await Course.find({ price:  {$lte:price}  });
        }
        else if(price=="null"){
            console.log("hello 2")
            result1 = await Course.find({ rating:  rating  });
        }
        else{
            console.log("hello 3")
            result1 = await Course.find({
                                $and:[
                                    { rating:  rating  },
                                    {price:{$lte:price}}
                                ] 
        });
        }
    }
    else if(price=="null"){
        if(rating=="null"){
            console.log("hello 4")
            result1 = await Course.find({ subject:  subject });
        }
        else if(subject=="null"){
            console.log("hello 5")
            result1 = await Course.find({ rating:  rating  });
        }
        else{
            console.log("hello 6")
            result1 = await Course.find({
                                $and:[
                                    { rating: rating  },
                                    {subject:subject}]})
    }
    }


    else if(rating=="null"){
        if(price=="null"){
            console.log("hello 7")

            result1 = await Course.find({ subject:  subject });
       }
        else if(subject=="null"){
            console.log("hello 8")

            result1 = await Course.find({ price:  {$lte:price}  });
        }   
        else{
            console.log("hello 9")

            result1 = await Course.find({
                                $and:[
                                    { subject: subject },
                                    {price:{$lte:price}}
                                ]})

        }
    }
    else if(rating!="null" && price!="null" && subject!="null"){
        console.log("hello 10 final")
        result1 = await Course.find({
                                $and:[
                                    { subject: subject },
                                    { rating:  rating  },
                                    {price:{$lte: price}}
                                ] 
        });
    }

    if (result1) {
        res.status(200).json(result1);
    }

    else {
        res.status(400).json({ error: "No course found" });
    }
})

//filter the courses based on price (price can be FREE)
const filterCorporate = asyncHandler(async (req, res) => {
    const subject = req.query.subject;
    const rating = req.query.rating;
    //const course = await courseModel.find({$or:[{subject:subject},{rating:rating}]});
    let result1
    if(subject=="null" ){
        result1 = await Course.find({ rating:  rating  });
    }

    else if(rating=="null"){
            result1 = await Course.find({ subject:  subject });
    }
    else{
    result1 = await Course.find({
                            $and:[
                                { subject: subject },
                                { rating:  rating  },
                             ] 
    });
    }   

    if (result1) {
        res.status(200).json(result1);
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


//get subtitle id from title
const getSubtitleId = asyncHandler(async (req, res) => {
    const title = req.query.title;
    const result = await subtitle.find({ title: title }).select('_id');
    res.status(200).json(result);
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
    filter,
    filterCorporate, 
    addCourseReview, 
    getCourseReviews,
    getCourseRating,
    CorporateCourses,
    IndividualCourses,
    getSubtitles,
    getSubtitleId,
    searchInstructorCourses,
    acceptContract
}