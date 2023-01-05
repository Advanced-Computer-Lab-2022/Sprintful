const express = require('express');
const router = express.Router();
const { insertATrainee,addwatchedvideo,checkifVideoWatched} = require('../controllers/CorporateWatchedVideosCont')
const {requireAuth} = require('../middleware/authMiddleware')


router.post('/insertATrainee/:traineeid',insertATrainee);
router.patch('/addwatchedvideo/:traineeid',addwatchedvideo);
router.post('/checkifVideoWatched/:traineeid',checkifVideoWatched);










module.exports = router;