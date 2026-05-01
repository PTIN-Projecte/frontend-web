import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Icon } from '@iconify/react';
import 'react-calendar/dist/Calendar.css';
import './ListaEventos.css';
import EventCard from './EventCard';
import { datosEventos } from '../data/dataEventos';
import { ICONS } from '../constants/icons';

const ListaEventos = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date(2026, 3, 1)); // Abril 2026

  // Formatear fecha para el título (Ej: martes 1 de Abril de 2026)
  const formatearFechaTitulo = (fecha) => {
    return fecha.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Formatear fecha para filtrar (YYYY-MM-DD)
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

  // Filtrar eventos por fecha
  const eventosFiltrados = datosEventos.lista.filter(evento => evento.fecha === fechaFiltro);

  // Calcular Resumen Dinámico
  const resumen = {
    totalEventos: eventosFiltrados.length,
    comensales: eventosFiltrados.reduce((acc, curr) => acc + curr.comensales, 0),
    confirmados: eventosFiltrados.filter(e => e.estado === "Confirmado").length,
    pendientes: eventosFiltrados.filter(e => e.estado === "Pendiente").length,
  };

  return (
    <main className="lista-eventos-interior">

      {/* --- Bloque de Información Superior --- */}
      <div className="contenedor-calendario-kpis">

        {/* Columna Izquierda: Título + KPIs */}
        <div className="info-textos-kpis">
          <header className="cabecera-fecha">
            <div className="cabecera-fecha-icono-texto">
              <div className="icono-calendario">
                <Icon icon={ICONS.CALENDAR_MAIN} />
              </div>
              <div className="cabecera-fecha-textos">
                <h2 className="fecha-principal">Eventos del {formatearFechaTitulo(fechaSeleccionada)}</h2>
                <p className="subtitulo-eventos">{resumen.totalEventos} eventos encontrados</p>
              </div>
            </div>
          </header>

          <section className="dashboard-stats-grid">
            <div className="stat-card">
              <span className="stat-label">TOTAL EVENTOS</span>
              <strong className="stat-value">{resumen.totalEventos}</strong>
              <span className="stat-detail">Para esta fecha</span>
            </div>

            <div className="stat-card">
              <span className="stat-label">COMENSALES</span>
              <strong className="stat-value">{resumen.comensales}</strong>
              <span className="stat-detail">En total</span>
            </div>

            <div className="stat-card">
              <span className="stat-label">CONFIRMADOS</span>
              <strong className="stat-value">{resumen.confirmados}</strong>
              <span className="stat-detail">de {resumen.totalEventos} eventos</span>
            </div>

            <div className="stat-card">
              <span className="stat-label">PENDIENTES</span>
              <strong className="stat-value">{resumen.pendientes}</strong>
              <span className="stat-detail">Por confirmar</span>
            </div>
          </section>
        </div>

        {/* Columna Derecha: Calendario */}
        <div className="widget-calendario">
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

      {/* --- Lista de Eventos --- */}
      <section className="lista-eventos-items">
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map((evento) => (
            <EventCard key={evento.id} evento={evento} />
          ))
        ) : (
          <p className="sin-eventos">No hay eventos para este día.</p>
        )}
      </section>

    </main>
  );
};

export default ListaEventos;