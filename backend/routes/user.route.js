const {Router} = require('express');
const {editProfile, getUser, getJobs, search, apply, followCompany} = require('../controllers/user.controller')
const router = Router();

router.put('/', editProfile);
router.get('/getuser/:id', getUser);
router.get('/jobs', getJobs);
router.get('/search/:key', search);
router.post('/apply', apply);
router.post('/follow', followCompany);

module.exports = router;