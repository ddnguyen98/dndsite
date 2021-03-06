const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const featRoutes = require('./routes/feats');
const itemRoutes = require('./routes/items');
const spellRoutes = require('./routes/spells');
const skillRoutes = require('./routes/skills');
const weaponRoutes = require('./routes/weapons');
const characterRoutes = require('./routes/characters');

app.use(bodyParser.json());
app.use('/api/feats', featRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/spells', spellRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/weapons', weaponRoutes);
app.use('/api/characters', characterRoutes);


if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, '../../reactjs/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../reactjs/build', 'index.html'));
  });
}

module.exports = app;
