const EventoSidebar = ({ titulo, fecha, color }) => {
  const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long'
  })

  return (
    <div
      className="evento"
      style={{ borderLeftColor: color }}
    >
      <h4>{titulo}</h4>
      <p>{fechaFormateada}</p>
    </div>
  )
}

export default EventoSidebar