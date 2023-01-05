const express = require('express');
const router = express.Router();
const { requestAccess, getAccessRequests, grantAccess }  = require('../controllers/requestAccessController')
const {requireAuth} = require('../middleware/authMiddleware')


router.post('/:traineeid/requestAccess',requireAuth, requestAccess)
router.get('/getRequestAccess', requireAuth,getAccessRequests)
router.post('/grantAccess', requireAuth,grantAccess)
module.exports = router;

