const express = require('express');
const router = express.Router();
const { changePassword ,login, logout, viewMoney, getIndividualTraineeProfile} = require('../controllers/individualTraineeController')
const {requireAuth} = require('../middleware/authMiddleware')

router.put('/changePassword',requireAuth,changePassword);
router.post('/login', login)
router.get('/logout', logout)
router.get('/profile', getIndividualTraineeProfile)

router.get('/viewMoney/:individualTraineeId', viewMoney)

module.exports = router;
