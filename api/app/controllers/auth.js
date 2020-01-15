const jwt = require('jsonwebtoken');

const { Users } = require('../models');

exports.signup = async (req, res) => {
  const { email, username, password } = req.body;
  const userTest = await Users.findAll({ where: { username } });
  if (userTest.length === 0) {
    try {
      const [user] = await Users.upsert({
        username,
        email,
        password,
      }, { returning: true });
      const token = jwt.sign({ id: user.id }, process.env.secret);
      res.json({ data: { token, loggedInState: true } });
    } catch (e) {
      res.json({ data: { loggedInState: false } });
    }
  } else {
    res.json({ data: { loggedInState: false } });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findAll({ where: { username, password } });
  if (user.length === 0) {
    res.json({ data: { loggedInState: false } });
  } else {
    const token = jwt.sign({ id: user[0].dataValues.id }, process.env.secret);
    res.json({ data: { token, loggedInState: true } });
  }
};
