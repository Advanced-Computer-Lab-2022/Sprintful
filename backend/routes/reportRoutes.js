const express = require('express');
const router = express.Router();
const {requireAuth} = require('../middleware/authMiddleware')
const {addReport, changeStatus, viewReports, adminViewReports, getReportStatus, getReportbyId} = require('../controllers/reportController')

router.post('/addReport', addReport);
router.get('/:id', getReportbyId)
router.get('/getReports/:id', viewReports)
router.post('/getReportsAdmin', adminViewReports)
router.get('/status/:reportid', getReportStatus)
router.put('/changeStatus', changeStatus)

module.exports = router;
