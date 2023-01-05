const express = require('express');
const router = express.Router();
const { changePassword ,login, logout, viewMoney, getIndividualTraineeProfile,updateProgress,insertProgress,getProgressforCourse,checkMyOwnCourse} = require('../controllers/individualTraineeController')

router.put('/changePassword', changePassword);
router.post('/login', login)
router.get('/logout', logout)
router.get('/profile', getIndividualTraineeProfile)

router.get('/viewMoney/:individualTraineeId', viewMoney)

router.patch('/updateProgress/:traineeid/:courseid', updateProgress)
router.patch('/insertProgress/:traineeid/:courseid', insertProgress)
router.get('/getProgress/:traineeid/:courseid',getProgressforCourse)
router.get('/checkmyownCourse/:individualTraineeid/:courseid',checkMyOwnCourse)

module.exports = router;
