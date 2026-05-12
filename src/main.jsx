import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Dashboard_Eventos/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
