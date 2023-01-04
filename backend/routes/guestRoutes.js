const express = require('express');
const router = express.Router();
const {signUp,login, forgotPassword, resetPassword, resetPassword2} = require('../controllers/guestController');

router.post('/signUp', signUp);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.get('/resetPassword/:id/:token', resetPassword);
router.post('/resetPassword/:id/:token', resetPassword2);
//router.put('/', filterCourse) // This is a PUT request to the /api/guest endpoint

module.exports = router;