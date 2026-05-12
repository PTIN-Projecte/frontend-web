import React from 'react';
import './EventoInfo.css';
import { eventoDb } from '../data/dataEvento';

export default function EventoInfo() {
  
  //De momento con el .js generado para esto
  const evento = eventoDb[0];

  const formatearFecha = (fechaStr) => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaStr).toLocaleDateString('es-ES', opciones);
  };

  const getEstadoColor = (estado) => {
    switch(estado?.toLowerCase()) {
      case 'confirmada': return 'estado-confirmada';
      case 'pendiente': return 'estado-pendiente';
      case 'cancelado': return 'estado-cancelado';
      default: return 'estado-pendiente'; // Por defecto
    }
  };

  //De momento no hay navegación así que se verán cosas en el console log
  const handleVolver = () => {
    console.log("Volver a la lista de eventos");
    // Más adelante navigate('/eventos')
  };

  const handleEditarEvento = () => {
    console.log("Editar evento:", evento.id);
    // Más adelante navigate(`/evento/${evento.id}/editar`)
  };

  const handleConsultarDietas = () => {
    console.log("Consultar dietas especiales del evento:", evento.id);
  };

  const handleVerMenu = () => {
    console.log("Ver detalle del menú:", evento.menu.nombre);
  };

  const handleVerPeticiones = () => {
    console.log("Ver/Editar peticiones a producción");
  };

  return (
    <div className="layout-principal">
      
      {/* Header superior como el de ListaMenus) */}
      <header className="header-superior">
        <div className="idioma-selector">
          <span>CA</span>
          <span>EN</span>
          <span>ES</span>
        </div>
        
        <div className="logo">CAL BLAY</div>
        
        <nav className="nav-links">
          <span>TO GIFT</span>
          <span>CALENDAR</span>
          <span>CALÇOTADES</span>
          <span>CONTACT</span>
          <span className="menu-hamburguesa">☰</span>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="contenido-evento">
        
        {/* Título y botón volver */}
        <div className="evento-header">
          <button className="btn-volver" onClick={handleVolver}>
            &lt;
          </button>
          <h1>{evento.nombre}</h1>
        </div>

        {/* Fecha, hora y botón editar */}
        <div className="evento-info-principal">
          <div className="fecha-hora">
            <span className="icono-calendario">📅</span>
            <div>
              <span className="fecha-texto">
                {formatearFecha(evento.fecha)} - ({evento.horaInicio}-{evento.horaFin}h)
              </span>
              {evento.eventosCoincidentes > 0 && (
                <span className="eventos-coincidentes">
                  {evento.eventosCoincidentes} eventos coincidentes.
                </span>
              )}
            </div>
          </div>
          
          <button className="btn-editar-evento" onClick={handleEditarEvento}>
            Editar evento
          </button>
        </div>

        {/* Grid de estadísticas */}
        <div className="stats-grid">
          {/* Comensales */}
          <div className="stat-card">
            <span className="stat-label">COMENSALES</span>
            <span className="stat-value">{evento.comensales}</span>
          </div>

          {/* Confirmados */}
          <div className="stat-card">
            <span className="stat-label">Confirmados</span>
            <span className="stat-value">{evento.confirmados}</span>
          </div>

          {/* Dietas especiales */}
          <div className="stat-card">
            <span className="stat-label">Dietas especiales</span>
            <span className="stat-value">{evento.dietasEspeciales}</span>
            <button className="btn-consultar" onClick={handleConsultarDietas}>
              Consultar →
            </button>
          </div>

          {/* Contacto */}
          <div className="stat-card">
            <span className="stat-label">Contacto</span>
            <span className="stat-value stat-contacto">
              {evento.contacto.nombre} · {evento.contacto.telefono}
            </span>
          </div>

          {/* Recinto */}
          <div className="stat-card">
            <span className="stat-label">Recinto</span>
            <div className="stat-recinto">
              <span className="icono-ubicacion">📍</span>
              <span>{evento.recinto.nombre}</span>
              <span className="icono-personas">👥</span>
              <span>Cap: {evento.recinto.capacidad}</span>
            </div>
          </div>
        </div>

        {/* Sección Menú */}
        <div className="seccion-card">
          <div className="seccion-header">
            <span className="seccion-titulo">Menú</span>
          </div>
          <div className="seccion-contenido" onClick={handleVerMenu}>
            <div className="menu-info">
              <span className="menu-nombre">{evento.menu.nombre}</span>
              <span className={`estado-badge ${getEstadoColor(evento.menu.estado)}`}>
                {evento.menu.estado}
              </span>
            </div>
            <div className="menu-tags">
              {evento.menu.tags?.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <span className="seccion-flecha">›</span>
          </div>
        </div>

        {/* Sección Útiles necesarios */}
        <div className="seccion-card">
          <div className="seccion-header">
            <span className="seccion-titulo">Útiles necesarios</span>
          </div>
          <div className="seccion-contenido utiles-grid">
            {evento.utilesNecesarios?.map((util, idx) => (
              <span key={idx} className="util-item">
                {util.nombre} x{util.cantidad}
              </span>
            ))}
          </div>
        </div>

        {/* Sección Peticiones a Producción */}
        <div className="seccion-card">
          <div className="seccion-header">
            <span className="seccion-titulo">Peticiones a Producción</span>
          </div>
          <div className="seccion-contenido peticiones-list" onClick={handleVerPeticiones}>
            {evento.peticionesProduccion?.map((peticion, idx) => (
              <div key={idx} className="peticion-item">
                <span className="peticion-nombre">{peticion.item}</span>
                <span className={`estado-badge ${getEstadoColor(peticion.estado)}`}>
                  {peticion.estado}
                </span>
              </div>
            ))}
            <span className="seccion-flecha">›</span>
          </div>
        </div>

      </main>
    </div>
  );
}