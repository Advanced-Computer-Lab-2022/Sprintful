const express = require('express');
const router = express.Router();
const { changePassword } = require('../controllers/individualTraineeController')

router.put('/changePassword', changePassword);

module.exports = router;
