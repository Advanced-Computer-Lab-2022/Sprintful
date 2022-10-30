const express = require('express');
const router = express.Router();
const { viewCourses } = require('../controllers/individualTraineeController')
const { searchCourse, filterSubjectRating, filterPrice } = require('../controllers/individualTraineeController')

router.get('/', viewCourses) // This is a POST request to the /api/admin endpoint

router.get('/search', searchCourse) // This is a GET request to the /api/guest endpoint
router.get('/filter', filterSubjectRating) // This is a GET request to the /api/guest endpoint
router.get('/filterP', filterPrice) // This is a GET request to the /api/guest endpoint


module.exports = router;
