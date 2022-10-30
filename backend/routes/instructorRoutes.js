const express = require('express');
const router = express.Router();
const {addTask,addSubtitle,viewCourses } = require('../controllers/instructorController')

router.post('/addTask/:subtitleid',addTask)

module.exports = router;