import nodemailer from 'nodemailer';

export const sendEmail = async (subject, text) => {
  // Create a fresh transporter for each invocation
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Add timeouts to prevent hanging
    connectionTimeout: 10000,      // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || 'trustedmovers.kenya@gmail.com',
      subject: subject,
      text: text,
    });
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email error details:', error);
    return false;
  } finally {
    // Close the transporter to free resources
    transporter.close();
  }
};