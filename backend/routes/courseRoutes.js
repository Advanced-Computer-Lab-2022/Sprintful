const express = require('express')
const router = express.Router({ mergeParams: true })
const {requireAuth} = require('../middleware/authMiddleware')

const { getCourseById,
    getCourses,
    corporateGetCourses,
    addCourse,
    instructorCourses,
    filterInstructorCourses,
    searchCourse,
    filter,
    filterCorporate,
    CorporateCourses,
    IndividualCourses,
    addCourseReview,
    getCourseReviews,
    getCourseRating,
    getSubtitles, 
    getSubtitleId,
    searchInstructorCourses,
    acceptContract } = require('../controllers/courseController')
    
router.get('/instructor', instructorCourses) // get all courses for instructor
router.get('/search', searchCourse)
router.route('/:id').get(getCourseById) // get course by id
router.get('/corporate/myCourses',CorporateCourses)
router.get('/individual/myCourses', IndividualCourses)
router.get('/corporate/search',corporateGetCourses) // get all courses for corporate . search without the price
router.post('/addCourse', addCourse)
router.put('/acceptContract',acceptContract)
router.post('/search', searchCourse)
router.get('/getSubtitles',requireAuth, getSubtitles) // get course subtitles
router.get('/getSubtitleId',requireAuth, getSubtitleId) // get subtitle id from title')
router.route('/:id').get(getCourseById) // get course by id
router.route('/').get(getCourses) // get all courses
router.post('/instructor/filterMyCourses',filterInstructorCourses) // get all courses for instructor filtered
router.post('/filter', filter) // This is a POST request to the /api/guest endpoint
router.put('/review',requireAuth, addCourseReview);
router.get('/reviewsnratings',requireAuth,getCourseRating)
router.get('/getreviews/:id',requireAuth,getCourseReviews)
router.post('/filterPrice', filterPrice) // This is a GET request to the /api/guest endpoint
router.route('/:id').get(getCourseById) // get course by id
router.post('/filterCorporate', filterCorporate) // This is a GET request to the /api/guest endpoint
router.get('/instructor/search', searchInstructorCourses)


module.exports = router