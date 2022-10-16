const {Router} = require('express');
const {editProfile, getUser, getJobs, search, apply} = require('../controllers/user.controller')
const router = Router();

router.put('/', editProfile);
router.get('/getuser/:id', getUser);
router.get('/jobs', getJobs);
router.get('/search/:key', search);
router.post('/apply', apply);
module.exports = router;