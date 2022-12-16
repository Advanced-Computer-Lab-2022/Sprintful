const express = require('express');
const router = express.Router();
const {addTask } = require('../controllers/taskController')
//const {requireAuth} = require('../middleware/authMiddleware')

router.post('/addTask/:id',addTask)

module.exports = router;