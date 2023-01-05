const express = require('express');
const router = express.Router();
const { createAdmin,loginAdmin,getAdmin,logout, addCorporate, changePassword, getAdminProfile, getStats }  = require('../controllers/adminController')
const {requireAuth} = require('../middleware/authMiddleware')
// const createInstructor = require('../controllers/adminController')


router.post('/createAdmin',requireAuth,createAdmin) // This is a POST request to the /api/admin endpoint
router.post('/loginAdmin',requireAuth,loginAdmin)
router.get('/getAdmin',requireAuth, getAdmin)
router.get('/logout',requireAuth, logout)
router.put('/changePassword',requireAuth, changePassword)
router.get('/profile',requireAuth, getAdminProfile)
router.get('/getStats',requireAuth, getStats)
router.post('/addCorporate', requireAuth,addCorporate)
module.exports = router;
