const express = require('express');
const router = express.Router();
const { viewCourses, createCorporateTrainee } = require('../controllers/coroprateTraineeController')
const { searchCourse, filterSubjectRating} = require('../controllers/corporateTraineeController')

router.get('/search', searchCourse) // This is a POST request to the /api/guest endpoint
router.get('/filter', filterSubjectRating) // This is a POST request to the /api/guest endpoint



router.get('/', viewCourses) // This is a POST request to the /api/admin endpoint
router.post("/createCorporateTrainee", createCorporateTrainee)


module.exports = router;

