const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const { appendFile } = require('fs')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const IndividualTrainee = require('../models/individualTraineeModel')

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => { 
    return jwt.sign({ name }, process.env.JWT_Secret, {
        expiresIn: maxAge
    });
}
const logout = async (req, res) => {
    const token = createToken("");
    res.cookie('jwt', token, { httpOnly: true, maxAge: 1 });
    res.status(200).json({message: "You have logged out!"})
}

const changePassword = async (req, res, next) => {
    console.log("Change Password");
    try {
        const individualTraineeId = req.query.id;
        console.log("individualTraineeId",individualTraineeId);
        const individualTrainee = await IndividualTrainee.findById(individualTraineeId)
        console.log("individualTrainee",individualTrainee);
        const oldPassword = individualTrainee.password
        const currentPassword = req.body.currentPassword
        const auth = await bcrypt.compare(currentPassword, oldPassword);
        console.log("authentication", auth);

        if(auth){
            const salt = await bcrypt.genSalt(10);
            console.log("authentication2");
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            console.log("authentication26", hashedPassword);
            const response = await IndividualTrainee.findByIdAndUpdate(individualTraineeId, {password: hashedPassword}, { new: true })
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
const login = async (req, res) => {
    const individualTrainee = await IndividualTrainee.findOne({ username: req.body.username });
    if(individualTrainee)
    {
        const auth = await bcrypt.compare(req.body.password, individualTrainee.password);
        if(auth){
            const token = createToken(individualTrainee.username);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json(individualTrainee);
        }
        else{
            res.status(400).json({ error: 'Wrong password' });

        }
    }
    else{
        res.status(400).json({ error: 'User not Found'});
    }

}

//view the a

const getIndividualTraineeProfile = asyncHandler(async (req, res) => {
    const individualTrainee = await IndividualTrainee.findById(req.query.id)
    console.log(individualTrainee);
    if (individualTrainee) {
        res.json(individualTrainee)
    } else {
        res.status(404)
        throw new Error('Individual Trainee not found')
    }
})

mount available in their wallet from refunded courses
const viewMoney = asyncHandler(async (req, res) => {
const individualTraineeId = req.params.individualTraineeId
const individualTrainee = await IndividualTrainee.findById(individualTraineeId)
if(individualTrainee){
    res.json(individualTrainee.money)
}
else{
    res.status(404)
    throw new Error('Error, individual trainee not found')
}
})


module.exports = { changePassword, login, logout, viewMoney, getIndividualTraineeProfile}
