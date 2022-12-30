const express = require('express');
const router = express.Router();
const{addRefundRequest}=require('../controllers/refundRequestController')

router.post('/requestRefund/:traineeid/:courseid',addRefundRequest);