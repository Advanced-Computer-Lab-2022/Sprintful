const express = require('express');
const router = express.Router();
const { addSubtitle ,addYoutubeLinkAndDescript} = require('../controllers/subtitleController')

router.post('/addSubtitle/:courseid',addSubtitle)
router.patch('/addVideoLink/:subtitleid',addYoutubeLinkAndDescript)
module.exports = router;