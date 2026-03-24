import React, { useState } from 'react'

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    moveType: '',
    fromLocation: '',
    toLocation: '',
    moveDate: '',
    details: ''
  })

  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok) {
        setResponseMessage('Quote request submitted successfully!')
        setFormData({
          name: '',
          phone: '',
          email: '',
          moveType: '',
          fromLocation: '',
          toLocation: '',
          moveDate: '',
          details: ''
        })
      } else {
        setResponseMessage('Something went wrong.')
      }
    } catch (error) {
      setResponseMessage('Server error.')
    }

    setLoading(false)
  }

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Request a Quote</h1>
          <p>Fill in your moving details and we will get back to you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card large-form">
            <h2 className="mb-1">Get Your Moving Estimate</h2>

            {responseMessage && (
              <p className="mb-1 text-primary">{responseMessage}</p>
            )}

            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
              </div>

              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />

              <div className="form-row">
                <select name="moveType" onChange={handleChange} required>
                  <option value="">Select Move Type</option>
                  <option value="House Moving">House Moving</option>
                  <option value="Office Relocation">Office Relocation</option>
                </select>

                <input type="date" name="moveDate" onChange={handleChange} required />
              </div>

              <div className="form-row">
                <input type="text" name="fromLocation" placeholder="Moving From" onChange={handleChange} required />
                <input type="text" name="toLocation" placeholder="Moving To" onChange={handleChange} required />
              </div>

              <textarea name="details" placeholder="Additional Details" onChange={handleChange}></textarea>

              <button type="submit" className="primary-btn">
                {loading ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}