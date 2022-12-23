const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const { model } = require('mongoose')
const Report = require('../models/reportModel')


//view reported problems - should automaticalled be marked as "unseen"
const instructorViewReports = asyncHandler(async (req, res) => {
    const instructorId = req.params.instructorid
    const reports = await Report.find({ instructorId: instructorId })
    if(reports){
        res.json(reports)
    }
    else{
        res.status(404)
        throw new Error('No reports found')
    }
})

const individualViewReports = asyncHandler(async (req, res) => {
    const individualTraineeId = req.params.individualTraineeId
    const reports = await Report.find({ individualTraineeId: individualTraineeId })
    if(reports){
        res.json(reports)
    }
    else{
        res.status(404)
        throw new Error('No reports found')
    }
})


const corporateViewReports = asyncHandler(async (req, res) => {
    const corporateTraineeId= req.params.corporateTraineeId
    const reports = await Report.find({ corporateTraineeId: corporateTraineeId })
    if(reports){
        res.json(reports)
    }
    else{
        res.status(404)
        throw new Error('No reports found')
    }
})

//mark reported problems as "resolved" or "pending"


module.exports = {instructorViewReports, individualViewReports, corporateViewReports}
