const router = require('express').Router();
const {
  posts_get,
  posts_post,
  posts_put,
  posts_delete,
} = require('../controllers/posts');

router.get('/', posts_get);
router.post('/', posts_post);
router.put('/:id', posts_put);
router.delete('/:id', posts_delete);

module.exports = router;
