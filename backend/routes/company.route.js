const {Router} = require('express');
const { createJobPost, getProfiles, getJobs } = require('../controllers/company.controller')
const router = Router();

router.post('/', createJobPost);
router.post('/applicants', getProfiles);
router.post('/jobs', getJobs)
module.exports = router;