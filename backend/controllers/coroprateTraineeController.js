const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const CorporateTrainee = require('../models/corporateTraineeModel')

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
    const token = createToken("");
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

module.exports = { createCorporateTrainee, changePassword, logout}