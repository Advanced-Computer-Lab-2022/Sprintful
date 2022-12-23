const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const { model } = require('mongoose')
const Report = require('../models/reportModel')
const Instructor = require('../models/instructorModel')
const IndividualTrainee = require('../models/individualTraineeModel')
const CorporateTrainee = require('../models/corporateTraineeModel')



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




const addReport = asyncHandler(async (req, res) => {
    const id = req.query.id;
    const { subject, body, type } = req.body
    const instructorId = await Instructor.findById(id)
    const individualTraineeId = await IndividualTrainee.findById(id)
    const corporateTraineeId = await CorporateTrainee.findById(id)
    try {
        
        if(instructorId){
            const report = await Report.create({
                subject: subject,
                body: body,
                type: type,
                instructorId: instructorId
            })
            if (report) {
                res.status(201).json({
                    _id: report._id,
                    subject: report.subject,
                    body: report.body,
                })
            }
            else {
                res.status(400)
                throw new Error('Invalid report data')
            }   
        }
        if(individualTraineeId){
            const report = await Report.create({
                subject: subject,
                body: body,
                type: type,
                individualTraineeId: individualTraineeId
            })
            if (report) {
                res.status(201).json({
                    _id: report._id,
                    subject: report.subject,
                    body: report.body,
                })
            }
            else {
                res.status(400)
                throw new Error('Invalid report data')
            }  
        }
        if(corporateTraineeId){
            const report = await Report.create({
                subject: subject,
                body: body,
                type: type,
                corporateTraineeId: corporateTraineeId
            })
            if (report) {
                res.status(201).json({
                    _id: report._id,
                    subject: report.subject,
                    body: report.body,
                    type: report.type
                })
            }
            else {
                res.status(400)
                throw new Error('Invalid report data')
            }
            
        } 
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    } 
})










module.exports = { addReport, instructorViewReports, individualViewReports, corporateViewReports}



