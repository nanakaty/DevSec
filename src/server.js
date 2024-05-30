const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail', // ou utilisez un autre service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

app.post('/send-email', (req, res) => {
  const { email } = req.body;
  const activationCode = Math.floor(100000 + Math.random() * 900000); // Générer un code d'activation à 6 chiffres

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Activation Code',
    text: `Your activation code is ${activationCode}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
