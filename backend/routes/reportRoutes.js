const express = require('express');
const router = express.Router();
const {  } = require('../controllers/reportController')
const {requireAuth} = require('../middleware/authMiddleware')

const {instructorViewReports, individualViewReports, corporateViewReports} = require('../controllers/reportController')

router.get('/instructor/:instructorid', instructorViewReports)
router.get('/individual/:individualTraineeId', individualViewReports)
router.get('/corporate/:corporateTraineeId', corporateViewReports)


module.exports = router;
