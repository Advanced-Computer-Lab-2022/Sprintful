const express = require('express')
const router = express.Router({ mergeParams: true })
const { getCourseById, getCourses,corporateGetCourses, addCourse, instructorCourses, filterMyCourses } = require('../controllers/courseController')


router.route('/:id').get(getCourseById) // get course by id
router.route('/').get(getCourses) // get all courses
router.route('/corporate').get(corporateGetCourses) // get all courses for corporate
router.post('/', addCourse) 
router.get('/instructor/:id', instructorCourses) // get all courses for instructor
router.get('/instructor/filterMyCourses', filterMyCourses) // get all courses for instructor filtered

module.exports = router