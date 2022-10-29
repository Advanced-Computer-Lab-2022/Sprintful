const express = require('express');
const router = express.Router();
const {addTask,addSubtitle,filterMyCourses,viewMyCourses,viewCourses ,addCourse} = require('../controllers/instructorController')

router.get('/', viewCourses) // This is a POST request to the /api/admin endpoint
router.post('/',addCourse)   //hwa momken yb2a el path esmo '/addACourse'
router.get('/viewMyCourses',viewMyCourses)
router.get('/filterMyCourses',filterMyCourses)
router.post('/addSubtitle/:courseid',addSubtitle)
router.post('/addTask/:subtitleid',addTask)

module.exports = router;