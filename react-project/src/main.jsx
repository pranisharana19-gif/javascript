import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ex3/index.css'
import App from './ex3/App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
