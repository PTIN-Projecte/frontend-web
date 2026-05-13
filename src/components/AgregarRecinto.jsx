import React, { useState } from 'react';
import './AgregarRecinto.css';

// Lista simulada de recintos existentes para validar duplicados
const RECINTOS_EXISTENTES = [
  "Sala Principal Planta 1",
  "Sala Blava - Planta Baja",
  "Terraza Exterior"
];

export default function AgregarRecinto({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    cp: '',
    capacidad: ''
  });

  const [errorModal, setErrorModal] = useState({ isOpen: false, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarYGuardar = () => {
    // Validar Capacidad
    if (!formData.capacidad || Number(formData.capacidad) <= 0) {
      setErrorModal({ isOpen: true, message: "La capacidad tiene que ser un número superior a 0." });
      return;
    }

    // Validar Nombre Repetido
    if (RECINTOS_EXISTENTES.includes(formData.nombre.trim())) {
      setErrorModal({ isOpen: true, message: `El "Nombre Identificador" dado ya existe, cámbielo.` });
      return;
    }

    // Validar Código Postal (5 dígitos)
    const cpRegex = /^\d{5}$/;
    if (!cpRegex.test(formData.cp.trim())) {
      setErrorModal({ isOpen: true, message: "Código Postal Incorrecto." });
      return;
    }

    // Si todo está bien
    onAdd(formData);
  };

  return (
    <>
      {/* MODAL PRINCIPAL */}
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-recinto" onClick={e => e.stopPropagation()}>
          <h2 className="modal-recinto-title">Agregar nuevo recinto</h2>

          <div className="form-recinto">
            <div className="form-row">
              <label>Nombre Identificador:</label>
              <input 
                type="text" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                placeholder="Ej: Carpa Este - Privé"
              />
            </div>
            
            <div className="form-row">
              <label>Dirección:</label>
              <input 
                type="text" 
                name="direccion" 
                value={formData.direccion} 
                onChange={handleChange} 
                placeholder="Ej: Calle Falsa 123, 2º B, 28001 Madrid, España"
              />
            </div>

            <div className="form-row">
              <label>Código Postal:</label>
              <input 
                type="text" 
                name="cp" 
                value={formData.cp} 
                onChange={handleChange} 
                placeholder="Ej: 08001"
              />
            </div>

            <div className="form-row">
              <label>Capacidad:</label>
              <input 
                type="number" 
                name="capacidad" 
                value={formData.capacidad} 
                onChange={handleChange} 
                placeholder="Ej: 200"
              />
            </div>
          </div>

          <div className="modal-recinto-buttons">
            <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
            <button className="btn-guardar" onClick={validarYGuardar}>Añadir</button>
          </div>
        </div>
      </div>

      {/* MODAL DE ERROR (Superpuesto) */}
      {errorModal.isOpen && (
        <div className="modal-overlay-error" onClick={() => setErrorModal({ isOpen: false, message: '' })}>
          <div className="modal-error-box" onClick={e => e.stopPropagation()}>
            <div className="icono-error">!</div>
            <p>{errorModal.message}</p>
            <button 
              className="btn-cerrar-error" 
              onClick={() => setErrorModal({ isOpen: false, message: '' })}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}