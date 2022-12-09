const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Instructor = require('../models/instructorModel')
const Subtitle = require('../models/subtitleModel')
const Task = require('../models/taskModel')
const { appendFile } = require('fs')
const courseModel = require('../models/courseModel.js')
const Question = require('../models/questionModel.js')
//const Choice = require('../models/choiceSchema.js')
const instructor = require('../models/instructorModel.js')
const { ResetTvOutlined } = require('@mui/icons-material')

const createInstructor = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    const instructorExists = await Instructor.findOne({ username })

    if (instructorExists) {
        res.status(400)
        throw new Error('Instructor already exists')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const instructor = await Instructor.create({
        username,
        password: hashedPassword
    })

    if (instructor) {
        res.status(201).json({
            _id: instructor._id,
            username: instructor.username,
            password: instructor.password,
            token: generateToken(instructor._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid instructor data')
    }
})

//NO authentication
//Changes Milad's password
const changePassword = async (req, res, next) => {
    console.log("Change Password");
    try {
        const { userId } = req.params;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const userPassword = await Instructor.findByIdAndUpdate('636179a6cae9a97f1a43d792', req.body, { new: true })   //combinations? hardcode it
        return res.status(200).json({ status: true, data: password });
    }
    catch (error) {
        return res.status(400).json({ status: false, error: "Error Occured" });
    }
}
//Rate and add a review to the instructor
const addInstructorReview = asyncHandler(async (req, res, next) => {
    const { rating, comment } = req.body;
    const instructorId = req.query.id;
    console.log("I am woring");
    const review = {
        rating: Number(rating),
        comment
    }
    const instructor = await Instructor.findById(instructorId);
    /*const isReviewed = course.reviews.find(    //No authentication baby
        r => r.user.toString() === req.user._id.toString()
    )


//app.put('/update/:id', 
const editBioEmail= asyncHandler((req, res) => {
  const email=req.body.email;
  const biography= req.body.biography;
    //const update = { price: 800 };
    //const course = require('./courseSchema');
   Instructor.findByIdAndUpdate('636179a6cae9a97f1a43d792', {email: email}, {biography: biography}, function (err, docs) {
    if (err){
        res.json({message: 'error'});
    }
    else{
        res.json(docs);
    }});
  
   //.then(result=> res.send(result))
  });

// //create a multiple choice exam with 4 choices per question
// const createChoice = asyncHandler(async(req,res) =>{
//     const title = req.body.title;
//     const correctness= req.body.correctness;
//     const questionId = '6384abb2e319b6771da390cb'
//     //const questionId = req.params.questionId
//     const question = await Question.findById(questionId)
//     if (question) {
//         const choice = await Choice.create({
//             title,
//             correctness,
//             question: questionId
//         })
//         question.choices.push(choice)
//         await question.save()

//         res.status(201).json(choice)
//     } else {
//         res.status(404)
//         throw new Error('Question not found')
//     }
// });

// const createQuestion = asyncHandler(async(req,res) =>{
//     const title = req.body.title;
//     const taskId = '6384ab2fde37d33c820275a9'
//     const choices = req.body.choices;
//     // [{text:"ch1", isCorrect:true}, {text:"ch1", isCorrect:true}, {text:"ch1", isCorrect:true}, ]
//     //const taskId = req.params.taskId
//     const task = await Task.findById(taskId)
//     if (task) {
//     const newQuestion = await Question.create({
//         title,
//         task: taskId
//         //choices: choices;
//     });
//     task.questions.push(newQuestion)
//     await task.save()
//     res.status(201).json(newQuestion)
//     } else {
//         res.status(404)
//         throw new Error('Task not found')
//     }

//     // newQuestion.save(function (err) {
//     //     if (err) {
//     //         console.log(err);
//     //     }
//     // })
//     // res.json(newQuestion);
// });

// const createTask = asyncHandler(async(req,res) =>{
//     const title = req.body.title;
//     const courseId = '638488aceed9d3bac959ba50'
//     //const courseId = req.params.courseId
//     const subtitleId = '635dac77833ecf164e898814'
//     //const subtitle = req.params.subtitle
//     const course = await Course.findById(courseId)
//     const subtitle= await Subtitle.findById(subtitleId)
//     if (course) {
//     const newTask = await Task.create({
//         title,
//         course: courseId
//     });
//     course.tasks.push(newTask)
//     await course.save()
//     res.status(201).json(newTask)
//     }
//     else if(subtitle) {
//         const newTask = await Task.create({
//             title,
//             subtitle: subtitleId
//         });
//         subtitle.tasks.push(newTask)
//         await subtitle.save()
//         res.status(201).json(newTask)
//     }
//     else{
//         res.status(404)
//         throw new Error('Course not found')
//     }
// });

    if(isReviewed){ 
        course.reviews.array.forEach(review => {
            if(review.user.toString() === req.user._id.toString()) {
                review.review = comment;
                review.rating = rating;
            }    
        });
    }
    //in else part
    instructor.reviews.push(comment);
    //review.rating = Number (rating);
    instructor.ratingsArray.push(rating);

    //course.rating = (ratingsArray / ratingsArray.length) * ratingsArray.length;

    var total = 0;
    for (var i = 0; i < instructor.ratingsArray.length; i++) {
        total += instructor.ratingsArray[i];
    }
    var avg = total / instructor.ratingsArray.length;
    instructor.rating = avg;
    console.log(avg);
    console.log(instructor.rating);
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
    await instructor.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })
})

const getInstructorRating = asyncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.query.id)
    let allReviews
    let rating
    allReviews = await instructor.reviews;
    rating = await instructor.rating;
    if (allReviews.length > 0 && rating > 0) {
        res.status(200).json({ rating, allReviews });
    }
    else {
        res.status(400).json({ error: "No reviews found" });
    }
    console.log(rating);
    console.log(allReviews);
})

const getInstructorProfile = asyncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.query.id)
    console.log(instructor);
    if (instructor) {
        res.json(instructor)
    } else {
        res.status(404)
        throw new Error('Instructor not found')
    }
})

module.exports = { createInstructor, changePassword, addInstructorReview, getInstructorRating, getInstructorProfile }
module.exports = {createInstructor, editBioEmail}
