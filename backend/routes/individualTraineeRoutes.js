const express = require('express');
const router = express.Router();
const { searchCourse, filterSubjectRating, filterPrice } = require('../controllers/individualTraineeController')

router.get('/search', searchCourse) // This is a GET request to the /api/guest endpoint
router.get('/filter', filterSubjectRating) // This is a GET request to the /api/guest endpoint
router.get('/filterP', filterPrice) // This is a GET request to the /api/guest endpoint


module.exports = router;