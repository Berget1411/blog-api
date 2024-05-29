const Post = require('../models/post');

const convertString = (str) => str.replaceAll('-', ' ').toLowerCase();

const comments_get = async (req, res) => {
  const postId = req.params.postId;
  res.json(await Post.findById(postId));
};

const comments_post = async (req, res) => {
  const { comment, username, postId } = req.body;
  await Post.updateOne(
    { _id: postId },
    { $push: { comments: { comment, username } } }
  );

  res.json(await Post.findById(postId));
};

const comments_delete = async (req, res) => {
  const { postId, commentId } = req.body;
  await Post.updateOne(
    { _id: postId },
    { $pull: { comments: { _id: commentId } } }
  );
  res.json(await Post.findById(postId).comments);
};

const comments_put = async (req, res) => {
  const { postId, commentId, updatedComment } = req.body;
  await Post.updateOne(
    { _id: postId, 'comments._id': commentId },
    { $set: { 'comments.$.comment': updatedComment } }
  );
  res.json(await Post.findById(postId).comments);
};

module.exports = {
  comments_get,
  comments_post,
  comments_delete,
  comments_put,
};
