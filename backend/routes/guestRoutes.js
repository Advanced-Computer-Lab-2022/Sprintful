const express = require('express');
const router = express.Router();
const {signUp} = require('../controllers/guestController');

router.post('/signUp', signUp);
//router.put('/', filterCourse) // This is a PUT request to the /api/guest endpoint

module.exports = router;