const express = require('express');
const router = express.Router();
const {requireAuth} = require('../middleware/authMiddleware')
const {addReport, changeStatus, viewReports, adminViewReports, addFollowup, getReportbyId} = require('../controllers/reportController')

router.get('/:id', getReportbyId)
router.post('/addFollowup/:id', addFollowup)
router.post('/addReport', addReport);
router.get('/getReports/:id', viewReports)
router.post('/getReportsAdmin', adminViewReports)
router.put('/changeStatus', changeStatus)

module.exports = router;
