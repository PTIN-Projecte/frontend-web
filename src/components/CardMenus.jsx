import React, { useState, useEffect } from 'react';
import './CardMenus.css';

export default function MenuCard({ menu, onModificar, onEliminar }) {
    const [menuVisible, setMenuVisible] = useState(false);
    
    useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuVisible && !e.target.closest('.opciones-desplegable') && !e.target.closest('.btn-opciones')) {
        setMenuVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuVisible]);

    let etiquetasAMostrar = [];
    
    if (menu.etiqueta) {
        if (menu.etiqueta.tipo === 'nuevo') {
            etiquetasAMostrar.push({ tipo: 'nuevo', texto: 'Nuevo' });
        } else if (menu.etiqueta.tipo === 'evento') {
            etiquetasAMostrar.push({ tipo: 'evento', texto: 'En otro evento' });
        }
    }

  const toggleMenuOpciones = (e) => {
    e.stopPropagation();
    setMenuVisible(!menuVisible);
  };

  // Navegación (para el futuro)
  const manejarNavegacion = () => {
    console.log("Navegando al detalle del menú:", menu.id);
  };

  return (
    <div className="card-contenedor" onClick={manejarNavegacion}>
      
      {/* IMAGEN Y ETIQUETAS */}
      <div className="card-imagen-wrapper">
        <img src={menu.imagen} alt={menu.nombre} className="card-imagen" />
        
        {/* Si hay etiquetas en la lista, dibuja el contenedor de etiquetas */}
        {etiquetasAMostrar.length > 0 && (
          <div className="etiquetas-wrapper">
            {etiquetasAMostrar.map((etiq, idx) => (
              <div key={idx} className={`etiqueta etiqueta-${etiq.tipo}`}>
                {etiq.texto}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="card-contenido">
        <h3>{menu.nombre}</h3>        

        <div className="card-footer">

            {/* Alérgenos */}
            <div className="alergenos-tags">
                {menu.alergenos.map((alergeno, idx) => (
                    <span key={idx} className="tag-alergeno">{alergeno}</span>
                ))}
            </div>


            {/* Botones */}
            <div style={{ position: 'relative' }}>

                <div className={`opciones-desplegable ${menuVisible ? 'visible' : ''}`}>
                    <button className="btn-cerrar-menu" onClick={(e) => { e.stopPropagation(); setMenuVisible(false); }}>×</button>
                    <button className="opcion-btn" onClick={(e) => { e.stopPropagation(); onModificar(menu); setMenuVisible(false); }}>Modificar</button>
                    <button className="opcion-btn" onClick={(e) => { e.stopPropagation(); onEliminar(menu.id); setMenuVisible(false); }}>Eliminar</button>
                </div>

                {/* BOTÓN OPCIONES (...) */}
                <button className="btn-opciones" onClick={toggleMenuOpciones}>...</button>
            </div>
            
        </div>
      </div>
    </div>
  );
}