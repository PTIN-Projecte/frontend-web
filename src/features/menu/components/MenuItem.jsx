import React from 'react';

function MenuItem({ titulo, descripcion, alergenos }) {
  return (
    <div className="menu-item-caja">
      <div className="menu-item-texto">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
      
      {/* Comprobamos que haya alérgenos antes de dibujarlos */}
      {alergenos && (
        <div className="menu-item-alergenos">
          {alergenos.map((alergeno, index) => (
            <span 
              key={index} 
              className="icono-alergeno"
              title={alergeno.nombre} /* para que salga el nombre del alergeno al pasar el ratón por encima del incono */
            >
              {alergeno.icono}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItem;