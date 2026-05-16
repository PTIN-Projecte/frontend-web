import React from 'react'
import EventoSidebar from './EventoSidebar'

const Sidebar = ({ eventos = [] }) => {

  // Acción 1: Al pulsar "Información de eventos"
  const handleVerInformacion = () => {
    alert("Acción: Abriendo la información detallada de los eventos...");
    // [Tu yo del futuro]: Aquí meterás la lógica o el modal para mostrar la info
  };

  // Acción 2: Al pulsar "+ Añadir Evento"
  const handleAñadirEvento = () => {
    alert("Acción: Abriendo el formulario para añadir un nuevo evento...");
    // [Tu yo del futuro]: Aquí meterás la lógica para abrir el formulario
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Próximos Eventos</h2>
      
      {/* 1. El Slider (ocupa el centro) */}
      <div className="event-list-container">
        <div className="event-list">
          {eventos.map((ev, index) => (
            <EventoSidebar 
              key={ev.id || index} 
              titulo={ev.title} 
              fecha={ev.start} 
              color={ev.color} 
            />
          ))}
        </div>
      </div>

      {/* 2. Los Botones (fijos abajo con los mensajes encarrilados) */}
      <button className="buttonAdd" onClick={handleVerInformacion}>
        Información de eventos
      </button>
      
      <button className="buttonAdd" onClick={handleAñadirEvento}>
        + Añadir Evento
      </button>
    </aside>
  )
}

export default Sidebar