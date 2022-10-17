const {Router} = require('express');
const { createJobPost, getProfiles, getJobs, getCompanies } = require('../controllers/company.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.post('/', authMiddleware, createJobPost);
router.post('/applicants', authMiddleware, getProfiles);
router.post('/jobs', authMiddleware, getJobs);
router.get('/companies', authMiddleware, getCompanies);

module.exports = router;