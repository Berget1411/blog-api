const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const authenticationToken = require('./middleware/authentication');
const User = require('./models/user');

require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
