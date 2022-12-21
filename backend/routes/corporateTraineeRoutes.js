const express = require('express');
const router = express.Router();
const { createCorporateTrainee, changePassword, logout, getCorporateTraineeProfile } = require('../controllers/coroprateTraineeController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post("/createCorporateTrainee", requireAuth,createCorporateTrainee)
router.put('/changePassword', requireAuth,changePassword);
router.get('/logout', logout)
router.get('/profile', getCorporateTraineeProfile)

module.exports = router;

