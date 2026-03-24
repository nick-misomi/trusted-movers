import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Trusted Movers</h3>
          <p>
            Professional house and office moving services in Nairobi, Kenya.
          </p>

          <div className="social-icons">
            <a
              href="https://instagram.com/trustedmoverske/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://tiktok.com/@trustedmoverske/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="grid-1">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/quote">Request a Quote</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="copyright">
          © 2026 Trusted Movers. All rights reserved.
        </p>
      </div>
    </footer>
  )
}