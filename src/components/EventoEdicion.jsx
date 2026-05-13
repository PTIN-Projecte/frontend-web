import React, { useState } from 'react';
import './EventoEdicion.css';

export default function EventoEdicion({ datos, onChange, onTelefonoChange, onGuardar, onCancel }) {
  // Estados para los popups
  const [showCalendar, setShowCalendar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: '', message: '', type: 'discard' });
  const [showYearDropdown, setShowYearDropdown] = useState(false);    //Para el desplegable de años

  //Estados calendario
  const [calMonth, setCalMonth] = useState(new Date(datos.fecha).getMonth());
  const [calYear, setCalYear] = useState(new Date(datos.fecha).getFullYear());
  const [selectedDay, setSelectedDay] = useState(new Date(datos.fecha).getDate());

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
      onGuardar();
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

  const handleModalAction = (action) => {
    setShowModal(false);
    if (action === 'confirm' && modalConfig.type === 'discard') onCancel();
  };

  // LÓGICA DEL CALENDARIO
  
  // Navegar meses
  const cambiarMes = (delta) => {
    let nuevoMes = calMonth + delta;
    let nuevoYear = calYear;
    if (nuevoMes > 11) { nuevoMes = 0; nuevoYear++; }
    if (nuevoMes < 0) { nuevoMes = 11; nuevoYear--; }
    setCalMonth(nuevoMes);
    setCalYear(nuevoYear);
  };

  // Seleccionar día
  const seleccionarDia = (dia) => {
    setSelectedDay(dia);
  };

  // Confirmar selección y cerrar
  const confirmarFecha = () => {
    // Formatear fecha a YYYY-MM-DD
    const mm = String(calMonth + 1).padStart(2, '0');
    const dd = String(selectedDay).padStart(2, '0');
    const nuevaFecha = `${calYear}-${mm}-${dd}`;
    
    // Actualizar estado padre
    onChange({ target: { value: nuevaFecha } }, 'fecha');
    setShowCalendar(false);
  };

  // Generar días del mes actual
  const generarDiasCalendario = () => {
    const diasEnMes = new Date(calYear, calMonth + 1, 0).getDate();
    const primerDiaSemana = new Date(calYear, calMonth, 1).getDay(); // 0 = Domingo
    const dias = [];
    
    // Días vacíos antes del día 1
    for (let i = 0; i < (primerDiaSemana === 0 ? 6 : primerDiaSemana - 1); i++) {
      dias.push(<span key={`empty-${i}`} className="dia vacio"></span>);
    }
    
    // Días del mes
    for (let d = 1; d <= diasEnMes; d++) {
      dias.push(
        <span 
          key={d} 
          className={`dia ${d === selectedDay ? 'activo' : ''}`}
          onClick={() => seleccionarDia(d)}
        >
          {d}
        </span>
      );
    }
    return dias;
  };


  const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  //Desplegables desde este año hasta 15 más
  const generarListaAños = () => {
    const añoActual = new Date().getFullYear();
    const años = [];
    for (let i = 0; i <= 15; i++) {
      años.push(añoActual + i);
    }
    return años;
  };

  return (
    <div className="edicion-container">
      
      {/* TÍTULO */}
      <div className="evento-header">
        <button className="btn-volver" onClick={onCancel}>&lt;</button>
        <input className="input-titulo" value={datos.nombre} onChange={(e) => onChange(e, 'nombre')} />
      </div>

      {/* BARRA DE FECHA */}
      <div className="fecha-bar modo-edicion">
        <div className="fecha-info">
          <span className="icono-calendario">📅</span>
          <div className="campo-fecha clickable" onClick={() => setShowCalendar(true)}>
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

      {/* POPUP CALENDARIO FUNCIONAL */}
      {showCalendar && (
        <div className="modal-overlay" onClick={() => setShowCalendar(false)}>
          <div className="modal-calendario" onClick={e => e.stopPropagation()}>
            
            {/* ✅ HEADER CON DESPLEGABLE DE AÑOS */}
            <div className="calendario-header">
              <span className="arrow" onClick={() => cambiarMes(-1)}>◀</span>
              
              <div className="mes-ano">
                <span>{nombresMeses[calMonth]}</span>
                
                {/* Contenedor relativo para posicionar el dropdown */}
                <div className="ano-selector-container" style={{ position: 'relative', display: 'inline-block' }}>
                  <span 
                    className="ano-selector" 
                    onClick={() => setShowYearDropdown(!showYearDropdown)}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    {calYear} ▼
                  </span>
                  
                  {/* Dropdown de años */}
                  {showYearDropdown && (
                    <div 
                      className="ano-dropdown"
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#fff',
                        border: '1px solid #E8E4DC',
                        borderRadius: '8px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                        zIndex: 10,
                        maxHeight: '200px',
                        overflowY: 'auto',
                        minWidth: '100px',
                        marginTop: '4px'
                      }}
                    >
                      {generarListaAños().map(año => (
                        <div
                          key={año}
                          className="ano-option"
                          onClick={() => {
                            setCalYear(año);
                            setShowYearDropdown(false);
                          }}
                          style={{
                            padding: '8px 12px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            color: año === calYear ? '#C4A484' : '#2C2A26',
                            fontWeight: año === calYear ? '600' : '400',
                            borderBottom: '1px solid #f5f5f5',
                            transition: 'background 0.2s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f3f0'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          {año}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <span className="arrow" onClick={() => cambiarMes(1)}>▶</span>
            </div>
            
            {/* Resto del calendario (grid de días, footer, etc.) */}
            <div className="calendario-grid">
              {['Lu','Ma','Mi','Ju','Vi','Sa','Do'].map(d => <span key={d} className="dia-header">{d}</span>)}
              {generarDiasCalendario()}
            </div>

            <div className="calendario-footer">
              <div className="time-row">
                <span>Inicio</span><input type="time" value={datos.horaInicio} onChange={(e) => onChange(e, 'horaInicio')} />
                <span>Fin</span><input type="time" value={datos.horaFin} onChange={(e) => onChange(e, 'horaFin')} />
              </div>
              <div className="calendario-botones">
                <button className="btn-hoy" onClick={() => {
                  const hoy = new Date();
                  setCalMonth(hoy.getMonth());
                  setCalYear(hoy.getFullYear());
                  setSelectedDay(hoy.getDate());
                  setShowYearDropdown(false);
                }}>Hoy</button>
                <button className="btn-confirmar" onClick={confirmarFecha}>Confirmar</button>
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