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

module.exports = {createInstructor, editBioEmail}
