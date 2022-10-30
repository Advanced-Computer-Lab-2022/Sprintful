const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Instructor = require('../models/instructorModel')
const Subtitle = require('../models/subtitleModel')
const Task = require('../models/taskModel')



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

module.exports = { createInstructor }
