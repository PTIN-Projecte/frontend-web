// ============================================================================
// COMPONENTE HIJO: PlatoCard
// ============================================================================
// Este componente es solo "una tarjeta". No sabe nada de la lista completa
// ni del buscador. Solo sabe dibujar un plato con los datos que le pasan.
// ============================================================================

import React from 'react';
import './PlatoCard.css';

// Las "props" (plato, seleccionado, onToggle) son como los parámetros de una función.
// El componente "padre" (ListaPlatos) se los inyecta.
export default function PlatoCard({ plato, seleccionado, onToggle }) {
  
  // --------------------------------------------------------------------------
  // LÓGICA DE LA TARJETA (Preparar los datos antes de dibujar)
  // --------------------------------------------------------------------------
  let etiquetasAMostrar = [];
  
  // Si desde el padre nos dicen que "seleccionado" es true (verdadero), añadimos la etiqueta verde.
  if (seleccionado) {
    etiquetasAMostrar.push({ tipo: 'menu', texto: 'En menú' });
  }
  
  // Si el plato (en la base de datos) ya trae una etiqueta (ej. "Nuevo"), también la añadimos.
  if (plato.etiqueta) {
    if (plato.etiqueta.tipo === 'nuevo') {
      etiquetasAMostrar.push({ tipo: 'nuevo', texto: 'Nuevo' });
    } else if (plato.etiqueta.tipo === 'evento') {
      etiquetasAMostrar.push({ tipo: 'evento', texto: 'En otro evento' });
    }
    // Ignoramos deliberadamente cualquier otra etiqueta que no sea 'nuevo' o 'evento'
  }

  // --------------------------------------------------------------------------
  // RENDER (Dibujamos la tarjeta en HTML/JSX)
  // --------------------------------------------------------------------------
  return (
    <div 
      // Si está seleccionado, añadimos una clase CSS extra para pintarlo verde
      className={`card-contenedor ${seleccionado ? 'seleccionado' : ''}`}
      
      // Cuando alguien haga clic en la tarjeta, avisamos al padre ejecutando onToggle
      onClick={onToggle}
    >
      {/* --- PARTE 1: LA IMAGEN Y SUS ETIQUETAS --- */}
      <div className="card-imagen-wrapper">
        <img src={plato.imagen} alt={plato.nombre} className="card-imagen" />
        
        {/* En React, usamos && para decir "Si esto es verdad, dibuja lo siguiente" */}
        {/* En este caso: Si hay etiquetas en la lista, dibuja el contenedor de etiquetas */}
        {etiquetasAMostrar.length > 0 && (
          <div className="etiquetas-wrapper">
            {/* Recorremos las etiquetas y dibujamos una "pastillita" visual para cada una */}
            {etiquetasAMostrar.map((etiq, idx) => (
              <div key={idx} className={`etiqueta etiqueta-${etiq.tipo}`}>
                {etiq.texto}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- PARTE 2: LOS TEXTOS Y BOTONES INFERIORES --- */}
      <div className="card-contenido">
        {/* Mostramos el nombre del plato y su descripción */}
        <h3>{plato.nombre}</h3>
        <p>{plato.descripcion}</p>
        
        {/* Alérgenos como etiquetas, encima de la categoría */}
        {plato.alergenos.length > 0 && (
          <div className="alergenos-tags">
            {plato.alergenos.map((alergeno, idx) => (
              <span key={idx} className="tag-alergeno">{alergeno}</span>
            ))}
          </div>
        )}

        <div className="card-footer">
          <div className="card-categoria-label">
            <span className="punto-gris"></span>
            {plato.categoria}
          </div>

          <button className="btn-opciones">...</button>
        </div>
      </div>
    </div>
  );
}