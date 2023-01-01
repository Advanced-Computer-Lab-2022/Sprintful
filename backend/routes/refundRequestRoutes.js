const express = require('express');
const router = express.Router();
const{addRefundRequest,acceptRefund}=require('../controllers/refundRequestController')
//only for individual Trainee
router.post('/requestRefund/:traineeid/:courseid',addRefundRequest);
router.post('/AcceptRefund/:refundid/',acceptRefund);
module.exports=router;