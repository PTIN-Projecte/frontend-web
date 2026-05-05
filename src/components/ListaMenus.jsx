import React, { useState } from 'react';
import CardMenus from './CardMenus';
import './ListaMenus.css';
import { menusDb, ingredientesLista, alergenosLista } from '../data/dataMenus';

export default function ListaMenus() {
  // Texto del buscador
  const [busqueda, setBusqueda] = useState("");

  // Filtros de la barra lateral
  const [ingredientesFiltro, setIngredientesFiltro] = useState([]);
  const [alergenosFiltro, setAlergenosFiltro] = useState([]);

  //Estados para saber si abrimos o cerramos el menú desplegable
  const [mostrarIngredientes, setMostrarIngredientes] = useState(false);
  const [mostrarAlergenos, setMostrarAlergenos] = useState(false);

  // Toggle para checkboxes de ingredientes
  const toggleIngrediente = (ingrediente) => {
    setIngredientesFiltro(prev =>
      prev.includes(ingrediente) 
        ? prev.filter(i => i !== ingrediente) 
        : [...prev, ingrediente]
    );
  };

  // Toggle para checkboxes de alérgenos
  const toggleAlergeno = (alergeno) => {
    setAlergenosFiltro(prev =>
      prev.includes(alergeno) 
        ? prev.filter(a => a !== alergeno) 
        : [...prev, alergeno]
    );
  };

  // Resetear todos los filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setIngredientesFiltro([]);
    setAlergenosFiltro([]);
  };

  // --- FILTRADO BASE (búsqueda + ingredientes + alérgenos) ---
  const cumpleFiltrosBase = (menu) => {
    // Búsqueda por nombre
    const cumpleBusqueda = menu.nombre.toLowerCase().includes(busqueda.toLowerCase());

    // Ingredientes: si hay filtros marcados, el menú debe tener AL MENOS uno de ellos
    const cumpleIngredientes = ingredientesFiltro.length === 0 || 
      menu.ingredientes.some(ing => ingredientesFiltro.includes(ing));

    // Alérgenos: si hay filtros marcados, el menú NO debe tener NINGUNO de ellos
    // (normalmente filtras para EXCLUIR alérgenos)
    const cumpleAlergenos = alergenosFiltro.length === 0 || 
      !menu.alergenos.some(aler => alergenosFiltro.includes(aler));

    return cumpleBusqueda && cumpleIngredientes && cumpleAlergenos;
  };

  // Aplicar filtros a la base de datos completa
  const menusFiltrados = menusDb.filter(menu => cumpleFiltrosBase(menu));

  /* Modificar y Eliminar del botón opciones */  
  const handleModificar = (menu) => {
    console.log("Modificar menú:", menu.id);  //De momento esto lo muestra por consola (Inspeccionar)
    // Aquí iría la navegación hacia la otra pantalla
  };

  const handleEliminar = (id) => {
    console.log("Eliminar menú:", id);  //De momento esto lo muestra por consola (Inspeccionar)
    // Aquí iría la navegación hacia la otra pantalla
  };

  const handleAñadirMenu = () => {
    console.log("Añadir nuevo menú");
    // Aquí iría la navegación hacia la otra pantalla
  };


  /* Lo que se ve en pantalla */
  return (
    <div className="layout-principal">
      
      {/* ================= BARRA LATERAL ================= */}
      <aside className="sidebar">
        
        {/* INGREDIENTES (desplegable) */}
        <div
          className={`desplegable-header ${mostrarIngredientes ? 'abierto' : ''}`}
          onClick={() => setMostrarIngredientes(!mostrarIngredientes)}
        >
          <span>INGREDIENTES</span>
          <span className="icono-flecha">{mostrarIngredientes ? '▲' : '▼'}</span>
        </div>

        <div className={`desplegable-contenido ${mostrarIngredientes ? 'abierto' : ''}`}>
          <div className="filtros-checkbox">
            {ingredientesLista.map(ing => (
              <label key={ing} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={ingredientesFiltro.includes(ing)}
                  onChange={() => toggleIngrediente(ing)}
                />
                <span>{ing}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ALÉRGENOS (desplegable) */}
        <div
          className={`desplegable-header ${mostrarAlergenos ? 'abierto' : ''}`}
          onClick={() => setMostrarAlergenos(!mostrarAlergenos)}
        >
          <span>ALÉRGENOS</span>
          <span className="icono-flecha">{mostrarAlergenos ? '▲' : '▼'}</span>
        </div>

        <div className={`desplegable-contenido ${mostrarAlergenos ? 'abierto' : ''}`}>
          <div className="filtros-checkbox">
            {alergenosLista.map(alergeno => (
              <label key={alergeno} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={alergenosFiltro.includes(alergeno)}
                  onChange={() => toggleAlergeno(alergeno)}
                />
                <span>{alergeno}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Botón limpiar */}
        <button className="btn-limpiar" onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </aside>


      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className="contenido-principal">
        
        {/* Header superior con logo y navegación */}
        <header className="cabecera-pagina">
            <h1>Lista de Menús Cal Blay: todas nuestras formas de disfrutar de la buena gastronomía</h1>
            <p>En Cal Blay, creemos que comer es mucho más que alimentarse; es una forma de celebrar la vida...</p>

            {/* Controles: Buscador + Botón */}
            <div className="controles-superiores">
            <div className="buscador-wrapper">
                <input
                type="text"
                placeholder="Buscar menú..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>
            <button
              className="btn-anadir-menu"
              onClick={handleAñadirMenu}>Añadir Menú
            </button>
            </div>
        </header>


        {/* GRID DE TARJETAS */}
        <div className="grid-platos">
          {menusFiltrados.map(menu => (
            <CardMenus
              key={menu.id}
              menu={menu}
              onModificar={handleModificar}
              onEliminar={handleEliminar}
            />
          ))}
        </div>


        {/* Mensaje si no hay resultados */}
        {menusFiltrados.length === 0 && (
          <div className="no-results-container">
            <div className="no-results-icon">🔍</div>
            <p className="no-results-title">Sin resultados</p>
            <p className="no-results-message">
              No se han encontrado menús con esa búsqueda o filtros.
            </p>
            <button className="btn-limpiar-filtros" onClick={limpiarFiltros}>
              Limpiar filtros
            </button>
          </div>
        )}

      </main>
    </div>
  );
}