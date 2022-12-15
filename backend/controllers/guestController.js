const asyncHandler = require('express-async-handler')
const { appendFile } = require('fs')
const { builtinModules } = require('module')
const IndividualTrainee = require('../models/individualTraineeModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const signUp = asyncHandler(async (req, res) => { 
    const { username,email, password,firstName, lastName,gender } = req.body
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


module.exports = { signUp }