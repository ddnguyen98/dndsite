const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { SendError, throwError, throwIf } = require('../utils/errorHandling');
const mailer = require('../utils/mailer');
const { Users, Sequelize } = require('../models');

exports.signup = async (req, res) => {
  const {
    email, username, password,
  } = req.body;
  try {
    const user = await Users.create({
      username,
      email,
      password,
    }, { returning: true })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    const token = jwt.sign({ id: user.id }, process.env.secret);
    res.status(201).json({ token, loggedInState: true });
  } catch (e) {
    SendError(res, e);
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ where: { email } })
      .then(throwIf((r) => !r, 400, 'User Not Found'),
        throwError(500, 'Sequelize error'));
    const buf = crypto.randomBytes(20);
    const token = buf.toString('hex');

    user.uppdate({ reset_password: token, reset_expires: Date.now() + (1000 * 60 * 60 * 24) });

    const data = {
      tp: user.email,
      from: 'capstone_test@yourcode.app',
      template: 'forgot',
      subject: 'Password help has arrived!',
      ctx: {
        url: `http://localhost:3000/auth/reset_password?token=${token}`,
        name: user.name.split(' ')[0],
      },
    };
    await mailer.sendMail(data).catch(throwError(500, 'Mail error'));
    res.json({
      message: 'Kindly check your email for further instructions',
    });
  } catch (e) {
    SendError(res, e);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword, verifyPassword } = req.body;
    const user = await Users.findOne({
      reset_password: token,
      reset_expires: { $gt: Date.now() },
    }).then(
      throwIf((r) => !r, 400, 'Password reset token invalid or expired'),
      throwError(500, 'Sequlize error'),
    );

    if (newPassword === verifyPassword) {
      user.password = newPassword;
      user.reset_password = undefined;
      user.reset_expires = undefined;
      await user.save();
      const data = {
        to: user.email,
        from: 'capstone_test@yourcode.app',
        template: 'reset',
        subject: 'Password Reset Confirmation',
        ctx: {
          name: user.name.split(' ')[0],
        },
      };

      await mailer.sendMail(data).catch(throwError(500, 'Mail error'));
      res.json({ message: 'Password reset' });
    } else {
      throwError(422, 'passwords do not match');
    }
  } catch (e) {
    SendError(res, e);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ where: { username, password } })
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    const token = jwt.sign({ id: user.dataValues.id }, process.env.secret);
    res.status(200).json({ token, loggedInState: true });
  } catch (e) {
    e.message = 'Invalid username or password';
    SendError(res, e);
  }
};
