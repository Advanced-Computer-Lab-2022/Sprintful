const express = require('express');
const router = express.Router();
const { addSubtitle } = require('../controllers/subtitleController')

router.post('/addSubtitle/:courseid',addSubtitle)

module.exports = router;