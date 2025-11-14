import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer data-easytag="id1-src/components/Footer/index.jsx" style={{ padding: '32px 0', background: '#fff', borderTop: '1px solid #f0e7f4' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--muted)' }}>© {year} LIANE</span>
        <a href="#contacts" className="btn">Связаться</a>
      </div>
    </footer>
  )
}
