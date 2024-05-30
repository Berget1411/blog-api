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
      return res
        .status(400)
        .send({ auth: false, message: 'Password comparison failed' });
    } else {
      if (isMatch) {
        const accessToken = jwt.sign(
          user.toJSON(),
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: 1000 }
        );
        res.json({
          auth: true,
          accessToken,
          result: { username, is_admin: user.is_admin },
        });
      } else {
        return res.status(400).send({
          auth: false,
          message: 'Wrong username/password combination!',
        });
      }
    }
  });
};

// Add refresh tokens
