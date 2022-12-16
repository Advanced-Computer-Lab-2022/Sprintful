const express = require('express');
const router = express.Router();
const { addSubtitle ,addYoutubeLinkAndDescript,getSubtitle} = require('../controllers/subtitleController')
//const {requireAuth} = require('../middleware/authMiddleware')

router.post('/addSubtitle/:courseid', addSubtitle)
router.patch('/addVideoLink/:subtitleid',addYoutubeLinkAndDescript)
router.get('/:subtitleid', getSubtitle) // for instructor
module.exports = router;