const express = require('express');
const router = express.Router();
const { getQuestions } = require('../controllers/questionController')

router.get('/getQuestions', getQuestions)

module.exports = router;