const express = require('express');
const router = express.Router();
const{addRefundRequest}=require('../controllers/refundRequestController')
//only for individual Trainee
router.post('/requestRefund/:traineeid/:courseid',addRefundRequest);
module.exports=router;