const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const { builtinModules } = require('module')
const Courses = require('../models/courseModel')
const CorporateTrainee = require('../models/corporateTraineeModel')
const Corporates = require('../models/corporatesModel')

const generateToken =(id) =>{
    return jwt.sign({id }, process.env.JWT_SECRET, {
        expiresIn: '365d',
    })
}
const createCorporateTrainee = asyncHandler(async (req, res) => { 
     const { username, password, corporate, firstName, lastName } = req.body
     const thisCorporate = await Corporates.find({ name: corporate });
     const traineeSubject = thisCorporate[0].subject
     console.log("itest2",traineeSubject)
     try {
        const corporateTraineeExists = await CorporateTrainee.findOne({ username })
        if (corporateTraineeExists) {
            res.status(400)
            throw new Error('Corporate Trainee already exists')
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,salt)
            const traineeCourses = await Courses.find({ subject: traineeSubject })
            // console.log("courses", traineeCourses)
            const corporateTrainee = await CorporateTrainee.create({
                username,
                password: hashedPassword,
                corporate: corporate,
                courses: traineeCourses,
                firstName,
                lastName
            })
            
            if (corporateTrainee) {
                res.status(201).json({
                    _id: corporateTrainee._id,
                    username: corporateTrainee.username,
                    password: corporateTrainee.password,
                    corporate: corporateTrainee.corporate,
                    courses: corporateTrainee.courses,
                    firstName: corporateTrainee.firstName
                    // token: generateToken(corporateTrainee._id)
                })
                console.log("res")
                console.log(corporateTrainee)
            } 
            else {
                res.status(400)
                throw new Error('Invalid Corporate Trainee data')
            }
        }
    }
     catch (error) {
        res.status(400).json({ error: error.message })
    }
    
}
)
const logout = async (req, res) => {
    const token = generateToken("");
    res.cookie('jwt', token, { httpOnly: true, maxAge: 1 });
    res.status(200).json({message: "You have logged out!"})
}

const changePassword = async (req, res, next) => {
    console.log("Change Password");
    try {
        const corporateTraineeId = req.query.id;
        console.log("corporateTraineeId",corporateTraineeId);
        const corporateTrainee = await CorporateTrainee.findById(corporateTraineeId)
        console.log("corporateTrainee",corporateTrainee);
        const oldPassword = corporateTrainee.password
        const currentPassword = req.body.currentPassword
        const auth = await bcrypt.compare(currentPassword, oldPassword);
        console.log("authentication", auth);

        if(auth){
            const salt = await bcrypt.genSalt(10);
            console.log("authentication2");
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            console.log("authentication26", hashedPassword);
            const response = await CorporateTrainee.findByIdAndUpdate(corporateTraineeId, {password: hashedPassword}, { new: true })
            console.log(response)
            res.status(200).json(response);
        }
        else{
            res.status(400).json({ error: 'Wrong password' });

        }   
    }
    catch (error) {
        return res.status(400).json({ status: false, error: "Error Occured" });
    }
}





const getCorporateTraineeProfile = asyncHandler(async (req, res) => {
    const corporateTrainee = await CorporateTrainee.findById(req.query.id)
    console.log(corporateTrainee);
    if (corporateTrainee) {
        res.json(corporateTrainee)
    } else {
        res.status(404)
        throw new Error('Corporate Trainee not found')
    }
})


const updateProgress=asyncHandler(async(req,res)=>{
    const traineeid=req.params.traineeid;
    const courseid=req.params.courseid;
    const addedProgress=req.body.addedprogress;

    //Getting the Past Progress 
    const  ProgressArray=await CorporateTrainee.findOne({_id:traineeid},'-_id progress')
    res.json(ProgressArray);
    let coursedocument;

     for(let i=0;i<ProgressArray.length;i++){
        coursedocument=ProgressArray[i];
        if(coursedocument.course.toString()===courseid){
            coursedocument.progressvalue=coursedocument.progressvalue+addedProgress
            break;
         }
     }

     res.json(coursedocument)




})


module.exports = { createCorporateTrainee, changePassword, logout, getCorporateTraineeProfile,updateProgress}