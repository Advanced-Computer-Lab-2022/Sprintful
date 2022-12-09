const express = require('express');
const router = express.Router();
const { createCorporateTrainee, changePassword } = require('../controllers/coroprateTraineeController')

router.post("/createCorporateTrainee", createCorporateTrainee)
router.put('/changePassword', changePassword);

module.exports = router;

