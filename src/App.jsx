import ListaPlatos from './components/ListaPlatos';
import ListaEventos from './components/ListaEventos';
import InformacionEvento from './features/eventos/informacion_eventos/pages/InformacionEvento.jsx';
import DietasAlergias from './features/eventos/informacion_eventos/pages/DietasEspeciales.jsx';
import { useState } from 'react';

const TABS = [
  { id: 'platos',  label: 'Lista Platos' },
  { id: 'eventos', label: 'Lista Eventos' },
  { id: 'info',    label: 'Información Evento' },
  { id: 'dietas',  label: 'Dietas y Alergias' },
];

export default function App() {
  const [tabActiva, setTabActiva] = useState('platos');

  return (
    <>
      {/* ── Tabs ── */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 40px',
        borderBottom: '1px solid #E4DFD6',
        background: '#F3F1EB',
        position: 'sticky',
        top: 0,
        zIndex: 500,
      }}>
        <span style={{
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '1.5px',
          color: '#B8915A',
          textTransform: 'uppercase',
          marginRight: '8px',
          userSelect: 'none',
        }}>
          DEMO
        </span>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTabActiva(tab.id)}
            style={{
              padding: '8px 24px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: tabActiva === tab.id ? '600' : '400',
              background: tabActiva === tab.id ? '#2c2c2c' : 'transparent',
              color: tabActiva === tab.id ? '#ffffff' : '#666666',
              transition: 'all 0.2s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* ── Contenido ── */}
      <div style={{ background: '#ffffff', minHeight: 'calc(100vh - 57px)', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        {tabActiva === 'platos'  && <ListaPlatos />}
        {tabActiva === 'eventos' && <ListaEventos />}
        {tabActiva === 'info'    && <InformacionEvento />}
        {tabActiva === 'dietas'  && <DietasAlergias />}
      </div>
    </>
  );
}