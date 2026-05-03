import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RoleProvider } from './features/eventos/informacion_eventos/context/RoleContext'
import { NavigationProvider } from './features/eventos/informacion_eventos/context/NavigationContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RoleProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </RoleProvider>
    </BrowserRouter>
  </StrictMode>
)