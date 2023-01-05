const express = require('express');
const router = express.Router();
const { requestAccess, getAccessRequests, grantAccess }  = require('../controllers/requestAccessController')


router.post('/:traineeid/requestAccess', requestAccess)
router.get('/getRequestAccess',getAccessRequests)
router.post('/grantAccess',grantAccess)
module.exports = router;

