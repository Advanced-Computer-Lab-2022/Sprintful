const express = require('express');
const router = express.Router();
const {addTask, addGrade } = require('../controllers/taskController')
//const {requireAuth} = require('../middleware/authMiddleware')

router.post('/addGrade', addGrade)

router.post('/addTask', addTask)

module.exports = router;