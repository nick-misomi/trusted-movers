import { sendEmail } from '../config/emailService.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

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
        message: 'Message received but email failed'
      });
    }

    return res.status(200).json({
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
};