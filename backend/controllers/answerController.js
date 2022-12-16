const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Answer = require('../models/answerModel')

const addAnswer = asyncHandler(async (req, res) => {
    const questionid = req.body.questionid
    const choiceindex = req.body.choiceindex
    const corporateid = req.body.corporateid
    const individualid = req.body.individualid

    if (choiceindex) {
        const answer = new Answer({
            question: questionid,
            choiceindex: choiceindex,
            corporate: corporateid,
            individual: individualid
        })
        answer.save(function (err) {
            if (err) {
                console.log(err);
            }
        })

        res.json(answer)
    }
    else {
        res.status(400)
        throw new Error('Invalid answer')
    }
})

const getAnswer = asyncHandler(async (req, res) => {
    const answer = await Answer.findOne({
        question: req.query.questionid,
        corporate: req.query.corporateid,
        individual: req.query.individualid
    })
    
    if (answer) {
        res.json(answer)
    }
    else {
        res.status(404)
        throw new Error('Answer not found')
    }
 })
 



module.exports = { addAnswer, getAnswer }