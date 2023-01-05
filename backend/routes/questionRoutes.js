const express = require('express');
const { getQuestions, addQuestion } = require('../controllers/questionController')
const router = express.Router();

router.get('/getQuestions',getQuestions)
//router.post('/addQuestion/:taskId', addQuestion) // This is a PUT request to the /api/guest endpoint
router.post('/addQuestion', addQuestion)
module.exports = router;
