const express = require('express');
const router = express.Router();
const{addRefundRequest,acceptRefund,getRefundsRequests}=require('../controllers/refundRequestController')
const {requireAuth} = require('../middleware/authMiddleware')

//only for individual Trainee
router.post('/requestRefund/:traineeid/:courseid', requireAuth,addRefundRequest);
router.get('/AcceptRefund/:refundid/',requireAuth,acceptRefund);
router.get('/getRefundsRequests',requireAuth,getRefundsRequests)
module.exports=router;