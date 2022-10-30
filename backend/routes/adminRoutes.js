const express = require('express');
const router = express.Router();
const { createAdmin, createInstructor, createCorporateTrainee }  = require('../controllers/adminController')
// const createInstructor = require('../controllers/adminController')


router.post('/', createAdmin) // This is a POST request to the /api/admin endpoint
router.post('/createInstructor', createInstructor) 
router.post("/createCorporateTrainee", createCorporateTrainee)

module.exports = router;
