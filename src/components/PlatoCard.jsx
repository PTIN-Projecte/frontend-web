import React from 'react';
import '../styles/PlatoCard.css';

/**
 * @pre El objeto `plato` debe tener las propiedades básicas (nombre, descripcion, categoria, alergenos, imagen).
 * @post Se renderiza una tarjeta visual del plato.
 * @invariable La tarjeta no altera los datos del plato original.
 */
export default function PlatoCard({ plato, seleccionado, alHacerClic }) {
  
  let etiquetasAMostrar = [];
  
  if (seleccionado) {
    etiquetasAMostrar.push({ tipo: 'menu', texto: 'En menú' });
  }
  
  if (plato.etiqueta) {
    if (plato.etiqueta.tipo === 'nuevo') {
      etiquetasAMostrar.push({ tipo: 'nuevo', texto: 'Nuevo' });
    } else if (plato.etiqueta.tipo === 'evento') {
      etiquetasAMostrar.push({ tipo: 'evento', texto: 'En otro evento' });
    }
  }

  return (
    <div 
      className={`contenedor-tarjeta ${seleccionado ? 'seleccionado' : ''}`}
      onClick={alHacerClic}
    >
      <div className="contenedor-imagen-tarjeta">
        <img src={plato.imagen} alt={plato.nombre} className="imagen-tarjeta" />
        
        {etiquetasAMostrar.length > 0 && (
          <div className="contenedor-etiquetas">
            {etiquetasAMostrar.map((etiquetaActual, indice) => (
              <div key={indice} className={`etiqueta etiqueta-${etiquetaActual.tipo}`}>
                {etiquetaActual.texto}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="contenido-tarjeta">
        <h3>{plato.nombre}</h3>
        <p>{plato.descripcion}</p>
        
        {plato.alergenos.length > 0 && (
          <div className="etiquetas-alergenos">
            {plato.alergenos.map((alergeno, indice) => (
              <span key={indice} className="etiqueta-alergeno">{alergeno}</span>
            ))}
          </div>
        )}

        <div className="pie-tarjeta">
          <div className="etiqueta-concepto-tarjeta">
            <span className="punto-gris"></span>
            {plato.categoria}
          </div>

          <button className="boton-opciones">...</button>
        </div>
      </div>
    </div>
  );
}