import React, { useState } from 'react';
import './EventoEdicion.css';

export default function EventoEdicion({ datos, onChange, onTelefonoChange, onGuardar, onCancel }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: '', message: '', type: 'discard' });

  const formatearFecha = (fechaStr) => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaStr).toLocaleDateString('es-ES', opciones);
  };

  // Validar fecha/hora >= ahora
  const validarFechaHora = () => {
    const [y, m, d] = datos.fecha.split('-').map(Number);
    const [h, min] = datos.horaInicio.split(':').map(Number);
    const seleccionada = new Date(y, m - 1, d, h, min);
    return seleccionada >= new Date();
  };

  // Click en GUARDAR
  const handleGuardar = () => {
    if (validarFechaHora()) {
      onGuardar(); // Vuelve a la pantalla principal
    } else {
      setModalConfig({
        title: 'Fecha inválida',
        message: 'La fecha y hora de inicio deben ser iguales o posteriores a la actual.',
        type: 'error'
      });
      setShowModal(true);
    }
  };

  // Click en CANCELAR
  const handleCancelar = () => {
    setModalConfig({
      title: '¿Descartar cambios?',
      message: 'Los cambios no guardados se perderán. ¿Deseas continuar?',
      type: 'discard'
    });
    setShowModal(true);
  };

  // Acciones del modal
  const handleModalAction = (action) => {
    setShowModal(false);
    if (action === 'confirm') {
      if (modalConfig.type === 'discard') onCancel(); // Restaura datos originales
    }
  };

  // Confirmar calendario
  const handleConfirmarCalendario = (fecha, inicio, fin) => {
    // Aquí actualizaríamos el estado padre. Por simplicidad, simulamos el cambio:
    onChange({ target: { value: fecha } }, 'fecha');
    onChange({ target: { value: inicio } }, 'horaInicio');
    onChange({ target: { value: fin } }, 'horaFin');
    setShowCalendar(false);
  };

  return (
    <div className="edicion-container">
      
      {/* TÍTULO */}
      <div className="evento-header">
        <button className="btn-volver" onClick={onCancel}>&lt;</button>
        <input 
          className="input-titulo" 
          value={datos.nombre} 
          onChange={(e) => onChange(e, 'nombre')} 
        />
      </div>

      {/* BARRA DE FECHA */}
      <div className="fecha-bar modo-edicion">
        <div className="fecha-info">
          <span className="icono-calendario">📅</span>
          <div 
            className="campo-fecha clickable" 
            onClick={() => setShowCalendar(true)}
          >
            {formatearFecha(datos.fecha)} - ({datos.horaInicio}-{datos.horaFin}h)
          </div>
          <div className="botones-accion">
            <button className="btn-cancelar" onClick={handleCancelar}>Cancelar</button>
            <button className="btn-guardar" onClick={handleGuardar}>Guardar</button>
          </div>
        </div>
      </div>

      {/* STATS EDITABLES */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">COMENSALES</span>
          <input type="number" min="0" className="input-stat" value={datos.comensales} onChange={(e) => onChange(e, 'comensales')} />
        </div>
        <div className="stat-card">
          <span className="stat-label">CONFIRMADOS</span>
          <input type="number" min="0" className="input-stat" value={datos.confirmados} onChange={(e) => onChange(e, 'confirmados')} />
        </div>
        <div className="stat-card">
          <span className="stat-label">DIETAS ESPECIALES</span>
          <span className="stat-value">{datos.dietasEspeciales}</span>
          <button className="btn-consultar">Consultar →</button>
        </div>
        <div className="stat-card">
          <span className="stat-label">CONTACTO</span>
          <div className="contacto-edit-grid">
            <input className="input-contacto" value={datos.contacto.nombre} onChange={(e) => onChange(e, 'contacto', 'nombre')} placeholder="Nombre" />
            <input className="input-contacto" value={datos.contacto.telefono} onChange={onTelefonoChange} placeholder="Teléfono" />
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-label">RECINTO</span>
          <select className="input-recinto" value={datos.recinto.nombre} onChange={(e) => onChange(e, 'recinto', 'nombre')}>
            <option value="">Seleccionar recinto...</option>
            <option value="Sala Principal Planta 1">Sala Principal Planta 1</option>
            <option value="Sala Blava - Planta Baja">Sala Blava - Planta Baja</option>
            <option value="Terraza Exterior">Terraza Exterior</option>
            <option value="nuevo" disabled>➕ Agregar nuevo recinto</option>
          </select>
        </div>
      </div>

      {/* SECCIONES INFERIORES (Solo lectura) */}
      <div className="detalle-section">
        <div className="detalle-row"><div className="detalle-label">Menú</div><div className="detalle-body"><span className="menu-nombre">{datos.menu.nombre}</span><span className="badge badge-verde">{datos.menu.estado}</span></div></div>
        <div className="detalle-row"><div className="detalle-label">Útiles</div><div className="detalle-body utiles-body">{datos.utilesNecesarios.map((u, i) => <span key={i} className="tag-mini">{u.nombre}</span>)}</div></div>
        <div className="detalle-row"><div className="detalle-label">Peticiones</div><div className="detalle-body peticiones-body">{datos.peticionesProduccion.map((p, i) => <div key={i} className="peticion-row"><span>{p.item} - </span><span className={`badge ${p.estado === 'Pendiente' ? 'badge-rojo' : 'badge-verde'}`}>{p.estado}</span></div>)}</div></div>
      </div>

      {/* POPUP CALENDARIO */}
      {showCalendar && (
        <div className="modal-overlay" onClick={() => setShowCalendar(false)}>
          <div className="modal-calendario" onClick={e => e.stopPropagation()}>
            <div className="calendario-header">
              <span className="arrow">◀</span>
              <div className="mes-anio"><span>Junio</span><span className="anio-selector">2026 ▼</span></div>
              <span className="arrow">▶</span>
            </div>
            <div className="calendario-grid">
              {['Lu','Ma','Mi','Ju','Vi','Sa','Do'].map(d => <span key={d} className="dia-header">{d}</span>)}
              {Array.from({length: 6}, (_, i) => <span key={`e${i}`} className="dia vacio"></span>)}
              {Array.from({length: 30}, (_, i) => (
                <span key={i+1} className={`dia ${i+1 === 14 ? 'activo' : ''}`}>{i+1}</span>
              ))}
            </div>
            <div className="calendario-footer">
              <div className="time-row">
                <span>Inicio</span><input type="time" defaultValue={datos.horaInicio} onChange={(e) => onChange(e, 'horaInicio')} />
                <span>Fin</span><input type="time" defaultValue={datos.horaFin} onChange={(e) => onChange(e, 'horaFin')} />
              </div>
              <div className="calendario-botones">
                <button className="btn-hoy" onClick={() => handleConfirmarCalendario(new Date().toISOString().split('T')[0], '12:00', '16:00')}>Hoy</button>
                <button className="btn-confirmar" onClick={() => handleConfirmarCalendario('2026-06-14', datos.horaInicio, datos.horaFin)}>Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POPUP Descarte o Error */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-descarte" onClick={e => e.stopPropagation()}>
            <h3 className={modalConfig.type === 'error' ? 'text-error' : ''}>{modalConfig.title}</h3>
            <p>{modalConfig.message}</p>
            <div className="modal-botones-descarte">
              <button className="btn-modal-cancelar" onClick={() => setShowModal(false)}>Cancelar</button>
              {modalConfig.type === 'error' ? (
                <button className="btn-modal-aceptar" onClick={() => setShowModal(false)}>Entendido</button>
              ) : (
                <button className="btn-modal-descartar" onClick={() => handleModalAction('confirm')}>Descartar</button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}