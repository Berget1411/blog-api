const router = require('express').Router();
const authenticationToken = require('../middleware/authentication');
const {
  comments_get,
  comments_post,

  comments_delete,
} = require('../controllers/comments');

router.get('/:postId', authenticationToken, comments_get);
router.post('/:postId', authenticationToken, comments_post);
router.delete('/:postId/:commentId', authenticationToken, comments_delete);

module.exports = router;
