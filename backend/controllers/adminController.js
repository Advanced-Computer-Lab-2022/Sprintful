const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const { model } = require('mongoose')
const Admin = require('../models/adminModel')
const Instructor = require('../models/InstructorModel')
const CorporateTrainee = require('../models/corporateTraineeModel')

/*
const getAdmin = asyncHandler(async (req, res) => {
    const admins = await Admin.find({})
})
res.status(200).json(admins)
*/

const createAdmin = asyncHandler(async (req, res) => { 
    const { username, password } = req.body

    const adminExists = await Admin.findOne({ username })

    if (adminExists) {
        res.status(400)
        throw new Error('Admin already exists')
    }

    const admin = await Admin.create({
        username,
        password
    })

    if (admin) {
        res.status(201).json({
            _id: admin._id,
            username: admin.username,
            password: admin.password
        })
    } else {
        res.status(400)
        throw new Error('Invalid admin data')
    }
})

//module.exports = { createAdmin }

const createInstructor = asyncHandler(async (req, res) => { 
    const { username, password } = req.body

    const instructorExists = await Instructor.findOne({ username })

    if (instructorExists) {
        res.status(400)
        throw new Error('Instructor already exists')
    }

    const instructor = await Instructor.create({
        username,
        password
    })

    if (instructor) {
        res.status(201).json({
            _id: instructor._id,
            username: instructor.username,
            password: instructor.password
        })
    } else {
        res.status(400)
        throw new Error('Invalid instructor data')
    }
})


const createCorporateTrainee = asyncHandler(async (req, res) => { 
    const { username, password } = req.body

    const corporateTraineeExists = await CorporateTrainee.findOne({ username })

    if (corporateTraineeExists) {
        res.status(400)
        throw new Error('Corporate Trainee already exists')
    }

    const corporateTrainee = await CorporateTrainee.create({
        username,
        password
    })

    if (corporateTrainee) {
        res.status(201).json({
            _id: corporateTrainee._id,
            username: corporateTrainee.username,
            password: corporateTrainee.password
        })
    } else {
        res.status(400)
        throw new Error('Invalid Corporate Trainee data')
    }
})

module.exports = {createInstructor, createAdmin, createCorporateTrainee }