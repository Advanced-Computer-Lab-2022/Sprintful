const express = require('express')
const router = express.Router({ mergeParams: true })
const { getCourseById, getCourses,corporateGetCourses, addCourse, instructorCourses, filterMyCourses, searchCourse, filterSubjectRating, filterPrice} = require('../controllers/courseController')

router.get('/search', searchCourse)
router.get('/:id',getCourseById) // get course by id
router.get('/',getCourses) // get all courses
router.route('/corporate').get(corporateGetCourses) // get all courses for corporate
router.post('/', addCourse) 
router.get('/instructor/:id', instructorCourses) // get all courses for instructor
router.get('/instructor/filterMyCourses', filterMyCourses) // get all courses for instructor filtered
router.get('/filter', filterSubjectRating) // This is a POST request to the /api/guest endpoint
router.get('/filterP', filterPrice) // This is a GET request to the /api/guest endpoint

module.exports = router