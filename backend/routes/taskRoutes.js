const express = require('express');
const router = express.Router();
const {addTask } = require('../controllers/taskController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post('/addTask/:subtitleid',requireAuth, addTask)

module.exports = router;