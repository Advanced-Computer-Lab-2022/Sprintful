const express = require('express');
const router = express.Router();
const {requireAuth} = require('../middleware/authMiddleware')
const { addAnswer, getAnswer } = require('../controllers/answerController')

router.post('/addAnswer', requireAuth,addAnswer).get('/getAnswer', getAnswer)


module.exports = router;