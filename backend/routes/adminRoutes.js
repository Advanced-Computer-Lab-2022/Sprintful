const express = require('express');
const router = express.Router();
const { createAdmin } = require('../controllers/adminController')

router.post('/', createAdmin) // This is a POST request to the /api/admin endpoint


module.exports = router;