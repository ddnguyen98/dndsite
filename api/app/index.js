const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, '../../3headeddragon/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../3headeddragon/build', 'index.html'));
  });
}

module.exports = app;
