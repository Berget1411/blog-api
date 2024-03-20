const Author = require('../models/author');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const author = await Author.findOne({ username, password });

  if (user === null) return res.status(400).send('Cannot find user');

  const accessToken = jwt.sign(
    author.toJSON(),
    process.env.ACCESS_TOKEN_SECRET
  );
  res.json({ accessToken });
};
