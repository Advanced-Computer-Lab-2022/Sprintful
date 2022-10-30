const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')

const viewCourses = asyncHandler(async(req,res)=>{
    const course =await Course.find({},'title totalhours rating')
    res.status(200).json(course)
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

module.exports = { viewCourses, createCorporateTrainee }