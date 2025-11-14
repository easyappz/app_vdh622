import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/index.jsx'
import NotFound from './components/NotFound/index.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
