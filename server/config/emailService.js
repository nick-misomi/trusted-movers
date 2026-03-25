import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export const sendEmail = async (subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'trustedmovers.kenya@gmail.com',
      subject: subject,
      text: text
    })
    return true
  } catch (error) {
    console.error('Email error:', error)
    return false
  }
}