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
//Logical error, returns true and with no change in the password. 
//Changes ???????'s password
const changePassword = async(req, res, next) => {
    console.log("Change Password");
    try{
        const{userId} = req.params;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const userPassword = await IndividualTrainee.findByIdAndUpdate('', req.body, {new: true})   //combinations? hardcode it
        return res.status(200).json({ status: true, data: password});
    }
    catch(error){
        return res.status(400).json({ status: false, error: "Error Occured"});
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
module.exports = { changePassword, login, logout}
