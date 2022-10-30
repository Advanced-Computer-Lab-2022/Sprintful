const express = require('express');
const router = express.Router();
const { viewCourses, createCorporateTrainee } = require('../controllers/coroprateTraineeController')

router.get('/', viewCourses) // This is a POST request to the /api/admin endpoint
router.post("/createCorporateTrainee", createCorporateTrainee)


module.exports = router;