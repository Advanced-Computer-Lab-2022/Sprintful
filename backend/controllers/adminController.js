const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const { model } = require('mongoose')
const Admin = require('../models/adminModel')
const Instructor = require('../models/InstructorModel')
const CorporateTrainee = require('../models/corporateTraineeModel')


const getAdmin = asyncHandler(async (req, res) => {
    const { _id, username,password }= await Admin.findById(req.admin.id)
    {
        res.status(200).json({
            id: _id,
            username,
            password,

        })
    }
})

const loginAdmin =asyncHandler (async(req,res)=>{
    const {username,password} = req.body
    const admin = await Admin.findOne({username})
    // .compare compares the entered plain text password with the user's password in the db
    if(admin && (await bcrypt.compare(password , admin.password)))
    {
        res.json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id)

        })
    }
    else
    {
        res.status(400)
        throw new Error ('Invalid credentials')
    }
}
)
//res.status(200).json(admins)


// @desc Set admin
// @route POST /api/admin
// @access Private
const createAdmin = asyncHandler(async (req, res) => { 
    const { username, password } = req.body

    const adminExists = await Admin.findOne({ username })

    if (adminExists) {
        res.status(400)
        throw new Error('Admin already exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const admin = await Admin.create({
        username,
        password : hashedPassword
    })

    if (admin) {
        res.status(201).json({
            _id: admin._id,
            username: admin.username,
            password: admin.password,
            token: generateToken(admin._id)

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


const createCorporateTrainee = asyncHandler(async (req, res) => { 
    const { username, password } = req.body

    const corporateTraineeExists = await CorporateTrainee.findOne({ username })

    if (corporateTraineeExists) {
        res.status(400)
        throw new Error('Corporate Trainee already exists')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const corporateTrainee = await CorporateTrainee.create({
        username,
        password: hashedPassword
    })

    if (corporateTrainee) {
        res.status(201).json({
            _id: corporateTrainee._id,
            username: corporateTrainee.username,
            password: corporateTrainee.password,
            token: generateToken(corporateTrainee._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid Corporate Trainee data')
    }
})

// Generate JWT
const generateToken =(id) =>{
    return jwt.sign({id }, process.env.JWT_SECRET, {
        expiresIn: '365d',
    })
}

module.exports = {createInstructor, createAdmin, createCorporateTrainee ,loginAdmin, getAdmin}