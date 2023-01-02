const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const { model } = require('mongoose')
const Admin = require('../models/adminModel')
const Reports = require('../models/reportModel')
const Corporates = require('../models/corporatesModel')
const Instructors = require('../models/InstructorModel')
const Requests = require('../models/requestAccessModel')
const CorporateTrainees = require('../models/corporateTraineeModel')
const IndividualTrainees = require('../models/individualTraineeModel')
const Courses = require('../models/courseModel')
const Refunds = require('../models/refundRequestModel')

const getAdmin = asyncHandler(async (req, res) => {
    const { _id, username,password }= await Admin.findById(req.admin.id)
    {
        res.status(200).json({
            id: _id,
            username,
            password,

        })
    }
})

const loginAdmin =asyncHandler (async(req,res)=>{
    const {username,password} = req.body
    const admin = await Admin.findOne({username})
    // .compare compares the entered plain text password with the user's password in the db
    if(admin && (await bcrypt.compare(password , admin.password)))
    {
        res.json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id)

        })
    }
    else
    {
        res.status(400)
        throw new Error ('Invalid credentials')
    }
}
)
const logout = async (req, res) => {
    const token = generateToken ("");
    res.cookie('jwt', token, { httpOnly: true, maxAge: 1 });
    res.status(200).json({message: "You have logged out!"})
}
//res.status(200).json(admins)


// @desc Set admin
// @route POST /api/admin
// @access Private
const createAdmin = asyncHandler(async (req, res) => { 
    const { username, password } = req.body
    try {
        const adminExists = await Admin.findOne({ username })
        if (adminExists) {
                res.status(400)
                throw new Error('Admin already exists')
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const admin = await Admin.create({
            username,
            password : hashedPassword
        })

        if (admin) {
            res.status(201).json({
                _id: admin._id,
                username: admin.username,
                password: admin.password,
                // token: generateToken(admin._id)
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid admin data')
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    } 
})

const getAdminProfile = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.query.id)
    console.log(admin);
    if (admin) {
        res.json(admin)
    } else {
        res.status(404)
        throw new Error('Admin not found')
    }
})


const changePassword = async (req, res, next) => {
    console.log("Change Password");
    try {
        const adminId = req.query.id;
        console.log("adminId",adminId);
        const admin = await Admin.findById(adminId)
        console.log("admin",admin);
        const oldPassword = admin.password
        const currentPassword = req.body.currentPassword
        const auth = await bcrypt.compare(currentPassword, oldPassword);
        console.log("authentication", auth);

        if(auth){
            const salt = await bcrypt.genSalt(10);
            console.log("authentication2");
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            console.log("authentication26", hashedPassword);
            const response = await Admin.findByIdAndUpdate(adminId, {password: hashedPassword}, { new: true })
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

const addCorporate = asyncHandler(async (req, res) => { 
    const { name, subject } = req.body
    try {
        const CorporateExists = await Corporates.findOne({ name })
        if (CorporateExists) {
                res.status(400)
                throw new Error('Corporate already exists')
        }
        const corporate = await Corporates.create({
            name,
            subject
        })

        if (corporate) {
            res.status(201).json({
                _id: corporate._id,
                name: corporate.name,
                subject: corporate.subject,
                // token: generateToken(admin._id)
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid Corporate data')
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    } 
})


//Generate JWT
const generateToken =(id) =>{
    return jwt.sign({id }, process.env.JWT_SECRET, {
        expiresIn: '365d',
    })
}

const getStats = asyncHandler(async (req, res) => {
    var numInstructors = await Instructors.count();
    console.log("step1", numInstructors)
    const numCorporateTrainees = await CorporateTrainees.count();
    console.log("step2", numCorporateTrainees)
    const numInsdividualTrainees = await IndividualTrainees.count();
    console.log("step3")
    const numCourses = await Courses.count();
    const numCorporates = await Corporates.count();
    const numRequests = await Requests.find({state: "pending"}).count();
    const numReportsUnseen = await Reports.find({status: "unseen"}).count();
    const numReportsPending = await Reports.find({status: "pending"}).count();
    const numReportsUnResolved = numReportsPending+numReportsUnseen;
    const numRefunds = await Refunds.find({isAccepted: false}).count();
    {
        res.status(200).json({
            numInstructors: numInstructors,
            numCorporateTrainees: numCorporateTrainees,
            numInsdividualTrainees: numInsdividualTrainees,
            numCourses: numCourses,
            numCorporates: numCorporates,
            numReportsUnResolved: numReportsUnResolved,
            numRequests: numRequests,
            numRefunds: numRefunds

        })
    }
})



module.exports = { createAdmin, loginAdmin, getAdmin, logout, addCorporate, changePassword, getAdminProfile, getStats}