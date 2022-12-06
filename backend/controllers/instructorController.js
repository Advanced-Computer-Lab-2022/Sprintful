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
    const hashedPassword = await bcrypt.hash(password,salt)

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

//edit his/her mini biography or email
/*const editBioEmail = asyncHandler(async(req,res) =>{
    const email=req.body.email;
    const biography= req.body.biography;
    const userId='635a591011ecdc081ce890f7';
    Instructor.findByIdAndUpdate(userId, {email: email}, {biography: biography});
    res.json({message: 'success'});
})*/

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


module.exports = {createInstructor, editBioEmail}
