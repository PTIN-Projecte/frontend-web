// ============================================================================
// COMPONENTE PRINCIPAL: ListaPlatos
// ============================================================================
// Aquí se manejan los datos (qué categoría está activa, qué hemos buscado...).
// ============================================================================

import React, { useState } from 'react';
// Importamos el prefab (PlatoCard) para usarlo dentro de esta grande
import PlatoCard from './PlatoCard';
import './ListaPlatos.css';
// Importamos nuestra base de datos inventada
import { platosDb, categorias, ingredientesLista, alergenosLista } from '../data/dataPlatos';

export default function ListaPlatos() {
  // --------------------------------------------------------------------------
  // ESTADOS DE REACT (Variables que, al cambiar, actualizan la pantalla)
  // --------------------------------------------------------------------------
  // useState funciona así: [variable, funcionParaCambiarLaVariable] = useState(valorInicial);

  // Saber qué categoría (ej. "Entrantes") ha pulsado el usuario.
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  // Saber qué texto ha escrito el usuario en el buscador.
  const [busqueda, setBusqueda] = useState("");

  // Listas para saber qué filtros ha marcado en la barra lateral.
  const [ingredientesFiltro, setIngredientesFiltro] = useState([]);
  const [alergenosFiltro, setAlergenosFiltro] = useState([]);

  // Lista de los IDs de los platos que el usuario ha seleccionado (En menú).
  const [menuSeleccionados, setMenuSeleccionados] = useState([]);

  // --------------------------------------------------------------------------
  // FUNCIONES Y LÓGICA
  // --------------------------------------------------------------------------

  // Función para meter o sacar un plato del menú cuando le hacemos clic.
  const toggleMenu = (id) => {
    setMenuSeleccionados(prev =>
      // Si el plato ya estaba en la lista, lo quitamos. Si no estaba, lo añadimos.
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  // Estados para abrir o cerrar los menús desplegables del lateral
  const [mostrarIngredientes, setMostrarIngredientes] = useState(false);
  const [mostrarAlergenos, setMostrarAlergenos] = useState(false);

  // Funciones para marcar/desmarcar casillas de filtros
  const toggleIngrediente = (ingrediente) => {
    setIngredientesFiltro(prev =>
      prev.includes(ingrediente) ? prev.filter(i => i !== ingrediente) : [...prev, ingrediente]
    );
  };

  const toggleAlergeno = (alergeno) => {
    setAlergenosFiltro(prev =>
      prev.includes(alergeno) ? prev.filter(a => a !== alergeno) : [...prev, alergeno]
    );
  };

  // Función para dejar todo como al principio
  const limpiarFiltros = () => {
    setCategoriaActiva("Todos");
    setBusqueda("");
    setIngredientesFiltro([]);
    setAlergenosFiltro([]);
  };

  // --- EL CEREBRO DE LOS FILTROS ---
  // Esta función decide si un plato debe mostrarse basándose en lo que hemos buscado/marcado.
  const cumpleFiltrosBase = (plato) => {
    // ¿El nombre del plato incluye el texto del buscador?
    const cumpleBusqueda = plato.nombre.toLowerCase().includes(busqueda.toLowerCase());

    // ¿Tiene los ingredientes marcados? (Si no hay nada marcado, pasa el filtro)
    const cumpleIngredientes = ingredientesFiltro.length === 0 || plato.ingredientes.some(ing => ingredientesFiltro.includes(ing));

    // ¿Tiene los alérgenos marcados?
    const cumpleAlergenos = alergenosFiltro.length === 0 || !plato.alergenos.some(aler => alergenosFiltro.includes(aler));

    return cumpleBusqueda && cumpleIngredientes && cumpleAlergenos;
  };

  // Cogemos toda la base de datos (platosDb) y nos quedamos solo con los que cumplen los filtros.
  const platosFiltrados = platosDb.filter(plato => {
    let cumpleCategoria = false;
    if (categoriaActiva === "Todos") cumpleCategoria = true;
    else if (categoriaActiva === "En menú") cumpleCategoria = menuSeleccionados.includes(plato.id);
    else cumpleCategoria = plato.categoria === categoriaActiva;

    return cumpleCategoria && cumpleFiltrosBase(plato);
  });

  // Función para calcular cuántos platos hay en cada categoría (el numerito gris)
  const obtenerConteoCategoria = (categoria) => {
    return platosDb.filter(plato => {
      let cumpleCategoria = false;
      if (categoria === "Todos") cumpleCategoria = true;
      else if (categoria === "En menú") cumpleCategoria = menuSeleccionados.includes(plato.id);
      else cumpleCategoria = plato.categoria === categoria;

      return cumpleCategoria && cumpleFiltrosBase(plato);
    }).length;
  };

  // --------------------------------------------------------------------------
  // RENDER (LO QUE SE VE EN PANTALLA, escrito en JSX - mezcla de HTML y JS)
  // --------------------------------------------------------------------------
  return (
    <div className="layout-principal">
      {/* BARRA LATERAL (SIDEBAR) */}
      <aside className="sidebar">
        <h3 className="sidebar-titulo">CATEGORÍAS</h3>
        <ul className="lista-categorias">
          {/* El .map() sirve para crear una lista repitiendo un bloque de HTML por cada elemento */}
          {["Todos", "En menú", ...categorias.filter(c => c !== "Todos")].map(cat => {
            const numeroPlatos = obtenerConteoCategoria(cat);
            return (
              <li
                key={cat} // En React, los elementos repetidos necesitan una 'key' única
                className={categoriaActiva === cat ? "activo" : ""}
                onClick={() => setCategoriaActiva(cat)} // Al hacer clic, cambiamos el estado
              >
                {cat}
                <span className="contador">{numeroPlatos}</span>
              </li>
            );
          })}
        </ul>

        {/* --- DESPLEGABLE INGREDIENTES --- */}
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

        {/* --- DESPLEGABLE ALÉRGENOS --- */}
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

        <button className="btn-limpiar" onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </aside>

      {/* CONTENIDO PRINCIPAL (DERECHA) */}
      <main className="contenido-principal">
        <header className="cabecera-pagina">
          <h1>Lista de Platos Cal Blay: todas nuestras formas de disfrutar de la buena gastronomía</h1>
          <p>En Cal Blay, creemos que comer es mucho más que alimentarse; es una forma de celebrar la vida...</p>

          <div className="controles-superiores">
            <div className="buscador-wrapper">
              <input
                type="text"
                placeholder="Buscar un plato..."
                value={busqueda}
                // (e.target.value) es el texto que acabamos de escribir en el teclado
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            <button className="btn-nuevo-plato">+ Nuevo plato</button>
          </div>
        </header>

        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">
            <span>{categoriaActiva === "Todos" ? "Todos los platos" : categoriaActiva}</span>
          </h2>
        </div>

        {/* LA CUADRÍCULA CON LAS TARJETAS DE PLATOS */}
        <div className="grid-platos">
          {/* Recorremos la lista de platos que han superado los filtros y pintamos una tarjeta para cada uno */}
          {platosFiltrados.map(plato => (
            // Invocamos a nuestro componente 'PlatoCard'. 
            // Las cosas que le pasamos (plato, seleccionado, onToggle) se llaman "Props".
            <PlatoCard
              key={plato.id}
              plato={plato}
              seleccionado={menuSeleccionados.includes(plato.id)} // ¿Está su ID en la lista de menú? -> true/false
              onToggle={() => toggleMenu(plato.id)} // Le pasamos la función para que el hijo (la tarjeta) pueda avisar al padre (este archivo) de que han hecho clic.
            />
          ))}
        </div>
      </main>
    </div>
  );
}