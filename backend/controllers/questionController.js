const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Question = require('../models/questionModel')
const Task = require('../models/taskModel')

const addQuestion= asyncHandler(async (req,res) =>{
//const taskid= '6384ab2fde37d33c820275a9'
const taskid = req.params.taskid
const title = req.body.title
const choices = req.body.choices
const task = await Task.findById(taskid)
if(task){
    const newQuestion = await Question.create({
        title,
        task: taskId,
        choices: choices
    });
    task.questions.push(newQuestion)
    await task.save()
    res.status(201).json(newQuestion)
    } else {
        res.status(404)
        throw new Error('Task not found')
    }
})

module.exports= {addQuestion}
