
const session = require('express-session');

const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'defaultsecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60, 
  },
};

module.exports = sessionConfig;