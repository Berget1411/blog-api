const express = require('express');
const mongoose = require('mongoose');
const Author = require('./models/author');
const Post = require('./models/post');
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT))
  .catch((err) => console.log(err));
