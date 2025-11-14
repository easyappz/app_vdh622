import React from 'react'

export default function Header() {
  return (
    <header data-easytag="id1-src/components/Header/index.jsx" style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'saturate(180%) blur(10px)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
        <a href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, color: 'var(--text)' }}>LIANE</a>
        <nav style={{ display: 'flex', gap: 16 }}>
          <a href="#about">О бренде</a>
          <a href="#benefits">Преимущества</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
    </header>
  )
}
