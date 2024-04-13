const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'tunbosunde2019@gmail.com',
//     pass: 'rziw selz hfpe vcep',
//   },
// });

// var mailOptions = {
//   from: 'tunbosunde2019@gmail.com',
//   to: 'tubbysparks20@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'This is the email sent for learning!',
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Tubby Sparks <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Sendgrid
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USERNAME,
          pass: process.env.GMAIL_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    // 2) Define email options
    // const mailOptions = {
    //   from: this.from,
    //   to: this.to,
    //   subject: subject,
    //   html: html,
    //   text: htmlToText.fromString(html),
    // };

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token, (valid for only 10 minutes)'
    );
  }
};
