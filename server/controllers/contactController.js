import Contact from '../models/Contact.js'
import { sendEmail } from '../config/emailService.js'

export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()

    const emailText = `
New Contact Message

Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Message: ${req.body.message}
`

    const emailSent = await sendEmail(
      'New Contact Message - Trusted Movers',
      emailText
    )

    if (!emailSent) {
      return res.status(500).json({
        message: 'Message saved but email failed to send'
      })
    }

    res.status(201).json({
      message: 'Message sent successfully'
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}