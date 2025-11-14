import React from 'react'

export default function Socials() {
  return (
    <section className="section" data-easytag="id1-src/components/Landing/Socials.jsx" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="card" style={{ padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <h3 style={{ margin: 0 }}>Мы в соцсетях</h3>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="VK">VK</a>
            <a href="#" aria-label="Telegram">Telegram</a>
          </div>
        </div>
      </div>
    </section>
  )
}
