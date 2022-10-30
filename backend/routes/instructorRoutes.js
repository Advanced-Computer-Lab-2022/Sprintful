const express = require('express');
const router = express.Router();
const { createInstructor } = require('../controllers/instructorController')

router.post('/createInstructor', createInstructor) 

module.exports = router;
