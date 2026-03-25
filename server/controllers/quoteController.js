import Quote from '../models/Quote.js'
import { sendEmail } from '../config/emailService.js'

export const createQuote = async (req, res) => {
  try {
    const quote = new Quote(req.body)
    await quote.save()

    const emailText = `
New Quote Request

Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Move From: ${req.body.from}
Move To: ${req.body.to}
Move Date: ${req.body.date}
Message: ${req.body.message}
`

    const emailSent = await sendEmail(
      'New Quote Request - Trusted Movers',
      emailText
    )

    if (!emailSent) {
      return res.status(500).json({
        message: 'Quote saved but email failed'
      })
    }

    res.status(201).json({
      message: 'Quote submitted successfully'
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}