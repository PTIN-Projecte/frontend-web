// src/components/EventCard.jsx
import React from 'react';
import { Icon } from '@iconify/react';
import { ICONS } from '../constants/icons';
import './EventCard.css';

const EventCard = ({ evento }) => {

  const obtenerClaseEstado = (estado) => {
    return estado.toLowerCase() === 'confirmado' ? 'estado-confirmado' : 'estado-pendiente';
  };

  return (
    <article className="event-card">

      {/* Columna Izquierda: Hora */}
      <div className="event-card-tiempo">
        <div className="tiempo-hora">
          <span className="hora-grande">{evento.hora.split(':')[0]}</span>
          <span className="hora-minutos">{evento.hora.split(':')[1]}h</span>
        </div>
        <div className="tiempo-duracion">{evento.duracion}</div>
      </div>

      {/* Columna Central: Información */}
      <div className="event-card-info">
        <div className="info-cabecera">
          <h3 className="info-titulo">{evento.titulo}</h3>
          <span className={`estado-pill ${obtenerClaseEstado(evento.estado)}`}>
            {evento.estado}
          </span>
        </div>

        <div className="info-ubicacion">
          <Icon icon={ICONS.LOCATION_PIN} className="icono-svg" /> {evento.ubicacion}
        </div>

        <div className="info-etiquetas">
          {evento.etiquetas.map((etiqueta, index) => (
            <span key={index} className="etiqueta-item">{etiqueta}</span>
          ))}
        </div>
      </div>

      {/* Columna Derecha: Comensales */}
      <div className="event-card-comensales">
        <div className="comensales-icono">
          <Icon icon={ICONS.USERS} />
        </div>
        <div className="comensales-info">
          <span className="comensales-numero">{evento.comensales}</span>
          <span className="comensales-label">comensales</span>
        </div>
        <button className="btn-expandir">
          <Icon icon={ICONS.ARROW_RIGHT} />
        </button>
      </div>

    </article>
  );
};

export default EventCard;