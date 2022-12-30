const express = require('express');
const router = express.Router();
const { changePassword ,login, logout, viewMoney, getIndividualTraineeProfile,updateProgress,insertProgress} = require('../controllers/individualTraineeController')
const {requireAuth} = require('../middleware/authMiddleware')

router.put('/changePassword',changePassword);
router.post('/login', login)
router.get('/logout', logout)
router.get('/profile', getIndividualTraineeProfile)

router.get('/viewMoney/:individualTraineeId', viewMoney)

router.patch('/updateProgress/:traineeid/:courseid',updateProgress)
router.patch('/insertProgress/:traineeid/:courseid',insertProgress)


module.exports = router;
