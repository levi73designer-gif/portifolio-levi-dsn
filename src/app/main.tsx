import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../styles/globals.css'

// Error boundary for debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
  document.getElementById('root')!.innerHTML = `
    <div style="padding: 2rem; color: #fff; background: #000; min-height: 100vh;">
      <h1 style="color: #E8181A;">Erro na aplicação</h1>
      <p>${event.error?.message || 'Erro desconhecido'}</p>
      <p>Verifique o console para mais detalhes.</p>
    </div>
  `
})

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
