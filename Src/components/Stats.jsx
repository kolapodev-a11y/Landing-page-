import './Stats.css'

const data = [
  { value: '150+', label: 'Projects Delivered',      icon: '🚀' },
  { value: '98%',  label: 'Client Satisfaction',     icon: '⭐' },
  { value: '12+',  label: 'Years of Experience',     icon: '📅' },
  { value: '40+',  label: 'Industries Served',       icon: '🌐' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {data.map(({ value, label, icon }) => (
          <div className="stats__item" key={label}>
            <span className="stats__icon">{icon}</span>
            <span className="stats__value">{value}</span>
            <span className="stats__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
