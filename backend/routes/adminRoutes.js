const express = require('express');
const router = express.Router();
const { createAdmin,loginAdmin,getAdmin,logout, addCorporate, changePassword, getAdminProfile, getStats }  = require('../controllers/adminController')
const {requireAuth} = require('../middleware/authMiddleware')
// const createInstructor = require('../controllers/adminController')


router.post('/createAdmin',createAdmin) // This is a POST request to the /api/admin endpoint
router.post('/loginAdmin',loginAdmin)
router.get('/getAdmin',requireAuth, getAdmin)
router.get('/logout', logout)
router.put('/changePassword', changePassword)
router.get('/profile', getAdminProfile)
router.get('/getStats', getStats)
router.post('/addCorporate', addCorporate)
module.exports = router;
