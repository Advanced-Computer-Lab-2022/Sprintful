const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const CorporateTrainee = require('../models/corporateTraineeModel')

const generateToken =(id) =>{
    return jwt.sign({id }, process.env.JWT_SECRET, {
        expiresIn: '365d',
    })
}
const createCorporateTrainee = asyncHandler(async (req, res) => { 
     const { username, password } = req.body
     try {
        const corporateTraineeExists = await CorporateTrainee.findOne({ username })
        if (corporateTraineeExists) {
            res.status(400)
            throw new Error('Corporate Trainee already exists')
        }
        else {
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
                    // token: generateToken(corporateTrainee._id)
                })
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

//Logical error, returns true and with no change in the password. 
//Changes Hassan's password
const changePassword = async(req, res, next) => {
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

module.exports = { createCorporateTrainee, changePassword, logout}