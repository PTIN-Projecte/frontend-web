import EventoSidebar from './EventoSidebar'

const Sidebar = ({ eventos }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Próximos Eventos</h2>
      
      {/* 1. El Slider (ocupa el centro) */}
      <div className="event-list-container">
        <div className="event-list">
          {eventos.map((ev) => (
            <EventoSidebar titulo={ev.title} fecha={ev.start} color={ev.color} />
          ))}
        </div>
      </div>

      {/* 2. El Botón (se queda fijo abajo) */}
      <button className="buttonAdd">+ Añadir Evento</button>
    </aside>
  )
}

export default Sidebar