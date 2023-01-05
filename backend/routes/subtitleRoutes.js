const express = require('express');
const router = express.Router();
const { addSubtitle ,addYoutubeLinkAndDescript,getSubtitle,addContent} = require('../controllers/subtitleController')

router.post('/addSubtitle/:courseid', addSubtitle)
router.patch('/addVideoLink/:subtitleid',addYoutubeLinkAndDescript)
router.get('/:subtitleid',getSubtitle) // for instructor
//adding content to subtitle 
router.patch('/:subtitleid',addContent)
module.exports = router;