const {Router} = require('express');
const { createJobPost, getProfiles, getJobs, getCompanies } = require('../controllers/company.controller');
const router = Router();

router.post('/', createJobPost);
router.post('/applicants', getProfiles);
router.post('/jobs', getJobs);
router.get('/companies', getCompanies);

module.exports = router;