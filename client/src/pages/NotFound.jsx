import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/" className="primary-btn">Back Home</Link>
      </div>
    </section>
  )
}
