import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import InformacionEventoPage from '/media/Datos/Proyectos/PTIN/frontend-web/src/features/eventos/informacion_eventos/pages/InformacionEventoPage'
import EventInfoCommercial from '/media/Datos/Proyectos/PTIN/frontend-web/src/features/eventos/informacion_eventos/components/EventInfoCommercial'
import EventInfoProduction from '/media/Datos/Proyectos/PTIN/frontend-web/src/features/eventos/informacion_eventos/components/EventInfoProduction'

// Componente selector temporal para debug
function RoleSelector({ onSelectRole }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Selecciona el tipo de usuario para debug</h2>
      <div style={{ marginTop: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button 
          onClick={() => onSelectRole('commercial')}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Usuario Comercial (con edición)
        </button>
        <button 
          onClick={() => onSelectRole('production')}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Usuario Producción (sin edición)
        </button>
      </div>
    </div>
  )
}

// Componente que decide qué vista mostrar según el rol seleccionado
function EventInfoRouter({ userRole }) {
  return userRole === 'commercial' 
    ? <EventInfoCommercial /> 
    : <EventInfoProduction />
}

function AppRoutes() {
  const [userRole, setUserRole] = useState(null)

  // Si no hay rol seleccionado, mostrar el selector
  if (!userRole) {
    return <RoleSelector onSelectRole={setUserRole} />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InformacionEventoPage />} />
        <Route path="/eventos/:eventId/info" element={<EventInfoRouter userRole={userRole} />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes