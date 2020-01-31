const nodemailer = require('nodemailer');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const { pugEngine } = require('nodemailer-pug-engine');

const mailer = nodemailer.createTransport(
  sparkPostTransport({
    sparkPostApiKey: '2d915d85361eba387bc2631dcb005576d491a09f',
  }),
);

mailer.use('compile', pugEngine({ templateDir: `${__dirname}/../emailTemplates`, pretty: true }));

module.exports = mailer;
