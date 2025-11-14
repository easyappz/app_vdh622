import React from 'react'

export default function ContactInfo() {
  return (
    <section id="contacts" className="section" data-easytag="id1-src/components/Landing/ContactInfo.jsx">
      <div className="container">
        <div className="card" style={{ padding: 24, display: 'grid', gap: 8 }}>
          <h2 style={{ marginTop: 0 }}>Контактная информация</h2>
          <p style={{ margin: 0 }}><strong>Email:</strong> hello@liane.example</p>
          <p style={{ margin: 0 }}><strong>Телефон:</strong> +7 (900) 000-00-00</p>
          <p style={{ margin: 0, color: 'var(--muted)' }}>Мы на связи в будни с 10:00 до 19:00</p>
        </div>
      </div>
    </section>
  )
}
