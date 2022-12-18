const express = require('express')
const router = express.Router({ mergeParams: true })
const {requireAuth} = require('../middleware/authMiddleware')

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
router.get('/corporate/myCourses',CorporateCourses)
router.get('/individual/myCourses', IndividualCourses)
router.get('/corporate/search',corporateGetCourses) // get all courses for corporate . search without the price
router.post('/',requireAuth, addCourse)
router.get('/instructor/:id',requireAuth, instructorCourses) // get all courses for instructor
router.post('/search', searchCourse)
router.get('/getSubtitles',requireAuth, getSubtitles) // get course subtitles
router.get('/getSubtitleId',requireAuth, getSubtitleId) // get subtitle id from title')
router.route('/:id').get(getCourseById) // get course by id
router.route('/').get(getCourses) // get all courses
router.get('/instructor/filterMyCourses',requireAuth, filterMyCourses) // get all courses for instructor filtered
router.post('/filter', filterSubjectRating) // This is a POST request to the /api/guest endpoint
router.put('/review',requireAuth, addCourseReview);
router.get('/reviewsnratings',requireAuth,getCourseRating)
router.get('/getreviews/:id',requireAuth,getCourseReviews)
router.post('/filterPrice', filterPrice) // This is a GET request to the /api/guest endpoint

module.exports = router