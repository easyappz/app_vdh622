import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

function Root() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.handleRoutes === 'function') {
      window.handleRoutes(["/", "/404"])
    }
  }, [])
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Root />)
