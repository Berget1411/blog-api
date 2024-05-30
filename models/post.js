const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const commenter = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
  },
  username: {
    type: String,
    minLength: 1,
    maxLength: 20,
  },
  date: {
    type: Date,
    default: () => new Date(),
  },
});
const postSchema = new Schema({
  title: {
    type: String,
    minLength: 5,
    maxLength: 50,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    minLength: 20,
    required: true,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
    default: () => 'ludvig',
  },
  comments: {
    type: [commentSchema],
    default: () => [],
  },
  is_published: {
    type: Boolean,
    required: true,
    default: () => true,
  },
  likes: [commenter],
  date: {
    type: Date,
    default: () => new Date(),
  },
});
module.exports = mongoose.model('posts', postSchema);
