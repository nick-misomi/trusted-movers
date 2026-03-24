export default function ServiceCard({ title, description }) {
  return (
    <div className="grid-3 services-grid">
        <div className="service-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}