const express = require('express');
const router = express.Router();
const { addSubtitle ,addYoutubeLinkAndDescript,getSubtitle} = require('../controllers/subtitleController')

router.post('/addSubtitle/:courseid',addSubtitle)
router.patch('/addVideoLink/:subtitleid',addYoutubeLinkAndDescript)
router.get('/:subtitleid',getSubtitle)
module.exports = router;