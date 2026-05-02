import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Icon } from '@iconify/react';
import 'react-calendar/dist/Calendar.css';
import './ListaEventos.css';
import EventCard from './EventCard';
import { datosEventos } from '../data/dataEventos';
import { ICONS } from '../constants/icons';

const ListaEventos = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  const formatearFechaTitulo = (fecha) => {
    return fecha.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatearFechaFiltro = (fecha) => {
    const d = new Date(fecha);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const fechaFiltro = formatearFechaFiltro(fechaSeleccionada);

  const eventosFiltrados = datosEventos.lista.filter(evento => evento.fecha === fechaFiltro);

  const resumen = {
    totalEventos: eventosFiltrados.length,
    comensales: eventosFiltrados.reduce((acc, curr) => acc + curr.comensales, 0),
    confirmados: eventosFiltrados.filter(e => e.estado === "Confirmado").length,
    pendientes: eventosFiltrados.filter(e => e.estado === "Pendiente").length,
  };

  const cerrarPanel = () => setEventoSeleccionado(null);
  const seleccionarEvento = (evento) => setEventoSeleccionado(evento);

  const obtenerClaseEstado = (estado) => {
    return estado?.toLowerCase() === 'confirmado' ? 'estado-confirmado-panel' : 'estado-pendiente-panel';
  };

  return (
    <main className="seccion-lista-eventos">

      <aside className={`panel-informativo-lateral ${eventoSeleccionado ? 'panel-abierto' : ''}`}>
        <div className="capa-oscura" onClick={cerrarPanel}></div>
        <div className="contenido-panel">
          <header className="cabecera-panel">
            <button className="boton-cerrar-panel" onClick={cerrarPanel}>
              <Icon icon={ICONS.ARROW_RIGHT} rotate={2} />
            </button>
            <span className={`estado-panel-badge ${obtenerClaseEstado(eventoSeleccionado?.estado)}`}>
              {eventoSeleccionado?.estado}
            </span>
          </header>

          {eventoSeleccionado && (
            <div className="cuerpo-panel">
              <div className="bloque-principal-panel">
                <span className="categoria-panel">{eventoSeleccionado.etiquetas[0] || 'Evento'}</span>
                <h2 className="titulo-evento-panel">{eventoSeleccionado.titulo}</h2>
              </div>

              <div className="seccion-campos-panel">
                <div className="campo-panel">
                  <label>CLIENTE</label>
                  <p>{eventoSeleccionado.cliente || 'Sin asignar'}</p>
                </div>
                <div className="campo-panel">
                  <label>UBICACIÓN</label>
                  <p>{eventoSeleccionado.ubicacion}</p>
                </div>
                <div className="fila-campos-panel">
                  <div className="campo-panel">
                    <label>HORA</label>
                    <p>{eventoSeleccionado.hora}h</p>
                  </div>
                  <div className="campo-panel">
                    <label>COMENSALES</label>
                    <p>{eventoSeleccionado.comensales} en total</p>
                  </div>
                </div>
                <div className="campo-panel">
                  <label>MENÚ ASIGNADO</label>
                  <p>{eventoSeleccionado.menu || 'Menú Estándar'}</p>
                </div>
              </div>

              <div className="divisor-panel"></div>

              <div className="seccion-detalle-panel">
                <div className="item-detalle-panel">
                  <Icon icon={ICONS.CLOCK} />
                  <div>
                    <strong>Duración estimada</strong>
                    <span>{eventoSeleccionado.duracion} de servicio</span>
                  </div>
                </div>
                <div className="item-detalle-panel">
                  <Icon icon={ICONS.USERS} />
                  <div>
                    <strong>Responsable</strong>
                    <span>{eventoSeleccionado.responsable || 'Sin asignar'}</span>
                  </div>
                </div>
              </div>

              <div className="notas-panel">
                <label>NOTAS INTERNAS</label>
                <p>{eventoSeleccionado.notas || 'No hay notas adicionales para este evento.'}</p>
              </div>

              <div className="contenedor-acciones-panel">
                <button className="boton-accion-principal-centrado">
                  VER INFORMACIÓN DETALLADA
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>

      <div className="contenedor-cabecera-dashboard">
        <div className="bloque-dashboard-principal">
          <div className="seccion-info-izquierdo">
            <header className="cabecera-fecha-seleccionada">
              <div className="cabecera-grupo-icono-texto">
                <div className="contenedor-icono-calendario">
                  <Icon icon={ICONS.CALENDAR_MAIN} />
                </div>
                <div className="bloque-textos-fecha">
                  <h2 className="titulo-fecha">Eventos del {formatearFechaTitulo(fechaSeleccionada)}</h2>
                  <p className="conteo-eventos">{resumen.totalEventos} eventos encontrados</p>
                </div>
              </div>
            </header>

            <section className="rejilla-estadisticas">
              <div className="tarjeta-estadistica">
                <span className="etiqueta-estadistica">TOTAL EVENTOS</span>
                <strong className="valor-estadistica">{resumen.totalEventos}</strong>
                <span className="detalle-estadistica">Para esta fecha</span>
              </div>

              <div className="tarjeta-estadistica">
                <span className="etiqueta-estadistica">COMENSALES</span>
                <strong className="valor-estadistica">{resumen.comensales}</strong>
                <span className="detalle-estadistica">En total</span>
              </div>

              <div className="tarjeta-estadistica">
                <span className="etiqueta-estadistica">CONFIRMADOS</span>
                <strong className="valor-estadistica">{resumen.confirmados}</strong>
                <span className="detalle-estadistica">de {resumen.totalEventos} eventos</span>
              </div>

              <div className="tarjeta-estadistica">
                <span className="etiqueta-estadistica">PENDIENTES</span>
                <strong className="valor-estadistica">{resumen.pendientes}</strong>
                <span className="detalle-estadistica">Por confirmar</span>
              </div>
            </section>
          </div>

          <div className="seccion-calendario">
            <Calendar
              onChange={setFechaSeleccionada}
              value={fechaSeleccionada}
              locale="es-ES"
              className="calendario-personalizado"
              nextLabel=">"
              prevLabel="<"
            />
          </div>
        </div>
      </div>

      <section className="contenedor-listado-eventos">
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map((evento) => (
            <EventCard
              key={evento.id}
              evento={evento}
              onClick={seleccionarEvento}
            />
          ))
        ) : (
          <p className="sin-eventos">No hay eventos para este día.</p>
        )}
      </section>

    </main>
  );
};

export default ListaEventos;