const express = require('express');
const router = express.Router();
const {signUp,login} = require('../controllers/guestController');

router.post('/signUp', signUp);
router.post('/login', login);
//router.put('/', filterCourse) // This is a PUT request to the /api/guest endpoint

module.exports = router;