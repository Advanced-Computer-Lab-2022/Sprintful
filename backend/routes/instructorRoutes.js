const express = require('express');
const router = express.Router();
const { createInstructor, changePassword, addInstructorReview, getInstructorRating,
    createChoice, createQuestion, createTask, getInstructorProfile ,login, editBioEmail, logout} = require('../controllers/instructorController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post('/createInstructor',requireAuth, createInstructor);
router.put('/changePassword', requireAuth,changePassword);
// router.put('/review',requireAuth, addInstructorReview)
router.get('/reviewsnratings',requireAuth, getInstructorRating)
// router.get('/profile',requireAuth, getInstructorProfile)

router.get('/profile', getInstructorProfile)
router.put('/review', addInstructorReview)

router.post('/login', login);
router.get('/logout', logout)
router.put('/editBioEmail', requireAuth,editBioEmail)

module.exports = router;
