const Post = require('../models/post');

const posts_get = async (req, res) => {
  res.json(await Post.find());
};

const posts_post = async (req, res) => {
  const { title, category, text, image } = req.body;
  const newPost = new Post({
    title,
    category,
    text,
    image,
  });
  console.log(newPost);
  await newPost.save();
  res.json(await Post.find());
};

const posts_put = async (req, res) => {
  const { postId, title, category, text, image } = req.body;
  await Post.updateOne(
    { _id: postId },
    {
      $set: {
        title,
        category,
        text,
        image,
      },
    }
  );
  res.json(await Post.findById(postId));
};

const posts_delete = async (req, res) => {
  const { postId } = req.body;
  await Post.findByIdAndDelete(postId);
  res.json(await Post.findById(postId));
};

module.exports = { posts_get, posts_post, posts_put, posts_delete };
