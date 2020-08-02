const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cd9ea5839808d2",
    pass: "ee9cee2e9f144d"
  }
});
