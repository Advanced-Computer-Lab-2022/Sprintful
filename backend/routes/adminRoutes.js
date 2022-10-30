const express = require('express');
const router = express.Router();
const { createAdmin,loginAdmin,getAdmin }  = require('../controllers/adminController')
const {protect} = require('../middleware/authMiddleware')
// const createInstructor = require('../controllers/adminController')


router.post('/', createAdmin) // This is a POST request to the /api/admin endpoint
router.post('/loginAdmin',loginAdmin)
router.get('/getAdmin',protect, getAdmin)

module.exports = router;
