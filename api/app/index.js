const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const featRoutes = require('./routes/feats');
const itemRoutes = require('./routes/items');
const spellRoutes = require('./routes/spells');
const skillRoutes = require('./routes/skills');
const weaponRoutes = require('./routes/weapons');
const characterRoutes = require('./routes/characters');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const forgotRouter = require('./routes/forgot');
const resetRouter = require('./routes/reset');

app.use(bodyParser.json());
app.use('/api/feats', featRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/spells', spellRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/weapons', weaponRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/forgot', forgotRouter);
app.use('/api/reset', resetRouter);


if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, '../../reactjs/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../reactjs/build', 'index.html'));
  });
}

module.exports = app;
