const express = require('express')
const router = express.Router({ mergeParams: true })
const {requireAuth} = require('../middleware/authMiddleware')

const
  { getCourseById,
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
    getSubtitleId,addPromotion,getSubtitlesforCourse,
    searchInstructorCourses,
    acceptContract,
    acceptPolicy, 
    payCredit,
    addPromotionForCourses,
    mostPopular,
    payWithWallet,
    getBalanceAndPrice,
    getCourserRatingnReviews,
    downloadCertificate,
    emailCertificate} = require('../controllers/courseController')   //destructuring
router.get('/:traineeid/emailCertificate/:courseid/', requireAuth,emailCertificate);
router.get('/', getCourses) // get all courses
router.get('/download', downloadCertificate)
router.get('/individual/:courseId/getBalanceAndPrice', requireAuth,getBalanceAndPrice)
router.post('/individual/:courseId/PayWithWallet',requireAuth, payWithWallet)
router.post('/individual/:courseId/PayWithWallet', requireAuth,payWithWallet)
router.post('/individual/:courseId/payCredit',requireAuth, payCredit)
router.get('/instructor/search', requireAuth,searchInstructorCourses)
router.post('/instructor/filterMyCourses', requireAuth,filterInstructorCourses) // get all courses for instructor filtered
router.get('/getCourse/', requireAuth,getCourseById)      
router.get('/instructor',requireAuth, instructorCourses) // get all courses for instructor
router.get('/search', requireAuth,searchCourse)
//router.route('/:id').get(getCourseById) // get course by id
router.get('/corporate/myCourses', requireAuth,CorporateCourses)
router.get('/individual/myCourses',requireAuth, IndividualCourses)
router.get('/corporate/search', requireAuth,corporateGetCourses) // get all courses for corporate . search without the price
router.post('/addCourse', requireAuth,addCourse)
router.put('/acceptContract', requireAuth,acceptContract)
router.put('/acceptPolicy',requireAuth,acceptPolicy)
router.post('/search', requireAuth,searchCourse)
router.get('/getSubtitles', requireAuth,getSubtitles) // get course subtitles "Somaya"
router.get('/getSubtitlesforCourse/:courseId',requireAuth, getSubtitlesforCourse) //get course subtitles "Reem"   we need both of them 
router.get('/getSubtitleId',requireAuth, getSubtitleId) // get subtitle id from title')
//router.route('/:id').get(getCourseById) // get course by id
router.post('/instructor/filterMyCourses', requireAuth,filterInstructorCourses) // get all courses for instructor filtered
router.post('/filter',requireAuth, filter) // This is a POST request to the /api/guest endpoint
router.put('/review/:courseid',requireAuth, addCourseReview);
// router.get('/reviewsnratings',getCourseRating)
// router.get('/getreviews/:id',getCourseReviews)
router.get('/reviewsnratings',requireAuth,getCourserRatingnReviews)

router.post('/filterCorporate',requireAuth, filterCorporate) // This is a GET request to the /api/guest endpoint
router.get('/instructor/search',requireAuth, searchInstructorCourses)
router.put('/addPromotionForCourses',requireAuth, addPromotionForCourses)
router.put('/addPromotion/:courseid',requireAuth, addPromotion)

router.patch('/addPromotion/:courseid',requireAuth, addPromotion)
//router.get('/getAverage', averageEnrolled)
router.get('/popular',requireAuth, mostPopular)

module.exports = router