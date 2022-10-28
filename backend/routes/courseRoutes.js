const express = require('express')
const router = express.Router({ mergeParams: true })
const { viewCourse } = require('../controllers/courseController')

router.route('/:id').get(viewCourse)

module.exports = router