const {Router} = require('express');
const {editProfile, getUser, getJobs, search, apply, followCompany, unFollowCompany, updateProfileImage} = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.put('/', authMiddleware, editProfile);
router.get('/getuser/:id', authMiddleware, getUser);
router.get('/jobs', authMiddleware, getJobs);
router.get('/search/:key', authMiddleware, search);
router.post('/apply', authMiddleware, apply);
router.post('/follow', authMiddleware, followCompany);
router.post('/unfollow', authMiddleware, unFollowCompany);
router.post('/updateimage', authMiddleware, updateProfileImage);
module.exports = router;