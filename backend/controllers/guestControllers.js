const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')

const viewCourses = asyncHandler(async(req,res)=>{
    const course =await Course.find({},'title totalhours rating price')
    res.status(200).json(course)
})

// ATTENTION::: This is supposed to be Reem's requirement delete before commit


module.exports = { viewCourses }