const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')

const viewCourses = asyncHandler(async(req,res)=>{
    const course =await Course.find({},'title totalhours rating')
    res.status(200).json(course)
})
module.exports = { viewCourses }