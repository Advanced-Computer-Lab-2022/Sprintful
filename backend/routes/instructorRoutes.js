const express = require('express');
const router = express.Router();
const {viewMyCourses,viewCourses ,addCourse} = require('../controllers/instructorController')

router.get('/', viewCourses) // This is a POST request to the /api/admin endpoint
router.post('/',addCourse)   //hwa momken yb2a el path esmo '/addACourse'
router.get('/viewMyCourses',viewMyCourses)

module.exports = router;