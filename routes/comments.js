const router = require('express').Router();
const authenticationToken = require('../middleware/authentication');
const {
  comments_get,
  comments_post,
  comments_delete,
  comments_put,
} = require('../controllers/comments');

router.get('/:postTitle', authenticationToken, comments_get);
router.post('/', authenticationToken, comments_post);
router.delete('/', authenticationToken, comments_delete);
router.put('/', authenticationToken, comments_put);

module.exports = router;
