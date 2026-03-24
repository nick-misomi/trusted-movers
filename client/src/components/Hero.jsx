import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div>
          <span className="badge">Trusted Moving Services in Nairobi</span>
          <h1>Reliable moves. Smooth transitions. Zero stress</h1>
          <p>
            We help families and businesses move smoothly with reliable packing,
            transport, loading, unloading and relocation support.
          </p>
          <div className="hero-actions">
            <Link to="/quote" className="primary-btn">Request a Quote</Link>
            <a
              href="https://wa.me/254728725422?text=Hello%20Trusted%20Movers%2C%20I%20need%20a%20moving%20quote."
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Professional packing</li>
            <li>House and office moving</li>
            <li>Reliable transport</li>
            <li>Affordable pricing</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
