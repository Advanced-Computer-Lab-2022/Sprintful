const asyncHandler = require('express-async-handler')
// const { builtinModules } = require('module')
const Course = require('../models/courseModel')

// @desc    Get course by id
// @route   GET /api/courses/:id
// @access  Public
const viewCourse = asyncHandler(async (req, res) => { 
    const course = await Course.findById(req.params._id)

    if (course) {
        res.json(course)
    } else {
        res.status(404)
        throw new Error('Course not found')
    }
})
// const viewCourse = asyncHandler(async (req, res) => {
//     const course = await Course.findById(req.body.id)
//     res.status(200).json(course)
// })

module.exports = { viewCourse }