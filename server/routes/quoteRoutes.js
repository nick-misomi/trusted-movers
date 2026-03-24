import express from 'express'
import sendEmail from '../utils/sendEmail.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      moveType,
      fromLocation,
      toLocation,
      moveDate,
      details
    } = req.body

    const message = `
New Quote Request

Name: ${name}
Phone: ${phone}
Email: ${email}
Move Type: ${moveType}
From: ${fromLocation}
To: ${toLocation}
Date: ${moveDate}
Details: ${details}
    `

    await sendEmail('New Moving Quote Request', message)

    res.status(200).json({ message: 'Quote request sent successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error sending quote request' })
  }
})

export default router