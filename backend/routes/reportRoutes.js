const express = require('express');
const router = express.Router();
const {requireAuth} = require('../middleware/authMiddleware')
const {addReport, instructorViewReports, individualViewReports, corporateViewReports, adminViewReports, getReportStatus} = require('../controllers/reportController')

router.post('/addReport', addReport);
router.get('/instructor/:instructorid', instructorViewReports)
router.get('/individual/:individualTraineeId', individualViewReports)
router.get('/corporate/:corporateTraineeId', corporateViewReports)
router.get('/admin', adminViewReports)
router.get('/status/:reportid', getReportStatus)


module.exports = router;
