const express = require('express');
const router = express.Router();
const{addRefundRequest,acceptRefund,getRefundsRequests}=require('../controllers/refundRequestController')
//only for individual Trainee
router.post('/requestRefund/:traineeid/:courseid',addRefundRequest);
router.get('/AcceptRefund/:refundid/',acceptRefund);
router.get('/getRefundsRequests',getRefundsRequests)
module.exports=router;