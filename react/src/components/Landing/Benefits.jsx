import React from 'react'

const items = [
  { t: 'Женственные силуэты', d: 'Аккуратные, элегантные формы на каждый день.' },
  { t: 'Качественные ткани', d: 'Комфорт и долговечность в каждой вещи.' },
  { t: 'Современная эстетика', d: 'Актуальные тренды без излишней яркости.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section" data-easytag="id1-src/components/Landing/Benefits.jsx">
      <div className="container">
        <h2 style={{ marginTop: 0, marginBottom: 20 }}>Преимущества бренда</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {items.map((it, i) => (
            <div key={i} className="card" style={{ padding: 24 }}>
              <h3 style={{ marginTop: 0 }}>{it.t}</h3>
              <p style={{ color: 'var(--muted)' }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
