const express = require('express');
const router = express.Router();
const { createInstructor, changePassword, addInstructorReview, getInstructorRating,
    createChoice, createQuestion, createTask, getInstructorProfile , getInstructorIdByCourse, login, editBioEmailPassword, logout, getAmount,checkMyOwnCourse} = require('../controllers/instructorController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post('/createInstructor', createInstructor);
router.put('/changePassword', changePassword);
// router.put('/review',requireAuth, addInstructorReview)
router.get('/reviewsnratings', getInstructorRating)
// router.get('/profile', getInstructorProfile)

router.get('/profile', getInstructorProfile)
router.put('/review', addInstructorReview)
router.get('/getInstructorByCourse/:courseid', getInstructorIdByCourse)

router.post('/login', login);
router.get('/logout', logout)
router.put('/editProfile', editBioEmailPassword)
router.get('/amount', getAmount)
router.get('/checkmyownCourse/:instructorid/:courseid',checkMyOwnCourse)

module.exports = router;
