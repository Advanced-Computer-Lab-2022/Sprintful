const express = require('express');
const router = express.Router();
const { changePassword ,login, logout, viewMoney, getIndividualTraineeProfile,updateProgress,insertProgress,getProgressforCourse,checkMyOwnCourse} = require('../controllers/individualTraineeController')
const {requireAuth} = require('../middleware/authMiddleware')

router.put('/changePassword',requireAuth, changePassword);
router.post('/login',requireAuth, login)
router.get('/logout',requireAuth, logout)
router.get('/profile',requireAuth, getIndividualTraineeProfile)

router.get('/viewMoney/:individualTraineeId',requireAuth, viewMoney)

router.patch('/updateProgress/:traineeid/:courseid',requireAuth, updateProgress)
router.patch('/insertProgress/:traineeid/:courseid',requireAuth, insertProgress)
router.get('/getProgress/:traineeid/:courseid',requireAuth,getProgressforCourse)
router.get('/checkmyownCourse/:individualTraineeid/:courseid',requireAuth,checkMyOwnCourse)

module.exports = router;
