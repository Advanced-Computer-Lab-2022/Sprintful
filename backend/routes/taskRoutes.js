const express = require('express');
const router = express.Router();
const {addTask, addGrade } = require('../controllers/taskController')
//const {requireAuth} = require('../middleware/authMiddleware')
const {requireAuth} = require('../middleware/authMiddleware')

router.post('/addGrade', addGrade)

router.post('/addTask',requireAuth, addTask)

module.exports = router;