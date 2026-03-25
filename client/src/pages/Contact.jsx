import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      )

      const data = await response.json()

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        alert(data.message || 'Failed to send message')
      }

    } catch (error) {
      console.error(error)
      alert('Server error. Please try again later.')
    }
  }

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Send us a message directly.</p>
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
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="primary-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}