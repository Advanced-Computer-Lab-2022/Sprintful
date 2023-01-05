const express = require('express');
const router = express.Router();
const {addTask, addGrade } = require('../controllers/taskController')
//const {requireAuth} = require('../middleware/authMiddleware')

router.post('/addTask', addTask)
router.post('/addGrade', addGrade)


module.exports = router;