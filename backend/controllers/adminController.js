const asyncHandler = require('express-async-handler')
const { builtinModules } = require('module')
const Admin = require('../models/adminModel')

// @desc Set admin
// @route POST /api/admin
// @access Private
const createAdmin = asyncHandler(async (req, res) => { 
    const { username, password } = req.body

    const adminExists = await Admin.findOne({ username })

    if (adminExists) {
        res.status(400)
        throw new Error('Admin already exists')
    }

    const admin = await Admin.create({
        username,
        password
    })

    if (admin) {
        res.status(201).json({
            _id: admin._id,
            username: admin.username,
            password: admin.password
        })
    } else {
        res.status(400)
        throw new Error('Invalid admin data')
    }
})

module.exports = { createAdmin }