const express = require('express');
const router = express.Router();
const { addReport } = require('../controllers/reportController')
const {requireAuth} = require('../middleware/authMiddleware')

router.post('/addReport', addReport);

module.exports = router;
