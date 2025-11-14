import React from 'react'

export default function Hero() {
  return (
    <section className="section" data-easytag="id1-src/components/Landing/Hero.jsx" style={{ background: 'var(--gradient)', paddingTop: 96, paddingBottom: 96 }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 28 }}>
        <div>
          <h1 style={{ fontSize: 52, lineHeight: 1.1, margin: 0 }}>LIANE — одежда для женственных, скромных девушек</h1>
          <p style={{ color: 'var(--muted)', marginTop: 16, fontSize: 18 }}>Современный стиль с чувством вкуса и деликатности. Коллекции, созданные для повседневной элегантности.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <a href="#benefits" className="btn">Почему LIANE</a>
            <a href="#contacts" className="btn" style={{ background: 'var(--accent)' }}>Связаться</a>
          </div>
        </div>
        <div className="card" style={{ minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'var(--muted)' }}>Здесь будет изображение</span>
        </div>
      </div>
    </section>
  )
}
