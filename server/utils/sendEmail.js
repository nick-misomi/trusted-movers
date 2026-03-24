import nodemailer from 'nodemailer'

const sendEmail = async (subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'trustedmovers.kenya@gmail.com',
      pass: 'wnvr yxvl tkog irvp'
    }
  })

  const mailOptions = {
    from: 'trustedmovers.kenya@gmail.com',
    to: 'trustedmovers.kenya@gmail.com',
    subject: subject,
    text: text
  }

  await transporter.sendMail(mailOptions)
}

export default sendEmail