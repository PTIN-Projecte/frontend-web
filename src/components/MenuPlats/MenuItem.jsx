import React from 'react';
import './MenuItem.css';

// SVGs como componentes simples aquí mismo
const IconEditar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#df9148"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
    <path d="M16 5l3 3" />
  </svg>
);

const IconEliminar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#e46d5d"
  >
    <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
    <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
  </svg>
);

function MenuItem({ titulo, descripcion, alergenos, onEditar, onEliminar }) {
  return (
    <div className="menu-item-caja">

      {/* Botones de acción */}
      <div className="todo-izquierda">

        <div className="menu-item-acciones">
          <button onClick={onEditar} title="Editar">
            <IconEditar />
          </button>
          <button onClick={onEliminar} title="Eliminar">
            <IconEliminar />
          </button>
        </div>

        <div className="menu-item-texto">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
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
