const {Router} = require('express');
const {editProfile, getUser, getJobs} = require('../controllers/user.controller')
const router = Router();

router.put('/', editProfile);
router.get('/getuser/:id', getUser);
router.get('/jobs', getJobs);
module.exports = router;