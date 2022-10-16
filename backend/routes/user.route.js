const {Router} = require('express');
const {editProfile, getUser, getJobs, search} = require('../controllers/user.controller')
const router = Router();

router.put('/', editProfile);
router.get('/getuser/:id', getUser);
router.get('/jobs', getJobs);
router.get('/search/:key', search);
module.exports = router;