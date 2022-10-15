const {Router} = require('express');
const { createJobPost } = require('../controllers/company.controller')
const router = Router();

router.post('/', createJobPost);

module.exports = router;