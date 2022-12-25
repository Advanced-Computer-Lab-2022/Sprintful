const asyncHandler = require('express-async-handler')
const Courses = require('../models/courseModel')
const CorporateTrainee = require('../models/corporateTraineeModel')
const RequestAccess = require('../models/requestAccessModel')


const requestAccess = async(req, res, next) => {
    console.log("Request Access");
    try{
        const corporateTraineeId = req.query.id;
        const courseId = req.query.courseId;
        console.log("corporate", corporateTraineeId);
        console.log("course",   courseId);
        // const prevRequest = await RequestAccess.find( , , {new: true})
        const request = await RequestAccess.create({
            corporateTraineeId,
            courseId,
            state: "pending"
        })
        console.log("Request Access5");
        if (request) {
            res.status(201).json({
                _id: request._id,
                corporateTraineeId: request.corporateTraineeId,
                courseId: request.courseId,
                state: request.state
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid request data')
        }
    }
    catch(error){
        return res.status(400).json({ status: false, error: "Error Occured"});
    }
}


const getAccessRequests = asyncHandler(async (req, res) => {
    const requests = await RequestAccess.find({state: "pending"})
    if (requests) {
        res.json(requests)
    } 
    if(requests.length == 0){
        console.log("NO requests");
    }
    else {
        res.status(404)
        throw new Error('Requests not found')
    }
})

const grantAccess = async(req, res, next) => {
    console.log("Grant Access");
    try{
        console.log("Grant Access2");
        const requestId = req.query.requestId
        console.log(requestId)
        console.log("Grant Access3");
        const request = await RequestAccess.findByIdAndUpdate(req.query.requestId,  {state: "true"}, { new: true })
        console.log("request", request)
        console.log("Request Access5");
        request.state = "true"
        // const corporateTraineeId = request.corporateTraineeId;
        // const courseId = request.courseId;
        // console.log("corporate", corporateTraineeId);
        // console.log("course",   courseId);
        if (request) {
            res.status(201).json({
                _id: request._id,
                corporateTraineeId: request.corporateTraineeId,
                courseId: request.courseId,
                state: request.state
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid request data')
        }
    }
    catch(error){
        return res.status(400).json({ status: false, error: "Error Occured"});
    }
}

module.exports = {requestAccess, getAccessRequests, grantAccess}