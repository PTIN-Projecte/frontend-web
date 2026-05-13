import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './EventoInfo.css';
import EventoEdicion from './EventoEdicion';
import EventoDetalle from './EventoDetalle';
import { eventoDb } from '../data/dataEvento';

export default function EventoInfo() {

  const location = useLocation(); 

  const original = eventoDb[0];
  
  const [isEditing, setIsEditing] = useState(() => {
      return location.state?.wasEditing || false;
    });

  // Estado: Datos que se pueden modificar
  const [datos, setDatos] = useState({
    ...original,
    contacto: { ...original.contacto },
    recinto: { ...original.recinto }
  });


  // --- HANDLERS DE EDICIÓN ---

  // Actualizar campos normales
  const handleChange = (e, campo, subcampo = null) => {
  let valor = e.target.value;

  // Nombre mínimo 3 caracteres mientras escribe
  if (campo === 'nombre' && valor.length < 3 && valor.length > 0) {
  }

  // Filtro: Solo números para comensales y confirmados
  if (campo === 'comensales' || campo === 'confirmados') {
    valor = valor.replace(/[^0-9]/g, '');
  }

  if (subcampo) {
    setDatos(prev => ({ 
      ...prev, 
      [campo]: { ...prev[campo], [subcampo]: valor } 
    }));
  } else {
    setDatos(prev => ({ ...prev, [campo]: valor }));
  }
};

  // Formatear teléfono con espacios
  const handleTelefonoChange = (e) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 9);
    if (val.length > 6) val = `${val.slice(0,2)} ${val.slice(2,5)} ${val.slice(5)}`;
    else if (val.length > 2) val = `${val.slice(0,2)} ${val.slice(2)}`;
    setDatos(prev => ({ ...prev, contacto: { ...prev.contacto, telefono: val } }));
  };

  // Guardar cambios
  const handleGuardar = () => {
    // Validar nombre mínimo 3 caracteres
    if (datos.nombre.trim().length < 3) {
      alert("El nombre del evento debe tener al menos 3 caracteres.");
      return;
    }
    setIsEditing(false);
    console.log("Datos guardados:", datos);
    //De momento, más adelante enviar datos al backend
  };

  // Cancelar edición (dejarlo como estaba)
  const handleCancelar = () => {
    setDatos({
      ...original,
      contacto: { ...original.contacto },
      recinto: { ...original.recinto }
    });
    setIsEditing(false);
  };

  // --- HANDLERS DE NAVEGACIÓN (solo lectura) ---
  const handleConsultarDietas = () => console.log("Ver dietas");
  const handleVerMenu = () => console.log("Ver menú");
  const handleVerPeticiones = () => console.log("Ver peticiones");
  //De momento está en el console log, cambiar por la navegación

  return (
    <div className="layout-principal">
      
      {/* HEADER (siempre visible) */}
      <header className="header-superior">
        <div className="header-left">
          <span className="badge-comercial">Comercial</span>
        </div>
        <div className="logo">CAL BLAY</div>
        <nav className="nav-links">
          <span>DASHBOARD</span>
          <span>PETICIONES</span>
          <span>MENÚS</span>
          <span className="menu-hamburguesa">☰</span>
        </nav>
      </header>

      {/* CONTENIDO: Cambia entre Vista Lectura y Vista Edición */}
      <main className="contenido-evento">
        {isEditing ? (
          <EventoEdicion 
            datos={datos}
            onChange={handleChange}
            onTelefonoChange={handleTelefonoChange}
            onGuardar={handleGuardar}
            onCancel={handleCancelar}
          />
        ) : (
          <EventoDetalle 
            evento={datos}
            onEditar={() => setIsEditing(true)}
            onConsultarDietas={handleConsultarDietas}
            onVerMenu={handleVerMenu}
            onVerPeticiones={handleVerPeticiones}
          />
        )}
      </main>
    </div>
  );
}