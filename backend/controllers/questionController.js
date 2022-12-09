const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Question = require('../models/questionModel')

const getQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({ task: req.query.taskid })
    if (questions) { 
        res.json(questions)
    }
    else {
        res.status(404)
        throw new Error('Questions not found')
    }

})
 
module.exports = { getQuestions }