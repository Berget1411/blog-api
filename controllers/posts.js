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
  const id = req.params.id;
  const { title, text, comments, is_published } = req.body;
  await Post.updateOne(
    { _id: id },
    {
      $set: {
        title: title,
        text: text,
        comments: comments,
        is_published: is_published,
      },
    }
  );
  res.json(await Post.find());
};

const posts_delete = async (req, res) => {
  const id = req.params.id;
  await Post.findByIdAndDelete(id);
  res.json(await Post.find());
};

module.exports = { posts_get, posts_post, posts_put, posts_delete };
