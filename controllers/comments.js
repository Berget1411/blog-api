const Post = require('../models/post');

const comments_get = async (req, res) => {
  const postId = req.params.postId;
  res.json(await Post.findById(postId));
};

const comments_post = async (req, res) => {
  const postId = req.params.postId;
  const { comment, name } = req.body;
  await Post.updateOne(
    { _id: postId },
    { $push: { comments: { comment, name } } }
  );

  res.json(await Post.findById(postId));
};

const comments_delete = async (req, res) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  await Post.updateOne(
    { _id: postId },
    { $pull: { comments: { _id: commentId } } }
  );
  res.json(Post.findById(postId).comments);
};

module.exports = { comments_get, comments_post, comments_delete };
