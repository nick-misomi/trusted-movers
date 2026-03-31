import { sendEmail } from '../config/emailService.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const emailText = `
New Contact Message

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`;

    const emailSent = await sendEmail(
      'New Contact Message - Trusted Movers',
      emailText
    );

    if (!emailSent) {
      return res.status(500).json({
        message: 'Message saved but email failed to send'
      });
    }

    res.status(201).json({
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      error: error.message
    });
  }
};