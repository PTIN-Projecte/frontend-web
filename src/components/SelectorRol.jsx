import React from 'react';
import './SelectorRol.css';

export default function SelectorRol({ onSelect }) {
  return (
    <div className="role-overlay">
      <div className="role-modal">
        <div className="role-logo">CAL BLAY</div>
        <h2 className="role-title">Entrar como</h2>
        <p className="role-subtitle">Selecciona tu rol para depurar la vista</p>
        
        <div className="role-options">
          <button 
            className="role-option comercial"
            onClick={() => onSelect('comercial')}
          >
            <div className="role-name">Comercial</div>
            <div className="role-desc">Vista con edición</div>
          </button>
          
          <button 
            className="role-option produccion"
            onClick={() => onSelect('produccion')}
          >
            <div className="role-name">Producción</div>
            <div className="role-desc">Vista de lectura</div>
          </button>
        </div>
      </div>
    </div>
  );
}