const express = require('express');
const router = express.Router();
const {addQuestion } = require('../controllers/questionController')


router.post('/addQuestion/:taskId', addQuestion) // This is a PUT request to the /api/guest endpoint

module.exports = router;
