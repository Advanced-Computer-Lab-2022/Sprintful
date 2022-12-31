const express = require('express');
const router = express.Router();
const { createInstructor, changePassword, addInstructorReview, getInstructorRating,
    createChoice, createQuestion, createTask, getInstructorProfile ,login, editBioEmailPassword, logout, getAmount} = require('../controllers/instructorController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post('/createInstructor', createInstructor);
router.put('/changePassword', changePassword);
// router.put('/review',requireAuth, addInstructorReview)
router.get('/reviewsnratings',requireAuth, getInstructorRating)
// router.get('/profile', getInstructorProfile)

router.get('/profile', getInstructorProfile)
router.put('/review', addInstructorReview)

router.post('/login', login);
router.get('/logout', logout)
router.put('/editProfile', editBioEmailPassword)
router.get('/amount', getAmount)

module.exports = router;
