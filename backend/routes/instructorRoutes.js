const express = require('express');
const router = express.Router();
const { createInstructor } = require('../controllers/instructorController')
const { searchCourse, filterSubjectRating, filterPrice } = require('../controllers/instructorController')

router.post('/createInstructor', createInstructor) 

router.get('/search', searchCourse) // This is a GET request to the /api/guest endpoint
router.get('/filter', filterSubjectRating) // This is a GET request to the /api/guest endpoint
router.get('/filterP', filterPrice) // This is a GET request to the /api/guest endpoint


module.exports = router;
