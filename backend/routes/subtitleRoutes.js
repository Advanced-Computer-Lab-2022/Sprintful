const express = require('express');
const router = express.Router();
const { addSubtitle ,addYoutubeLinkAndDescript,getSubtitle} = require('../controllers/subtitleController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post('/addSubtitle/:courseid',requireAuth, addSubtitle)
router.patch('/addVideoLink/:subtitleid',requireAuth,addYoutubeLinkAndDescript)
router.get('/:subtitleid',requireAuth, getSubtitle) // for instructor
module.exports = router;