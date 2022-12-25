const express = require('express');
const router = express.Router();
const { createAdmin,loginAdmin,getAdmin,logout }  = require('../controllers/adminController')
const {requireAuth} = require('../middleware/authMiddleware')
// const createInstructor = require('../controllers/adminController')


router.post('/',createAdmin) // This is a POST request to the /api/admin endpoint
router.post('/loginAdmin',loginAdmin)
router.get('/getAdmin',requireAuth, getAdmin)
router.get('/logout', logout)

module.exports = router;
