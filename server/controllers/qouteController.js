import { sendEmail } from '../config/emailService.js';

export const createQuote = async (req, res) => {
  try {
    const { name, email, phone, from, to, date, message } = req.body;

    const emailText = `
New Quote Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Move From: ${from}
Move To: ${to}
Move Date: ${date}
Message: ${message}
`;

    const emailSent = await sendEmail(
      'New Quote Request - Trusted Movers',
      emailText
    );

    if (!emailSent) {
      return res.status(500).json({
        message: 'Quote request received but email failed to send'
      });
    }

    res.status(201).json({
      message: 'Quote submitted successfully'
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({
      error: error.message
    });
  }
};