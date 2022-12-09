const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const CorporateTrainee = require('../models/corporateTraineeModel')

const createCorporateTrainee = asyncHandler(async (req, res) => { 
    const { username, password } = req.body

    const corporateTraineeExists = await CorporateTrainee.findOne({ username })

    if (corporateTraineeExists) {
        res.status(400)
        throw new Error('Corporate Trainee already exists')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const corporateTrainee = await CorporateTrainee.create({
        username,
        password: hashedPassword
    })

    if (corporateTrainee) {
        res.status(201).json({
            _id: corporateTrainee._id,
            username: corporateTrainee.username,
            password: corporateTrainee.password,
            token: generateToken(corporateTrainee._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid Corporate Trainee data')
    }
})

//Logical error, returns true and with no change in the password. 
//Changes Hassan's password
changePassword = async(req, res, next) => {
    console.log("Change Password");
    try{
        const{userId} = req.params;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const userPassword = await CorporateTrainee.findByIdAndUpdate('6361755f3c1bd54471fcf9f5', req.body, {new: true})   //combinations? hardcode it
        return res.status(200).json({ status: true, data: password});
    }
    catch(error){
        return res.status(400).json({ status: false, error: "Error Occured"});
    }
}

module.exports = { createCorporateTrainee, changePassword }