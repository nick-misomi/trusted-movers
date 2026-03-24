import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'House Moving',
      description:
        'We help families move safely and smoothly across Nairobi and beyond, handling furniture, electronics, and household items with care.'
    },
    {
      title: 'Office Relocation',
      description:
        'We provide organized office moving services to reduce downtime and make business transitions fast, secure, and stress-free.'
    },
    {
      title: 'Packing Services',
      description:
        'Our team offers professional packing using quality materials to protect fragile, valuable, and everyday items during transport.'
    },
    {
      title: 'Loading & Offloading',
      description:
        'We handle heavy lifting, loading, and unloading efficiently so your move is safer, faster, and less exhausting.'
    },
    {
      title: 'Furniture Transport',
      description:
        'From single items to full-room sets, we transport furniture securely and deliver it in excellent condition.'
    },
    {
      title: 'Local & Upcountry Moves',
      description:
        'Whether you are moving within Nairobi or to another town, we provide dependable transportation and timely delivery.'
    }
  ]

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Reliable moving solutions designed to make your relocation simple,
            safe, and stress-free.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
            <p>
              Trusted Movers provides professional moving services for homes,
              offices, and businesses in Nairobi, Kenya.
            </p>
          </div>

          <div className="grid-3 services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-col">
          <div className="card">
            <h2>Why Choose Trusted Movers?</h2>
            <p>
              We focus on professionalism, careful handling, and dependable
              service. Our goal is to make every move easier for our clients
              with well-organized transport and support at every stage.
            </p>
          </div>

          <div className="card">
            <h2>Need a Custom Moving Plan?</h2>
            <p>
              Every move is different. Contact us for a personalized quote based
              on your location, the size of your move, and any special handling
              requirements.
            </p>
            <div className="hero-actions">
              <Link to="/quote" className="primary-btn">
                Request a Quote
              </Link>
              <Link to="/contact" className="secondary-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}