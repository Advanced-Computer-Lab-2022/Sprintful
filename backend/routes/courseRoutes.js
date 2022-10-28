const express = require('express')
const router = express.Router({ mergeParams: true })
const { getCourseById, getCourses } = require('../controllers/courseController')

router.route('/:id').get(getCourseById)
//getCourses and exclude the price parameter 
router.route('/').get(getCourses)

module.exports = router