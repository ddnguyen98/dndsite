const jwt = require('jsonwebtoken');

const { Users } = require('../models');

exports.signup = async (req, res) => {
  const { name, username, password } = req.body;
  const userTest = await Users.findAll({ where: { username } });
  if (userTest.length === 0) {
    try {
      const [user] = await Users.upsert({
        username,
        name,
        password,
      }, { returning: true });
      const token = jwt.sign({ id: user.id }, process.env.SECRET);
      res.json({ token, loggedIn: true });
    } catch (e) {
      res.json({ loggedIn: false });
    }
  } else {
    res.json({ loggedIn: false });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findAll({ where: { username, password } });
  if (user.length === 0) {
    res.json({ loggedIn: false });
  } else {
    const token = jwt.sign({ id: user[0].dataValues.id }, process.env.SECRET);
    res.json({ token, loggedIn: true });
  }
};
