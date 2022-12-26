const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const { model } = require('mongoose')
const Report = require('../models/reportModel')
const Instructor = require('../models/instructorModel')
const IndividualTrainee = require('../models/individualTraineeModel')
const CorporateTrainee = require('../models/corporateTraineeModel')



//view reported problems - should automaticalled be marked as "unseen"
const viewReports = asyncHandler(async (req, res) => {
    const id = req.params.id
    const instructor = await Instructor.findById(id)
    const individualTrainee = await IndividualTrainee.findById(id)
    const corporateTrainee = await CorporateTrainee.findById(id)
    if(instructor){
    const reports = await Report.find({ instructorId: id })
    if(reports){
        res.json(reports)
    }
}
else if(individualTrainee){
    const reports = await Report.find({ individualTraineeId: id })
    if(reports){
        res.json(reports)
    }
}
else if(corporateTrainee){
    const reports = await Report.find({ corporateTraineeId: id })
    if(reports){
        res.json(reports)
    }
}
else{
    res.status(400).json({ error: "invalid user id" });
}

})


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

//mark reported problems as "resolved" or "pending"
const changeStatus = async (req, res, next) => {
    console.log("working")
    try {
        const reportId = req.query.reportid;
        console.log("idddddddddddd", req.query.reportid)
        console.log(reportId);
        const status = req.body;
        console.log("working85", status)
        const report = await Report.findByIdAndUpdate(reportId, status, { new: true })
        console.log("working8895", report)
        return res.status(200).json({ report });
    }
    catch (error) {
        return res.status(400).json({ status: false, error: "Error Occured" });
    }
}

//view reported problems - should automaticalled be marked as "unseen"
const adminViewReports = asyncHandler(async (req, res) => {
    //console.log("naaayy")
    //const reports = await Report.find({})
    const reports = await Report.find({
        $or:[
            { status:  "unseen" },
            {status: "pending"}
        ] 
});
    //console.log("zefttt")
    if(reports){
        res.json(reports)
    }
    else{
        res.status(400).json({ error: error.message })
    }
})

//follow up on an unresolved problem based on status
const addFollowup = asyncHandler(async (req, res) => {
    const id = req.params.id
    const followup = req.body.followup
    const report = await Report.findById(id)
    report.followups.push(followup)
    await report.save()
    res.status(201).json({ report })

})

const getReportbyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const report = await Report.findById(id)
    if(report){
        res.json(report)
    }
})

module.exports = { addReport, changeStatus, viewReports, adminViewReports, addFollowup, getReportbyId}



