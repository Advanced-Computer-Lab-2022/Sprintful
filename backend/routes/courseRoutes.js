const express = require('express')
const router = express.Router({ mergeParams: true })
const { getCourseById, getCourses,corporateGetCourses, addCourse, instructorCourses, filterMyCourses, searchCourse, 
        filterSubjectRating, filterPrice, getSubtitles, getSubtitleId} = require('../controllers/courseController')

router.post('/search', searchCourse)
router.get('/getSubtitles', getSubtitles) // get course subtitles
router.get('/getSubtitleId', getSubtitleId) // get subtitle id from title')
router.route('/:id').get(getCourseById) // get course by id
router.route('/').get(getCourses) // get all courses
router.route('/corporate').get(corporateGetCourses) // get all courses for corporate
router.post('/', addCourse) 
router.get('/instructor/filterMyCourses', filterMyCourses) // get all courses for instructor filtered
router.post('/filter', filterSubjectRating) // This is a POST request to the /api/guest endpoint
router.post('/filterPrice', filterPrice) // This is a GET request to the /api/guest endpoint
router.get('/instructor/:id', instructorCourses) // get all courses for instructor

module.exports = router