const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username.toLowerCase() });

  if (user === null) return res.status(400).send('Cannot find user');

  bcrypt.compare(password.toLowerCase(), user.password, (error, isMatch) => {
    if (error) {
      return res.status(400).send('Password comparison failed');
    } else {
      if (isMatch) {
        const accessToken = jwt.sign(
          user.toJSON(),
          process.env.ACCESS_TOKEN_SECRET
        );
        res.json({ accessToken });
      } else {
        return res.status(400).send('Password is incorrect');
      }
    }
  });
};

// Add refresh tokens
