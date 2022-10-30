const express = require('express');
const router = express.Router();
const { createCorporateTrainee } = require('../controllers/coroprateTraineeController')

router.post("/createCorporateTrainee", createCorporateTrainee)


module.exports = router;

