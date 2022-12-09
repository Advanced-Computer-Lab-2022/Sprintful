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
    getCourseRating } = require('../controllers/courseController')

router.get('/search', searchCourse)
router.route('/').get(getCourseById) // get course by id
// router.route('/:id').get(getCourseById) // get course by id
router.route('/').get(getCourses) // get all courses (Search) for all except corporate trainee
router.get('/corporate/myCourses', CorporateCourses)
router.get('/individual/myCourses', IndividualCourses)
router.route('/corporate').get(corporateGetCourses) // get all courses for corporate . search without the price
router.post('/', addCourse)
router.get('/instructor/:id', instructorCourses) // get all courses for instructor
router.get('/instructor/filterMyCourses', filterMyCourses) // get all courses for instructor filtered
router.get('/filter', filterSubjectRating) // This is a POST request to the /api/guest endpoint
router.post('/filterP', filterPrice) // This is a GET request to the /api/guest endpoint
router.put('/review', addCourseReview);
router.route('/reviewsnratings').get(getCourseRating)
router.route('/getreviews/:id').get(getCourseReviews);


module.exports = router