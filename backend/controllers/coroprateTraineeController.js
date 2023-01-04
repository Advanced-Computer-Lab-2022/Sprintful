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

//inserting progress of a certain course
const insertProgress=asyncHandler(async(req,res)=>{
    const traineeid=req.params.traineeid;
    const courseid=req.params.courseid;
    const addedProgress=req.body.addedprogress;

    //Updating progressArray
       //update 
       const newcourseProgress={course:courseid,progressvalue:addedProgress}
       const partialprogressarray=[newcourseProgress]
       const newProgressArray = (await CorporateTrainee.findById(traineeid)).progress.concat(partialprogressarray)






       //Updating progressArray
       const updatingprogress=await CorporateTrainee.findOneAndUpdate({_id:traineeid},{progress:newProgressArray},{new:true});
       res.json(updatingprogress)

}

)


//Updating progress of a certain course
const updateProgress=asyncHandler(async(req,res)=>{
    const traineeid=req.params.traineeid;
    const courseid=req.params.courseid;
    const addedProgress=req.body.addedprogress;

    //Getting the Past Progress 
    const  ProgressArray=await CorporateTrainee.findOne({_id:traineeid},'-_id progress')
    const array=ProgressArray.progress


   // res.json(array);
    let coursedocument;
    //let x;

     for(let i=0;i<array.length;i++){
        coursedocument=array[i];
         //x=coursedocument.course.toString()==courseid;
        if(coursedocument.course==courseid){
            coursedocument.progressvalue=coursedocument.progressvalue+addedProgress
            array[i]=coursedocument;
            console.log("updated")
            break;
         }
     }

     const updatingprogress=await CorporateTrainee.findOneAndUpdate({_id:traineeid},{progress:array},{new:true});

    // res.json(coursedocument)
    // res.json({message:x});

    res.json(updatingprogress)




})


//Get Progress 
const getProgressforCourse=asyncHandler(async (req, res) => 
    {  const traineeid=req.params.traineeid;
       const courseid=req.params.courseid;

       //getting progress array
       const  ProgressArray=await CorporateTrainee.findOne({_id:traineeid},'-_id progress')
        const array=ProgressArray.progress   //getting progress array

        //search for the course in progress array using course id 

        let coursedocument;
        let progress;
   

        for(let i=0;i<array.length;i++){
           coursedocument=array[i];
            //x=coursedocument.course.toString()==courseid;
           if(coursedocument.course==courseid){
              progress =coursedocument.progressvalue
               console.log("found")
            break;
            }
       }

       res.json({progress:progress})


    
    
    
       
    }

)

const checkMyOwnCourse=asyncHandler(async(req,res)=>{
    const corporateTraineeid=req.params.corporateTraineeid;
    const courseid=req.params.courseid;
    const coursesArray=(await CorporateTrainee.findById(corporateTraineeid)).courses;

    let found=false;
    let coursedocument;

    for(let i=0;i<coursesArray.length;i++){
        coursedocument=coursesArray[i];
         //x=coursedocument.course.toString()==courseid;
        if(coursedocument.toString()==courseid){
           found=true;
            break;
         }
     }
     
     res.json({found:found})
}

)














module.exports = {createCorporateTrainee, changePassword, logout, getCorporateTraineeProfile,updateProgress,insertProgress,getProgressforCourse}