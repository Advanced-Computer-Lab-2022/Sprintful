const express = require('express');
const router = express.Router();
const { createCorporateTrainee, changePassword, logout, getCorporateTraineeProfile ,updateProgress, insertProgress, getProgressforCourse,checkMyOwnCourse} = require('../controllers/coroprateTraineeController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post("/createCorporateTrainee",requireAuth, createCorporateTrainee)
router.put('/changePassword',requireAuth, changePassword);
router.get('/logout',requireAuth, logout)
router.get('/profile',requireAuth, getCorporateTraineeProfile)
router.patch('/updateProgress/:traineeid/:courseid',requireAuth, updateProgress)
router.patch('/insertProgress/:traineeid/:courseid',requireAuth, insertProgress)
router.get('/getProgress/:traineeid/:courseid',requireAuth, getProgressforCourse)
router.get('/checkmyownCourse/:corporateTraineeid/:courseid',requireAuth, checkMyOwnCourse)

module.exports = router;

