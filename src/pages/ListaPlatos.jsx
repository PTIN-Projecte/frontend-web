import React, { useState } from 'react';
import PlatoCard from '../components/PlatoCard';
import '../styles/ListaPlatos.css';
import { platosDb, categorias, ingredientesLista, alergenosLista } from '../assets/dataPlatos';

export default function ListaPlatos() {

  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [textoBuscado, setTextoBuscado] = useState("");
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
  const [alergenosSeleccionados, setAlergenosSeleccionados] = useState([]);
  const [platosEnMenu, setPlatosEnMenu] = useState([]);

  const [desplegarIngredientes, setDesplegarIngredientes] = useState(false);
  const [desplegarAlergenos, setDesplegarAlergenos] = useState(false);

  /**
   * @pre El ID pasado debe pertenecer a un plato válido.
   * @post Si el ID estaba en el menú, se elimina; si no estaba, se añade.
   * @invariable El resto de platos en el menú no sufren modificaciones.
   */
  const alternarPlatoEnMenu = (id) => {
    if (platosEnMenu.includes(id)) {
      setPlatosEnMenu(platosEnMenu.filter(platoId => platoId !== id));
    } else {
      setPlatosEnMenu([...platosEnMenu, id]);
    }
  };

  /**
   * @pre Se recibe una cadena de texto correspondiente a un ingrediente.
   * @post El ingrediente se añade a la lista de seleccionados si no estaba, o se elimina si ya estaba.
   * @invariable Los demás filtros de ingredientes se mantienen iguales.
   */
  const alternarIngrediente = (ingrediente) => {
    if (ingredientesSeleccionados.includes(ingrediente)) {
      setIngredientesSeleccionados(ingredientesSeleccionados.filter(i => i !== ingrediente));
    } else {
      setIngredientesSeleccionados([...ingredientesSeleccionados, ingrediente]);
    }
  };

  /**
   * @pre Se recibe una cadena de texto correspondiente a un alérgeno.
   * @post El alérgeno se añade a la lista de seleccionados si no estaba, o se elimina si ya estaba.
   * @invariable Los demás filtros de alérgenos se mantienen iguales.
   */
  const alternarAlergeno = (alergeno) => {
    if (alergenosSeleccionados.includes(alergeno)) {
      setAlergenosSeleccionados(alergenosSeleccionados.filter(a => a !== alergeno));
    } else {
      setAlergenosSeleccionados([...alergenosSeleccionados, alergeno]);
    }
  };

  /**
   * @pre No hay restricciones iniciales de estado.
   * @post Todos los estados de filtrado se devuelven a sus valores por defecto (vacíos o "Todos").
   * @invariable La base de datos original de platos se mantiene intacta.
   */
  const limpiarTodosLosFiltros = () => {
    setCategoriaActiva("Todos");
    setTextoBuscado("");
    setIngredientesSeleccionados([]);
    setAlergenosSeleccionados([]);
  };

  /**
   * @pre El objeto plato debe tener propiedades nombre, ingredientes y alergenos definidas.
   * @post Retorna true si el plato cumple con los criterios de texto, ingredientes y alérgenos actuales, o false si no.
   * @invariable No modifica el estado global ni las propiedades del plato.
   */
  const elPlatoPasaLosFiltros = (plato) => {
    const pasaFiltroTexto = plato.nombre.toLowerCase().includes(textoBuscado.toLowerCase());

    let pasaFiltroIngredientes = true;
    if (ingredientesSeleccionados.length > 0) {
      pasaFiltroIngredientes = plato.ingredientes.some(ingrediente => ingredientesSeleccionados.includes(ingrediente));
    }

    let pasaFiltroAlergenos = true;
    if (alergenosSeleccionados.length > 0) {
      pasaFiltroAlergenos = !plato.alergenos.some(alergeno => alergenosSeleccionados.includes(alergeno));
    }

    return pasaFiltroTexto && pasaFiltroIngredientes && pasaFiltroAlergenos;
  };

  const platosMostrados = platosDb.filter(plato => {
    let pasaFiltroCategoria = false;

    if (categoriaActiva === "Todos") {
      pasaFiltroCategoria = true;
    } else if (categoriaActiva === "En menú") {
      pasaFiltroCategoria = platosEnMenu.includes(plato.id);
    } else {
      pasaFiltroCategoria = plato.categoria === categoriaActiva;
    }

    return pasaFiltroCategoria && elPlatoPasaLosFiltros(plato);
  });

  /**
   * @pre Recibe una categoría válida o los valores especiales "Todos" o "En menú".
   * @post Devuelve un número entero con la cantidad de platos que pertenecen a esa categoría y pasan los filtros actuales.
   * @invariable La lista de platos actual y los filtros activos permanecen inalterados.
   */
  const contarPlatosPorCategoria = (categoria) => {
    const platosDeEsaCategoria = platosDb.filter(plato => {
      let pasaFiltroCategoria = false;

      if (categoria === "Todos") {
        pasaFiltroCategoria = true;
      } else if (categoria === "En menú") {
        pasaFiltroCategoria = platosEnMenu.includes(plato.id);
      } else {
        pasaFiltroCategoria = plato.categoria === categoria;
      }

      return pasaFiltroCategoria && elPlatoPasaLosFiltros(plato);
    });

    return platosDeEsaCategoria.length;
  };

  return (
    <div className="estructura-principal">
      <aside className="barra-lateral">
        <h3 className="titulo-barra-lateral">CATEGORÍAS</h3>
        <ul className="lista-conceptos">
          {["Todos", "En menú", ...categorias.filter(c => c !== "Todos")].map(categoria => {
            const numeroPlatos = contarPlatosPorCategoria(categoria);
            return (
              <li
                key={categoria}
                className={categoriaActiva === categoria ? "activo" : ""}
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
                <span className="contador">{numeroPlatos}</span>
              </li>
            );
          })}
        </ul>

        <div
          className={`cabecera-desplegable ${desplegarIngredientes ? 'abierto' : ''}`}
          onClick={() => setDesplegarIngredientes(!desplegarIngredientes)}
        >
          <span>INGREDIENTES</span>
          <span className="icono-flecha">{desplegarIngredientes ? '▲' : '▼'}</span>
        </div>

        <div className={`contenido-desplegable ${desplegarIngredientes ? 'abierto' : ''}`}>
          <div className="filtros-casillas">
            {ingredientesLista.map(ingrediente => (
              <label key={ingrediente} className="elemento-casilla">
                <input
                  type="checkbox"
                  checked={ingredientesSeleccionados.includes(ingrediente)}
                  onChange={() => alternarIngrediente(ingrediente)}
                />
                <span>{ingrediente}</span>
              </label>
            ))}
          </div>
        </div>

        <div
          className={`cabecera-desplegable ${desplegarAlergenos ? 'abierto' : ''}`}
          onClick={() => setDesplegarAlergenos(!desplegarAlergenos)}
        >
          <span>ALÉRGENOS</span>
          <span className="icono-flecha">{desplegarAlergenos ? '▲' : '▼'}</span>
        </div>

        <div className={`contenido-desplegable ${desplegarAlergenos ? 'abierto' : ''}`}>
          <div className="filtros-casillas">
            {alergenosLista.map(alergeno => (
              <label key={alergeno} className="elemento-casilla">
                <input
                  type="checkbox"
                  checked={alergenosSeleccionados.includes(alergeno)}
                  onChange={() => alternarAlergeno(alergeno)}
                />
                <span>{alergeno}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="boton-limpiar" onClick={limpiarTodosLosFiltros}>
          Limpiar filtros
        </button>
      </aside>

      <main className="contenido-principal">
        <header className="cabecera-pagina">
          <h1>Lista de Platos Cal Blay: todas nuestras formas de disfrutar de la buena gastronomía</h1>
          <p>En Cal Blay, creemos que comer es mucho más que alimentarse; es una forma de celebrar la vida...</p>

          <div className="controles-superiores">
            <div className="contenedor-buscador">
              <input
                type="text"
                placeholder="Buscar un plato..."
                value={textoBuscado}
                onChange={(evento) => setTextoBuscado(evento.target.value)}
              />
            </div>
            <button className="boton-nuevo-plato">+ Nuevo plato</button>
          </div>
        </header>

        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">
            <span>{categoriaActiva === "Todos" ? "Todos los platos" : categoriaActiva}</span>
          </h2>
        </div>

        <div className="cuadricula-platos">
          {platosMostrados.map(plato => (
            <PlatoCard
              key={plato.id}
              plato={plato}
              seleccionado={platosEnMenu.includes(plato.id)}
              alHacerClic={() => alternarPlatoEnMenu(plato.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}