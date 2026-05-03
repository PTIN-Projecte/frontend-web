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
            <img 
              key={index} 
              src={alergeno.icono} 
              alt={alergeno.nombre} 
              title={alergeno.nombre} /* Truco: así al pasar el ratón por encima saldrá el nombre */
              style={{ width: '35px', height: '35px', marginLeft: '8px' }} /* Para asegurarnos de que no salgan gigantes */
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItem;


{/* Así le decimos a React que es una imagen */}
