const express = require('express');
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts');

require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

app.use('/posts', postsRouter);
