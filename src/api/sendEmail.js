import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-email-password' // Your email password or app password
  }
});

export const sendEmail = (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'lessusbrian7@gmail.com',
    subject: `New message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
};
