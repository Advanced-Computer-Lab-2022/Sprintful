const express = require('express');
const router = express.Router();

const { addAnswer, getAnswer } = require('../controllers/answerController')

router.post('/addAnswer', addAnswer).get('/getAnswer', getAnswer)


module.exports = router;