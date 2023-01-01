const asyncHandler = require('express-async-handler')
const { appendFile } = require('fs')
// const { builtinModules } = require('module')
const IndividualTrainee = require('../models/individualTraineeModel')
const CorporateTrainee = require('../models/corporateTraineeModel')
const Admin = require('../models/adminModel')
const Instructor = require('../models/InstructorModel')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

//Generate JWT
const generateToken =(id) =>{
    return jwt.sign({id }, process.env.JWT_SECRET, {
        expiresIn: '365d',
    })
}
const signUp = asyncHandler(async (req, res) => { 
    const { username,email, password,firstName, lastName,gender} = req.body
    try {
       const individualTraineeExists = await IndividualTrainee.findOne({ username })
       if (individualTraineeExists) {
           res.status(400)
           throw new Error('Individual Trainee already exists')
       }
       else {
           const salt = await bcrypt.genSalt(10)
           const hashedPassword = await bcrypt.hash(password,salt)
           const individualTrainee = await IndividualTrainee.create({
               username,
               email,
               password: hashedPassword,
               firstName,
               lastName,
               gender
           })
           if (individualTrainee) {
               res.status(201).json({
                   _id: individualTrainee._id,
                   username: individualTrainee.username,
                   email: individualTrainee.email,
                   password: individualTrainee.password,
                   firstName: individualTrainee.firstName,
                   lastName: individualTrainee.lastName,
                   gender: individualTrainee.gender,
                   // token: generateToken(corporateTrainee._id)
               })
           } 
           else {
               res.status(400)
               throw new Error('Invalid Individual Trainee data')
           }
       }
   }
    catch (error) {
       res.status(400).json({ error: error.message })
   }   
}
)

const login =asyncHandler (async(req,res)=>{
    const {username,password} = req.body
    const admin = await Admin.findOne({username})
    const corporateTrainee = await CorporateTrainee.findOne({username})
    const individualTrainee = await IndividualTrainee.findOne({username})
    const instructor = await Instructor.findOne({username})

    // .compare compares the entered plain text password with the user's password in the db
    if(admin && (await bcrypt.compare(password , admin.password)))
    {
        res.json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
            role: "Admin"
            
        })
    }
    else if(corporateTrainee && (await bcrypt.compare(password , corporateTrainee.password)))
    {
        res.json({
            _id: corporateTrainee.id,
            name: corporateTrainee.name,
            email: corporateTrainee.email,
            token: generateToken(corporateTrainee._id),
            role: "Corporate"

        })
    }
    else if(individualTrainee && (await bcrypt.compare(password , individualTrainee.password)))
    {
        res.json({
            _id: individualTrainee.id,
            name: individualTrainee.name,
            email: individualTrainee.email,
            token: generateToken(individualTrainee._id),
            role: "Individual"

        })
    }
    else if(instructor && (await bcrypt.compare(password , instructor.password)))
    {
        res.json({
            _id: instructor.id,
            name: instructor.name,
            email: instructor.email,
            token: generateToken(instructor._id),
            policy: instructor.policy,
            role: "Instructor"
        })
    }
    else{
        res.status(400)
        throw new Error ('Invalid credentials')
    }
 
}
)

module.exports = { signUp, login}