const express = require('express');
const router = express.Router();
const { viewCourses ,searchCourses} = require('../controllers/instructorController')

router.get('/', viewCourses) // This is a POST request to the /api/admin endpoint
//router.post('/',addCourse)
router.get('/search',searchCourses)

module.exports = router;