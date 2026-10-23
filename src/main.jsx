import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css'
import App from './App.jsx'
import SesionProvider from './context/SesionProvider'
import SolicitudProvider from './context/SolicitudProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SesionProvider>
      <SolicitudProvider>
        <App />
      </SolicitudProvider>
    </SesionProvider>
  </StrictMode>,
)
