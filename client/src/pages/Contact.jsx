import React, { useState } from 'react'
fetch("/api/contact")

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const phoneNumber = '254728725422'

    const text = `
New Contact Message
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}
    `

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Send us a message directly on WhatsApp.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="grid-1">
            <div className="info-card">
              <h3>Phone</h3>
              <p>0728 725 422</p>
            </div>

            <div className="info-card">
              <h3>Email</h3>
              <p>trustedmovers.kenya@gmail.com</p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="card">
            <h2 className="mb-1">Send Us a Message</h2>

            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="primary-btn">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}