import React, { useState } from 'react'

export default function FeedbackForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Укажите имя'
    if (!form.email.trim()) e.email = 'Укажите email'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Некорректный email'
    if (!form.message.trim()) e.message = 'Напишите сообщение'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    if (!validate()) return
    if (typeof onSubmit !== 'function') return
    try {
      setStatus('loading')
      await onSubmit(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '', consent: false })
      setErrors({})
    } catch (err) {
      setStatus('error')
      const data = err?.response?.data
      if (data && typeof data === 'object') {
        const fieldErrors = {}
        for (const k of Object.keys(data)) {
          fieldErrors[k] = Array.isArray(data[k]) ? data[k].join(', ') : String(data[k])
        }
        setErrors(fieldErrors)
        setServerError('Проверьте правильность данных')
      } else {
        setServerError(err?.message || 'Ошибка отправки')
      }
    }
  }

  return (
    <section className="section" data-easytag="id1-src/components/Landing/FeedbackForm.jsx">
      <div className="container">
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Форма обратной связи</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label>Имя</label>
                <input value={form.name} onChange={e => handleChange('name', e.target.value)} placeholder="Ваше имя" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #eee' }} />
                {errors.name && <div style={{ color: '#c00', fontSize: 12, marginTop: 6 }}>{errors.name}</div>}
              </div>
              <div>
                <label>Email</label>
                <input type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} placeholder="name@example.com" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #eee' }} />
                {errors.email && <div style={{ color: '#c00', fontSize: 12, marginTop: 6 }}>{errors.email}</div>}
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <label>Сообщение</label>
              <textarea value={form.message} onChange={e => handleChange('message', e.target.value)} rows={5} placeholder="Расскажите, как мы можем помочь" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #eee', resize: 'vertical' }} />
              {errors.message && <div style={{ color: '#c00', fontSize: 12, marginTop: 6 }}>{errors.message}</div>}
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
              <input type="checkbox" checked={form.consent} onChange={e => handleChange('consent', e.target.checked)} />
              <span style={{ color: 'var(--muted)' }}>Я согласен(на) на обработку персональных данных</span>
            </label>
            {errors.consent && <div style={{ color: '#c00', fontSize: 12, marginTop: 6 }}>{errors.consent}</div>}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
              <button type="submit" className="btn" disabled={status==='loading'}>{status==='loading' ? 'Отправка…' : 'Отправить'}</button>
              {status==='success' && <span style={{ color: 'green' }}>Сообщение отправлено!</span>}
              {status==='error' && <span style={{ color: '#c00' }}>{serverError}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
