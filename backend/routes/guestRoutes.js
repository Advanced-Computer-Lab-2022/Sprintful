const express = require('express');
const router = express.Router();
const { searchCourse, filterPrice, filterSubjectRating } = require('../controllers/guestController')

router.get('/search', searchCourse) // This is a GET request to the /api/guest endpoint
router.get('/filter', filterSubjectRating) // This is a GET request to the /api/guest endpoint
router.get('/filterP', filterPrice) // This is a GET request to the /api/guest endpoint

//router.put('/', filterCourse) // This is a PUT request to the /api/guest endpoint


module.exports = router;