import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>About Trusted Movers</h1>
          <p>
            Your dependable moving partner for homes, offices, and businesses in
            Nairobi, Kenya.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="card">
            <h2>Who We Are</h2>
            <p>
              Trusted Movers is a professional moving company offering house and
              office moving, packing, and transportation services. We are
              committed to making relocation easy, efficient, and stress-free
              for our clients.
            </p>
          </div>

          <div className="card">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide reliable, safe, and affordable moving
              solutions with a focus on professionalism, customer satisfaction,
              and careful handling of every item.
            </p>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-title">
            <h2>Why Clients Trust Us</h2>
            <p>
              We combine dependable service, timely communication, and careful
              handling to deliver a better moving experience.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3>Professional Team</h3>
              <p>
                Our team works with care, respect, and a clear focus on service
                quality.
              </p>
            </div>

            <div className="card">
              <h3>Reliable Transport</h3>
              <p>
                We support both local and longer-distance moves with dependable
                transport planning.
              </p>
            </div>

            <div className="card">
              <h3>Customer Focused</h3>
              <p>
                We aim to make every move smooth, organized, and easy for the
                client.
              </p>
            </div>
          </div>

          <div className="center mt-2">
            <Link to="/quote" className="primary-btn">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}