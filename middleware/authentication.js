const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  const userHeader = req.headers['authorization'];
  const token = userHeader && userHeader.split(' ')[1];

  if (token == null) return res.send('No token found');
  console.log(token);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.json({ auth: false, message: 'Failed authentication' });
    req.user = user;
    next();
  });
};
