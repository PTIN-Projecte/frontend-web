import React, { useState } from 'react';
import PlatoCard from '../components/PlatoCard';
import '../styles/ListaPlatos.css';
import { platosDb, categorias, ingredientesLista, alergenosLista } from '../assets/dataPlatos';

/**
 * @pre Ninguna
 * @post Se renderiza el componente ListaPlatos con su barra lateral y cuadrícula.
 */
export default function ListaPlatos() {

  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [textoBuscado, setTextoBuscado] = useState("");
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
  const [alergenosSeleccionados, setAlergenosSeleccionados] = useState([]);
  const [platosEnMenu, setPlatosEnMenu] = useState([]);

  const [desplegarIngredientes, setDesplegarIngredientes] = useState(false);
  const [desplegarAlergenos, setDesplegarAlergenos] = useState(false);

  /**
   * @pre idDelPlato debe ser un identificador válido.
   * @post Si idDelPlato estaba en el menú, se elimina. Si no, se añade.
   */
  function alternarPlatoEnMenu(idDelPlato) {
    const yaEstaEnMenu = platosEnMenu.includes(idDelPlato);
    
    if (yaEstaEnMenu === true) {
      let nuevaListaMenu = [];
      for (let i = 0; i < platosEnMenu.length; i++) {
        if (platosEnMenu[i] !== idDelPlato) {
          nuevaListaMenu.push(platosEnMenu[i]);
        }
      }
      setPlatosEnMenu(nuevaListaMenu);
    } else {
      let nuevaListaMenu = [];
      for (let i = 0; i < platosEnMenu.length; i++) {
        nuevaListaMenu.push(platosEnMenu[i]);
      }
      nuevaListaMenu.push(idDelPlato);
      setPlatosEnMenu(nuevaListaMenu);
    }
  }

  /**
   * @pre nombreIngrediente es un string válido.
   * @post nombreIngrediente se añade o se elimina de ingredientesSeleccionados.
   */
  function alternarIngrediente(nombreIngrediente) {
    const yaEstaSeleccionado = ingredientesSeleccionados.includes(nombreIngrediente);
    
    if (yaEstaSeleccionado === true) {
      let nuevaLista = [];
      for (let i = 0; i < ingredientesSeleccionados.length; i++) {
        if (ingredientesSeleccionados[i] !== nombreIngrediente) {
          nuevaLista.push(ingredientesSeleccionados[i]);
        }
      }
      setIngredientesSeleccionados(nuevaLista);
    } else {
      let nuevaLista = [];
      for (let i = 0; i < ingredientesSeleccionados.length; i++) {
        nuevaLista.push(ingredientesSeleccionados[i]);
      }
      nuevaLista.push(nombreIngrediente);
      setIngredientesSeleccionados(nuevaLista);
    }
  }

  /**
   * @pre nombreAlergeno es un string válido.
   * @post nombreAlergeno se añade o se elimina de alergenosSeleccionados.
   */
  function alternarAlergeno(nombreAlergeno) {
    const yaEstaSeleccionado = alergenosSeleccionados.includes(nombreAlergeno);
    
    if (yaEstaSeleccionado === true) {
      let nuevaLista = [];
      for (let i = 0; i < alergenosSeleccionados.length; i++) {
        if (alergenosSeleccionados[i] !== nombreAlergeno) {
          nuevaLista.push(alergenosSeleccionados[i]);
        }
      }
      setAlergenosSeleccionados(nuevaLista);
    } else {
      let nuevaLista = [];
      for (let i = 0; i < alergenosSeleccionados.length; i++) {
        nuevaLista.push(alergenosSeleccionados[i]);
      }
      nuevaLista.push(nombreAlergeno);
      setAlergenosSeleccionados(nuevaLista);
    }
  }

  /**
   * @pre Ninguna.
   * @post Se restablecen los estados de los filtros a sus valores por defecto.
   */
  function limpiarTodosLosFiltros() {
    setCategoriaActiva("Todos");
    setTextoBuscado("");
    setIngredientesSeleccionados([]);
    setAlergenosSeleccionados([]);
  }

  /**
   * @pre plato es un objeto válido.
   * @post Retorna true si cumple con textoBuscado, ingredientesSeleccionados y alergenosSeleccionados.
   */
  function elPlatoPasaLosFiltros(plato) {
    const nombreEnMinusculas = plato.nombre.toLowerCase();
    const buscadoEnMinusculas = textoBuscado.toLowerCase();
    const pasaFiltroTexto = nombreEnMinusculas.includes(buscadoEnMinusculas);

    let pasaFiltroIngredientes = true;
    if (ingredientesSeleccionados.length > 0) {
      pasaFiltroIngredientes = false;
      for (let i = 0; i < plato.ingredientes.length; i++) {
        if (ingredientesSeleccionados.includes(plato.ingredientes[i])) {
          pasaFiltroIngredientes = true;
        }
      }
    }

    let pasaFiltroAlergenos = true;
    if (alergenosSeleccionados.length > 0) {
      let tieneAlergenoProhibido = false;
      for (let i = 0; i < plato.alergenos.length; i++) {
        if (alergenosSeleccionados.includes(plato.alergenos[i])) {
          tieneAlergenoProhibido = true;
        }
      }
      if (tieneAlergenoProhibido === true) {
        pasaFiltroAlergenos = false;
      }
    }

    return pasaFiltroTexto && pasaFiltroIngredientes && pasaFiltroAlergenos;
  }

  let platosMostrados = [];
  for (let i = 0; i < platosDb.length; i++) {
    let plato = platosDb[i];
    let pasaFiltroCategoria = false;

    if (categoriaActiva === "Todos") {
      pasaFiltroCategoria = true;
    } else if (categoriaActiva === "En menú") {
      if (platosEnMenu.includes(plato.id)) {
        pasaFiltroCategoria = true;
      }
    } else {
      if (plato.categoria === categoriaActiva) {
        pasaFiltroCategoria = true;
      }
    }

    if (pasaFiltroCategoria === true) {
      if (elPlatoPasaLosFiltros(plato) === true) {
        platosMostrados.push(plato);
      }
    }
  }

  /**
   * @pre categoria es un string válido.
   * @post Retorna el número de platos que cumplen los filtros actuales en dicha categoría.
   */
  function contarPlatosPorCategoria(categoria) {
    let conteo = 0;
    for (let i = 0; i < platosDb.length; i++) {
      let plato = platosDb[i];
      let pasaFiltroCategoria = false;

      if (categoria === "Todos") {
        pasaFiltroCategoria = true;
      } else if (categoria === "En menú") {
        if (platosEnMenu.includes(plato.id)) {
          pasaFiltroCategoria = true;
        }
      } else {
        if (plato.categoria === categoria) {
          pasaFiltroCategoria = true;
        }
      }

      if (pasaFiltroCategoria === true) {
        if (elPlatoPasaLosFiltros(plato) === true) {
          conteo++;
        }
      }
    }
    return conteo;
  }
  
  /**
   * @pre evento es un objeto del DOM.
   * @post Actualiza el estado textoBuscado.
   */
  function manejarCambioTextoBuscador(evento) {
    setTextoBuscado(evento.target.value);
  }
  
  /**
   * @pre Ninguna.
   * @post Alterna desplegarIngredientes.
   */
  function abrirOCerrarIngredientes() {
    setDesplegarIngredientes(!desplegarIngredientes);
  }
  
  /**
   * @pre Ninguna.
   * @post Alterna desplegarAlergenos.
   */
  function abrirOCerrarAlergenos() {
    setDesplegarAlergenos(!desplegarAlergenos);
  }

  let listaCategoriasElementos = [];
  let opcionesCategoria = ["Todos", "En menú"];
  for (let i = 0; i < categorias.length; i++) {
    if (categorias[i] !== "Todos") {
      opcionesCategoria.push(categorias[i]);
    }
  }

  for (let i = 0; i < opcionesCategoria.length; i++) {
    let categoria = opcionesCategoria[i];
    let numeroPlatos = contarPlatosPorCategoria(categoria);
    
    let claseCategoria = "";
    if (categoriaActiva === categoria) {
      claseCategoria = "activo";
    }
    
    listaCategoriasElementos.push(
      <li key={categoria} className={claseCategoria} onClick={function() { setCategoriaActiva(categoria) }}>
        {categoria}
        <span className="contador">{numeroPlatos}</span>
      </li>
    );
  }

  let claseCabeceraIngredientes = "cabecera-desplegable";
  let claseContenidoIngredientes = "contenido-desplegable";
  let flechaIngredientes = "▼";
  if (desplegarIngredientes === true) {
    claseCabeceraIngredientes = "cabecera-desplegable abierto";
    claseContenidoIngredientes = "contenido-desplegable abierto";
    flechaIngredientes = "▲";
  }

  let listaIngredientesElementos = [];
  for (let i = 0; i < ingredientesLista.length; i++) {
    let ingrediente = ingredientesLista[i];
    let estaChequeado = false;
    if (ingredientesSeleccionados.includes(ingrediente)) {
      estaChequeado = true;
    }
    
    listaIngredientesElementos.push(
      <label key={ingrediente} className="elemento-casilla">
        <input type="checkbox" checked={estaChequeado} onChange={function() { alternarIngrediente(ingrediente) }} />
        <span>{ingrediente}</span>
      </label>
    );
  }

  let claseCabeceraAlergenos = "cabecera-desplegable";
  let claseContenidoAlergenos = "contenido-desplegable";
  let flechaAlergenos = "▼";
  if (desplegarAlergenos === true) {
    claseCabeceraAlergenos = "cabecera-desplegable abierto";
    claseContenidoAlergenos = "contenido-desplegable abierto";
    flechaAlergenos = "▲";
  }

  let listaAlergenosElementos = [];
  for (let i = 0; i < alergenosLista.length; i++) {
    let alergeno = alergenosLista[i];
    let estaChequeado = false;
    if (alergenosSeleccionados.includes(alergeno)) {
      estaChequeado = true;
    }
    
    listaAlergenosElementos.push(
      <label key={alergeno} className="elemento-casilla">
        <input type="checkbox" checked={estaChequeado} onChange={function() { alternarAlergeno(alergeno) }} />
        <span>{alergeno}</span>
      </label>
    );
  }

  let tituloSeccion = categoriaActiva;
  if (categoriaActiva === "Todos") {
    tituloSeccion = "Todos los platos";
  }

  let tarjetasPlatos = [];
  for (let i = 0; i < platosMostrados.length; i++) {
    let plato = platosMostrados[i];
    let platoEstaSeleccionado = false;
    if (platosEnMenu.includes(plato.id)) {
      platoEstaSeleccionado = true;
    }
    
    tarjetasPlatos.push(
      <PlatoCard key={plato.id} plato={plato} seleccionado={platoEstaSeleccionado} alHacerClic={function() { alternarPlatoEnMenu(plato.id) }} />
    );
  }

  return (
    <div className="estructura-principal">
      <aside className="barra-lateral">
        <h3 className="titulo-barra-lateral">CATEGORÍAS</h3>
        
        <ul className="lista-conceptos">
          {listaCategoriasElementos}
        </ul>

        <div className={claseCabeceraIngredientes} onClick={abrirOCerrarIngredientes}>
          <span>INGREDIENTES</span>
          <span className="icono-flecha">{flechaIngredientes}</span>
        </div>

        <div className={claseContenidoIngredientes}>
          <div className="filtros-casillas">
            {listaIngredientesElementos}
          </div>
        </div>

        <div className={claseCabeceraAlergenos} onClick={abrirOCerrarAlergenos}>
          <span>ALÉRGENOS</span>
          <span className="icono-flecha">{flechaAlergenos}</span>
        </div>

        <div className={claseContenidoAlergenos}>
          <div className="filtros-casillas">
            {listaAlergenosElementos}
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
              <input type="text" placeholder="Buscar un plato..." value={textoBuscado} onChange={manejarCambioTextoBuscador} />
            </div>
            <button className="boton-nuevo-plato">+ Nuevo plato</button>
          </div>
        </header>

        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">
            <span>{tituloSeccion}</span>
          </h2>
        </div>

        <div className="cuadricula-platos">
          {tarjetasPlatos}
        </div>
      </main>
    </div>
  );
}