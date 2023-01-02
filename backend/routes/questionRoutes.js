const express = require('express');
const { getQuestions, addQuestion } = require('../controllers/questionController')
const router = express.Router();
const {requireAuth} = require('../middleware/authMiddleware')

router.get('/getQuestions', getQuestions)
//router.post('/addQuestion/:taskId', requireAuth, addQuestion) // This is a PUT request to the /api/guest endpoint
router.post('/addQuestion', addQuestion)
module.exports = router;
