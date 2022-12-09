const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const { appendFile } = require('fs')
const courseModel = require('../models/courseModel.js')
const instructor = require('../models/instructorModel.js')


//Logical error, returns true and with no change in the password. 
//Changes ???????'s password
changePassword = async(req, res, next) => {
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



module.exports = { changePassword}
