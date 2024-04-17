const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

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
    type: String,
    default: () => moment().format('D-MM-YYYY'),
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
  comments: [commentSchema],
  is_published: {
    type: Boolean,
    required: true,
    default: () => true,
  },
  date: {
    type: String,
    default: () => moment().format('D-MM-YYYY'),
  },
});
module.exports = mongoose.model('posts', postSchema);
