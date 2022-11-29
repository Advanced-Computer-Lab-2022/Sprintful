const express = require('express');
const router = express.Router();

const { addAnswer } = require('../controllers/answerController')

router.post('/addAnswer', addAnswer)

module.exports = router;