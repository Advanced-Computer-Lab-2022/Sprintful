const asyncHandler = require('express-async-handler')
// const { builtinModules } = require('module')
const Course = require('../models/courseModel')

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
const getCourses = asyncHandler(async (req, res) => { 
    const courses = await Course.find({}).select('-price')
    if(courses) {
        res.json(courses)
    } else {
        res.status(404)
        throw new Error('Courses not found')
    }
})


module.exports = { getCourseById , getCourses }