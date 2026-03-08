import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { value: 50,  suffix: '+', label: 'Projects Completed', icon: '🚀' },
  { value: 30,  suffix: '+', label: 'Happy Clients',       icon: '😊' },
  { value: 99,  suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
  { value: 3,   suffix: 'yr', label: 'Years Experience',   icon: '💼' },
]

function CountUp({ target, suffix, start }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let frame
    const duration = 1800
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target])
  return <>{count}{suffix}</>
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-inner">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value">
                  <CountUp target={s.value} suffix={s.suffix} start={started} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
