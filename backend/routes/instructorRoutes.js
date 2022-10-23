const express = require('express');
const router = express.Router();
const { viewCourses ,addCourse} = require('../controllers/instructorController')

router.get('/', viewCourses) // This is a POST request to the /api/admin endpoint
router.post('/',addCourse)


module.exports = router;