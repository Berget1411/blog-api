const User = require('../models/user');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser !== null) return res.status(400).send('User already exists');

  const hashedPassword = await bcrypt.hash(password.toLowerCase(), 10);
  const user = new User({
    username: username.toLowerCase(),
    password: hashedPassword,
  });
  await user.save();
  res.redirect('/log-in');
};

// Add refresh tokens
