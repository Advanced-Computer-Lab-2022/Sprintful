const express = require('express');
const router = express.Router();
const { viewCourses } = require('../controllers/individualTraineeController')

router.get('/', viewCourses) // This is a POST request to the /api/admin endpoint


module.exports = router;