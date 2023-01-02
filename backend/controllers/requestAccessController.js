const asyncHandler = require('express-async-handler')
const Courses = require('../models/courseModel')
const CorporateTrainee = require('../models/corporateTraineeModel')
const RequestAccess = require('../models/requestAccessModel')


const requestAccess = async(req, res, next) => {   
    console.log("Request Access");
    try{
        const corporateTraineeId = req.params.traineeid;
        const courseId = req.query.courseId;
        console.log("corporate", corporateTraineeId);
        console.log("course",   courseId);

        const corporateTrainee = await CorporateTrainee.findById(corporateTraineeId)
        const corporateTraineeUsername = corporateTrainee.username
        const corporate = corporateTrainee.corporate
        console.log("traineeeee", corporateTraineeUsername)
        const course = await Courses.findById(courseId)
        const courseName = course.title
        console.log("course  ", courseName)
        // const prevRequest = await RequestAccess.find( , , {new: true})
        const request = await RequestAccess.create({
            corporateTraineeId,
            corporateTraineeUsername,
            courseId,
            courseName,
            state: "pending",
            corporate
        })
        console.log("Request Access5");
        if (request) {
            res.status(201).json({
                _id: request._id,
                corporateTraineeId: request.corporateTraineeId,
                corporateTraineeUsername: request.corporateTraineeUsername,
                courseId: request.courseId,
                courseName: request.courseName,
                state: request.state,
                corporate: request.corporate
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
    console.log("working")
    
    if(requests.length == 0){
        console.log("NO requests");
    }
    if (requests) {
        res.json(requests)
    } 
    else {
        res.status(404)
        throw new Error('Requests not found')
    }
})

const grantAccess = async(req, res, next) => {
    console.log("Grant Access");
    try{
        const requestId = req.query.id
        console.log(requestId)
        const request = await RequestAccess.findByIdAndUpdate(req.query.id,  {state: "true"}, { new: true })
        console.log("request", request)
        request.state = "true"
        const corporateTraineeId = request.corporateTraineeId;
        const courseId = request.courseId;
        const corporateTrainee = await CorporateTrainee.findById(corporateTraineeId)
        console.log(corporateTrainee)
        console.log(corporateTrainee.courses)
        corporateTrainee.courses.push(courseId)
        console.log(corporateTrainee.courses)
        const newCorporateTrainee = await CorporateTrainee.findByIdAndUpdate(corporateTraineeId, {courses: corporateTrainee.courses})
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