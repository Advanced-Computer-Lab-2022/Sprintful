const express = require('express');
const router = express.Router();
const { createCorporateTrainee, changePassword, logout, getCorporateTraineeProfile ,updateProgress, insertProgress, getProgressforCourse,checkMyOwnCourse} = require('../controllers/coroprateTraineeController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post("/createCorporateTrainee", createCorporateTrainee)
router.put('/changePassword', changePassword);
router.get('/logout', logout)
router.get('/profile', getCorporateTraineeProfile)
router.patch('/updateProgress/:traineeid/:courseid', updateProgress)
router.patch('/insertProgress/:traineeid/:courseid', insertProgress)
router.get('/getProgress/:traineeid/:courseid', getProgressforCourse)
router.get('/checkmyownCourse/:corporateTraineeid/:courseid', checkMyOwnCourse)

module.exports = router;

