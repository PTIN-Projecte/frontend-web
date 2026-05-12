import React from 'react';
import './EventoInfo.css';
import { eventoDb } from '../data/dataEvento';

export default function EventoInfo() {
  const evento = eventoDb[0];

  const formatearFecha = (fechaStr) => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaStr).toLocaleDateString('es-ES', opciones);
  };

  const getBadgeClass = (estado) => {
    const e = estado?.toLowerCase();
    if (e === 'confirmado' || e === 'aceptada') return 'badge-verde';
    if (e === 'pendiente') return 'badge-rojo';
    return 'badge-gris';
  };


  // HANDLERS
  const handleVolver = () => {
    console.log("← Volver a la lista");
  };

  const handleEditarEvento = () => {
    console.log("Editar evento:", evento.id);
  };

  const handleConsultarDietas = () => {
    console.log("Consultar dietas especiales:", evento.dietasEspeciales);
  };

  const handleVerMenu = () => {
    console.log("Ver detalle del menú:", evento.menu.nombre);
  };

  const handleVerPeticiones = () => {
    console.log("Ver peticiones a producción");
  };

  return (
    <div className="layout-principal">
      
      {/* HEADER SUPERIOR */}
      <header className="header-superior">
        <div className="header-left">
          <span className="badge-comercial">Comercial</span>
        </div>
        <div className="logo">CAL BLAY</div>
        <nav className="nav-links">
          <span>DASHBOARD</span>
          <span>PETICIONES</span>
          <span>MENÚS</span>
          <span className="menu-hamburguesa">☰</span>
        </nav>
      </header>

      <main className="contenido-evento">
        
        {/* TÍTULO */}
        <div className="evento-header">
          <button className="btn-volver" onClick={handleVolver}>&lt;</button>
          <h1>{evento.nombre}</h1>
        </div>

        {/* BARRA DE FECHA */}
        <div className="fecha-bar">
          <div className="fecha-info">
            <span className="icono-calendario">📅</span>
            <span className="fecha-texto">{formatearFecha(evento.fecha)} - ({evento.horaInicio}-{evento.horaFin}h)</span>
            <button className="btn-editar-evento" onClick={handleEditarEvento}>Editar evento</button>
          </div>
          <span className="link-coincidentes">{evento.eventosCoincidentes} eventos coincidentes.</span>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">COMENSALES</span>
            <span className="stat-value">{evento.comensales}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">CONFIRMADOS</span>
            <span className="stat-value">{evento.confirmados}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">DIETAS ESPECIALES</span>
            <span className="stat-value">{evento.dietasEspeciales}</span>
            <button className="btn-consultar" onClick={handleConsultarDietas}>Consultar →</button>
          </div>
          <div className="stat-card">
            <span className="stat-label">CONTACTO</span>
            <div className="stat-contacto">
              <span>{evento.contacto.nombre}</span>
              <span>{evento.contacto.telefono}</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-label">RECINTO</span>
            <div className="stat-recinto">
              <span>📍 {evento.recinto.nombre}</span>
              <span>👥 Capacidad: {evento.recinto.capacidad}</span>
            </div>
          </div>
        </div>

        {/* SECCIONES DETALLE */}
        <div className="detalle-section">
          <div className="detalle-row" onClick={handleVerMenu}>
            <div className="detalle-label">Menú</div>
            <div className="detalle-body">
              <span className="menu-nombre">{evento.menu.nombre}</span>
              <span className={`badge ${getBadgeClass(evento.menu.estado)}`}>{evento.menu.estado}</span>
              <div className="tags-row">
                {evento.menu.tags.map((t, i) => <span key={i} className="tag-mini">{t}</span>)}
              </div>
              <span className="flecha-derecha">›</span>
            </div>
          </div>

          <div className="detalle-row">
            <div className="detalle-label">Útiles necesarios</div>
            <div className="detalle-body utiles-body">
              {evento.utilesNecesarios.map((u, i) => (
                <span key={i} className="tag-mini">{u.nombre}</span>
              ))}
            </div>
          </div>

          <div className="detalle-row" onClick={handleVerPeticiones}>
            <div className="detalle-label">Peticiones a Producción</div>
            <div className="detalle-body peticiones-body">
              {evento.peticionesProduccion.map((p, i) => (
                <div key={i} className="peticion-row">
                  <span>{p.item} - </span>
                  <span className={`badge ${getBadgeClass(p.estado)}`}>{p.estado}</span>
                </div>
              ))}
              <span className="flecha-derecha">›</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}