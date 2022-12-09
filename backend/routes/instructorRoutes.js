const express = require('express');
const router = express.Router();
const { createInstructor, changePassword, addInstructorReview, getInstructorRating,
    createChoice, createQuestion, createTask, getInstructorProfile } = require('../controllers/instructorController')

router.post('/createInstructor', createInstructor);
router.put('/changePassword', changePassword);
router.put('/review', addInstructorReview)
router.get('/reviewsnratings', getInstructorRating)
router.get('/profile', getInstructorProfile)

// router.put('/editBioEmail', editBioEmail)

module.exports = router;
