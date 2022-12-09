const express = require('express')
const router = express.Router({ mergeParams: true })
const { getCourseById,
    getCourses,
    corporateGetCourses,
    addCourse,
    instructorCourses,
    filterMyCourses,
    searchCourse,
    filterSubjectRating,
    filterPrice,
    CorporateCourses,
    IndividualCourses,
    addCourseReview,
    getCourseReviews,
    getCourseRating,
    getSubtitles, getSubtitleId } = require('../controllers/courseController')

router.get('/search', searchCourse)
router.route('/').get(getCourseById) // get course by id
// router.route('/:id').get(getCourseById) // get course by id
router.get('/corporate/myCourses', CorporateCourses)
router.get('/individual/myCourses', IndividualCourses)
router.route('/corporate').get(corporateGetCourses) // get all courses for corporate . search without the price
router.post('/', addCourse)
router.get('/instructor/:id', instructorCourses) // get all courses for instructor
router.post('/search', searchCourse)
router.get('/getSubtitles', getSubtitles) // get course subtitles
router.get('/getSubtitleId', getSubtitleId) // get subtitle id from title')
router.route('/:id').get(getCourseById) // get course by id
router.route('/').get(getCourses) // get all courses
router.get('/instructor/filterMyCourses', filterMyCourses) // get all courses for instructor filtered
router.post('/filter', filterSubjectRating) // This is a POST request to the /api/guest endpoint
router.put('/review', addCourseReview);
router.route('/reviewsnratings').get(getCourseRating)
router.route('/getreviews/:id').get(getCourseReviews);
router.post('/filterPrice', filterPrice) // This is a GET request to the /api/guest endpoint

module.exports = router