const express = require('express');
const router = express.Router();
const { createInstructor, changePassword, addInstructorReview, getInstructorRating,
    createChoice, createQuestion, createTask, getInstructorProfile , getInstructorIdByCourse, login, editBioEmailPassword, logout, getAmount,checkMyOwnCourse} = require('../controllers/instructorController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post('/createInstructor',requireAuth, createInstructor);
router.put('/changePassword',requireAuth, changePassword);
// router.put('/review',requireAuth, addInstructorReview)
router.get('/reviewsnratings',requireAuth, getInstructorRating)
// router.get('/profile', getInstructorProfile)

router.get('/profile',requireAuth, getInstructorProfile)
router.put('/review',requireAuth, addInstructorReview)
router.get('/getInstructorByCourse/:courseid',requireAuth, getInstructorIdByCourse)

router.post('/login', login);
router.get('/logout', logout)
router.put('/editProfile',requireAuth, editBioEmailPassword)
router.get('/amount',requireAuth, getAmount)
router.get('/checkmyownCourse/:instructorid/:courseid',requireAuth,checkMyOwnCourse)

module.exports = router;
