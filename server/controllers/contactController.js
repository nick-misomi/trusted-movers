import Contact from '../models/Contact.js'

export const createContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    const contact = await Contact.create({ name, phone, email, message })
    res.status(201).json({ message: 'Contact message saved successfully.', contact })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}
