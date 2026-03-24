export default function ContactInfoCard({ label, value }) {
  return (
    <div className="info-card">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  )
}
