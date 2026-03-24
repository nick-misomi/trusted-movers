import Quote from '../models/Quote.js'

export const createQuote = async (req, res) => {
  try {
    const { name, phone, email, moveType, fromLocation, toLocation, moveDate, details } = req.body

    if (!name || !phone || !email || !moveType || !fromLocation || !toLocation || !moveDate) {
      return res.status(400).json({ message: 'Please fill in all required fields.' })
    }

    const quote = await Quote.create({
      name,
      phone,
      email,
      moveType,
      fromLocation,
      toLocation,
      moveDate,
      details
    })

    res.status(201).json({ message: 'Quote request saved successfully.', quote })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}
