import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. Bootstrap primero, 2. estilos globales, 3. estilos de los componentes
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
