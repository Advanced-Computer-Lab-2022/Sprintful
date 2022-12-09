const express = require('express');
const router = express.Router();
const { createInstructor, changePassword, addInstructorReview, getInstructorRating, getInstructorProfile} = require('../controllers/instructorController')

router.post('/createInstructor', createInstructor);
router.put('/changePassword', changePassword);
router.put('/review', addInstructorReview)
router.get('/reviewsnratings', getInstructorRating)
router.get('/profile', getInstructorProfile)


module.exports = router;
