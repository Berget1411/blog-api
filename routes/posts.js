const router = require('express').Router();
const authenticationToken = require('../middleware/authentication');
const {
  posts_get,
  posts_post,
  posts_put,
  posts_delete,
} = require('../controllers/posts');

router.get('/', posts_get);
router.post('/', authenticationToken, posts_post);
router.put('/:id', authenticationToken, posts_put);
router.delete('/', authenticationToken, posts_delete);

module.exports = router;
