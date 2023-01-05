const express = require('express');
const router = express.Router();
const {requireAuth} = require('../middleware/authMiddleware')
const {addReport, changeStatus, viewReports, adminViewReports, addFollowup, getReportbyId} = require('../controllers/reportController')

router.get('/:id',requireAuth, getReportbyId)
router.post('/addFollowup/:id',requireAuth, addFollowup)
router.post('/addReport', requireAuth,addReport);
router.get('/getReports/:id',requireAuth, viewReports)
router.post('/getReportsAdmin',requireAuth, adminViewReports)
router.put('/changeStatus', requireAuth,changeStatus)

module.exports = router;
