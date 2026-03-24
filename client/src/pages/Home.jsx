import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="badge">Trusted Moving Services in Nairobi</span>
            <h1>Safe, Fast and Reliable Moving Services You Can Trust</h1>
            <p>
              Trusted Movers offers professional house moving, office
              relocation, packing, and transportation services across Nairobi
              and beyond.
            </p>

            <div className="hero-actions">
              <Link to="/quote" className="primary-btn">
                Request a Quote
              </Link>
              <Link to="/services" className="secondary-btn">
                View Services
              </Link>
            </div>
          </div>

          <div className="card">
            <h2>Why Choose Us?</h2>
            <ul className="feature-list">
              <li>Professional and careful handling of your items</li>
              <li>Reliable local and upcountry moving support</li>
              <li>Affordable and transparent pricing</li>
              <li>Fast response and easy booking process</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Services</h2>
            <p>
              We make moving simple with dependable solutions for homes,
              offices, and businesses.
            </p>
          </div>

          <div className="grid-3 services-grid">
            <div className="service-card">
              <h3>House Moving</h3>
              <p>
                Smooth and secure relocation for apartments, homes, and family
                households.
              </p>
            </div>

            <div className="service-card">
              <h3>Office Relocation</h3>
              <p>
                Organized moving support for businesses with minimal disruption.
              </p>
            </div>

            <div className="service-card">
              <h3>Packing Services</h3>
              <p>
                Professional packing to protect fragile, valuable, and everyday
                items.
              </p>
            </div>
          </div>

          <div className="center mt-2">
            <Link to="/services" className="primary-btn">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-col">
          <div className="card">
            <h2>Moving Made Easy</h2>
            <p>
              Whether you are moving house, changing office location, or need
              help with packing and transport, Trusted Movers is here to make
              the process easier and less stressful.
            </p>
          </div>

          <div className="card">
            <h2>Need an Estimate?</h2>
            <p>
              Request a quote today and let us help you plan your move with a
              service package that suits your needs.
            </p>
            <div className="hero-actions">
              <Link to="/quote" className="primary-btn">
                Get a Quote
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