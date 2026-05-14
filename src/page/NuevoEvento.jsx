import React from 'react';
import '../styles/NuevoEvento.css';
export default function NuevoEvento() {
  return (
    <div className="contenedor-evento">
      <div className="header-seccion">
        <h1>
            Nuevo evento:
        </h1>
        <hr className="linea-separadora" />
      </div>
      
      <div className="formulario-card">
        <div className="campo">
          <label>Nombre del evento:</label>
          <input type="text" placeholder="Boda Felipe y Maria" />
        </div>

        <div className="campo">
          <label>Seleccionar fecha:</label>
          <input type="date" />
        </div>

        <div className="campo">
          <label>Ubicación:</label>
          <input type="text" placeholder="Polideportivo Vilanova" />
        </div>

        <div className="botones">
          <button className="btn-cancelar">CANCELAR</button>
          <button className="btn-continuar">CONTINUAR</button>
        </div>
      </div>
    </div>
  );
}