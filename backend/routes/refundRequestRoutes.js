const express = require('express');
const router = express.Router();
const{addRefundRequest}=require('../controllers/refundRequestContoller')

router.post('/requestRefund/:traineeid/:courseid',addRefundRequest);