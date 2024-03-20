const router = require('express').Router();
const login_post = require('../controllers/login');

router.post('/', login_post);

module.exports = router;
