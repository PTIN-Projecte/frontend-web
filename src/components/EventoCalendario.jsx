import React from 'react';

const EventoCalendario = ({ info }) => {
  // Extraemos el color de los datos del evento
  const borderColor = info.event.backgroundColor || info.event.extendedProps.color || 'var(--accent-color)';

  // Función para formatear la hora a HH:mm
  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    });
  };

  // Obtenemos inicio y fin directamente del objeto event
  const startTime = formatTime(info.event.start);
  const endTime = formatTime(info.event.end);

  return (
    <div className="custom-event-content" style={{ borderLeftColor: borderColor }}>
      <p className="event-title">{info.event.title}</p>
      <p className="event-time">
        {startTime}{endTime ? ` - ${endTime}` : ''}
      </p>
    </div>
  );
};

export default EventoCalendario;