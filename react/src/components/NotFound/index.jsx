import React from 'react'

export default function NotFound() {
  return (
    <main className="section" data-easytag="id1-src/components/NotFound/index.jsx">
      <div className="container">
        <div className="card" style={{ padding: 40, textAlign: 'center' }}>
          <h1 style={{ margin: 0, fontSize: 48 }}>404</h1>
          <p style={{ color: 'var(--muted)', marginTop: 8 }}>Страница не найдена</p>
          <a href="/" className="btn" style={{ marginTop: 20 }}>На главную</a>
        </div>
      </div>
    </main>
  )
}
