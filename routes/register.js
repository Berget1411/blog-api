const router = require('express').Router();
const register_post = require('../controllers/register');

router.post('/', register_post);

module.exports = router;
