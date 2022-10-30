const express = require('express');
const router = express.Router();
const { searchCourse, filterSubjectRating} = require('../controllers/corporateTraineeController')

router.get('/search', searchCourse) // This is a POST request to the /api/guest endpoint
router.get('/filter', filterSubjectRating) // This is a POST request to the /api/guest endpoint


module.exports = router;