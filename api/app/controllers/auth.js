const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { SendError, throwError, throwIf } = require('../utils/errorHandling');
const mailer = require('../utils/mailer');
const { Users, Sequelize } = require('../models');


// Signs user up by creating user and adding logged in state + token
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

// Sends email to give password reset link
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ where: { email } })
      .then(throwIf((r) => !r, 400, 'User Not Found'));
    const buf = crypto.randomBytes(20);
    const token = buf.toString('hex');
    const reset = Date.now() + (1000 * 60 * 60 * 24);
    await Users.update({ reset_password: token, reset_expires: reset },
      { where: { email } });

    const data = {
      to: user.email,
      from: 'capstone_test@yourcode.app',
      template: 'forgot',
      subject: 'Password help has arrived!',
      ctx: {
        url: `http://localhost:3000/reset?token=${token}`,
        name: user.username,
      },
    };
    await mailer.sendMail(data).catch(throwError(500, 'Mail error'));
    res.json({
      message: 'Kindly check your email for further instructions',
      loggedInState: false,
    });
  } catch (e) {
    SendError(res, e);
  }
};

// Emails creator with message from sender
exports.emailMe = async (req, res) => {
  try {
    const { email, message } = req.body;
    const data = {
      to: 'shamze33@gmail.com',
      from: 'capstone_test@yourcode.app',
      template: 'contact',
      subject: 'User Message',
      ctx: {
        message,
        email,
      },
    };
    await mailer.sendMail(data).catch(throwError(500, 'Mail error'));
    res.json({
      message: 'Message Sent',
    });
  } catch (e) {
    SendError(res, e);
  }
};

// Resets password from link gotten in email
exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword, verifyPassword } = req.body;
    const user = await Users.findOne({
      where: {
        reset_password: token,
      },
    }).then(
      throwIf((r) => !r, 400, 'Password reset token invalid or expired'),
      throwError(500, 'Sequlize error'),
    );

    if (newPassword === verifyPassword) {
      await Users.update({
        password: newPassword,
        reset_password: undefined,
        reset_expires: undefined,
      }, { where: { email: user.dataValues.email } });

      const data = {
        to: user.dataValues.email,
        from: 'capstone_test@yourcode.app',
        template: 'reset',
        subject: 'Password Reset Confirmation',
        ctx: {
          name: user.dataValues.username,
        },
      };

      await mailer.sendMail(data).catch(throwError(500, 'Mail error'));
      const tokenn = jwt.sign({ id: user.dataValues.id }, process.env.secret);
      res.json({ token: tokenn, loggedInState: true });
    } else {
      throwError(422, 'Passwords do not match');
    }
  } catch (e) {
    SendError(res, e);
  }
};

// Logs user in and sets state
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
