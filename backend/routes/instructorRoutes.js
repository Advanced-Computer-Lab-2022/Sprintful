const express = require('express');
const router = express.Router();
const { createInstructor, editBioEmail} = require('../controllers/instructorController')

router.post('/createInstructor', createInstructor) 
router.put('/editBioEmail', editBioEmail)

module.exports = router;
