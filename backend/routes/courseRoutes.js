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
    getSubtitles, getSubtitleId,addPromotion,getSubtitlesforCourse } = require('../controllers/courseController')   //destructuring

router.get('/search', searchCourse)
//router.route('/').get(getCourseById) // get course by id
// router.route('/:id').get(getCourseById) // get course by id
router.get('/',getCourseById)
router.get('/corporate/myCourses', requireAuth, CorporateCourses)
router.get('/individual/myCourses',requireAuth, IndividualCourses)
router.get('/corporate',requireAuth,corporateGetCourses) // get all courses for corporate . search without the price
router.post('/',requireAuth, addCourse)
router.get('/instructor/:id',requireAuth, instructorCourses) // get all courses for instructor
router.post('/search', searchCourse)
router.get('/getSubtitles', requireAuth,getSubtitles) // get course subtitles "Somaya"
router.get('/getSubtitlesforCourse/:courseId',getSubtitlesforCourse) //get course subtitles "Reem"   we need both of them 
router.get('/getSubtitleId',requireAuth, getSubtitleId) // get subtitle id from title')
router.route('/:id').get(getCourseById) // get course by id
router.route('/').get(getCourses) // get all courses
router.get('/instructor/filterMyCourses',requireAuth, filterMyCourses) // get all courses for instructor filtered
router.post('/filter', filterSubjectRating) // This is a POST request to the /api/guest endpoint
router.put('/review',requireAuth, addCourseReview);
router.get('/reviewsnratings',requireAuth,getCourseRating)
router.get('/getreviews/:id',requireAuth,getCourseReviews)
router.post('/filterPrice', filterPrice) // This is a GET request to the /api/guest endpoint
router.patch('/addPromotion/:courseid',addPromotion)

module.exports = router