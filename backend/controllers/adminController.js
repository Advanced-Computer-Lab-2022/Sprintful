const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const { model } = require('mongoose')
const Admin = require('../models/adminModel')


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


//Generate JWT
const generateToken =(id) =>{
    return jwt.sign({id }, process.env.JWT_SECRET, {
        expiresIn: '365d',
    })
}

module.exports = { createAdmin,loginAdmin, getAdmin, logout}