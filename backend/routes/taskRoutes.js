const express = require('express');
const router = express.Router();
const {addTask } = require('../controllers/taskController')

router.post('/addTask/:subtitleid',addTask)

module.exports = router;