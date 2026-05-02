import React from 'react';
import { Icon } from '@iconify/react';
import { ICONS } from '../constants/icons';
import './EventCard.css';

const EventCard = ({ evento, onClick }) => {

  const obtenerClaseEstado = (estado) => {
    return estado.toLowerCase() === 'confirmado' ? 'estado-confirmado' : 'estado-pendiente';
  };

  return (
    <article className="tarjeta-evento" onClick={() => onClick(evento)} style={{ cursor: 'pointer' }}>

      <div className="bloque-tiempo-evento">
        <div className="hora-evento">
          <span className="digito-hora">{evento.hora.split(':')[0]}</span>
          <span className="digito-minutos">{evento.hora.split(':')[1]}h</span>
        </div>
        <div className="duracion-evento">{evento.duracion}</div>
      </div>

      <div className="bloque-informacion-evento">
        <div className="cabecera-informacion">
          <h3 className="titulo-evento">{evento.titulo}</h3>
          <span className={`indicador-estado ${obtenerClaseEstado(evento.estado)}`}>
            {evento.estado}
          </span>
        </div>

        <div className="ubicacion-evento">
          <Icon icon={ICONS.LOCATION_PIN} className="icono-decorativo" /> {evento.ubicacion}
        </div>

        <div className="listado-etiquetas">
          {evento.etiquetas.map((etiqueta, index) => (
            <span key={index} className="etiqueta-individual">{etiqueta}</span>
          ))}
        </div>
      </div>

      <div className="bloque-comensales-evento">
        <div className="contenedor-icono-comensales">
          <Icon icon={ICONS.USERS} />
        </div>
        <div className="datos-comensales">
          <span className="cantidad-comensales">{evento.comensales}</span>
          <span className="texto-comensales">comensales</span>
        </div>
        <button className="boton-detalles">
          <Icon icon={ICONS.ARROW_RIGHT} />
        </button>
      </div>

    </article>
  );
};

export default EventCard;