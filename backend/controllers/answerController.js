const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Answer = require('../models/answerModel')
const CorporateTrainee = require('../models/corporateTraineeModel')
const IndividualTrainee = require('../models/individualTraineeModel')


const addAnswer = asyncHandler(async (req, res) => {
    const questionid = req.query.questionid
    const userid = req.query.userid
    const choiceindex = req.body.choiceindex
    //const individualid = req.query.individualid

    const corporate = await CorporateTrainee.findById(userid)
    const individual = await IndividualTrainee.findById(userid)

    if (individual) {
        const answer = await Answer.create({
            question: questionid,
            choiceindex: choiceindex,
            individual: individual._id
        })
        res.json(answer)
    }
    else if (corporate) {
        const answer = await Answer.create({
            question: questionid,
            choiceindex: choiceindex,
            corporate: corporate._id
        })
        res.json(answer)
    }
    else {
        const answer = await Answer.create({
            question: questionid,
            choiceindex: choiceindex,
        })
        res.json(answer)
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