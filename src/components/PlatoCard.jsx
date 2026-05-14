import React from 'react';
import '../styles/PlatoCard.css';

/**
 * @pre El objeto `plato` debe tener propiedades válidas. `seleccionado` es un booleano. `alHacerClic` es una función.
 * @post Se renderiza la tarjeta del plato. No se alteran los datos originales del plato.
 */
export default function PlatoCard(props) {
  const plato = props.plato;
  const seleccionado = props.seleccionado;
  const alHacerClic = props.alHacerClic;
  
  let etiquetasAMostrar = [];
  
  if (seleccionado === true) {
    etiquetasAMostrar.push({ tipo: 'menu', texto: 'En menú' });
  }
  
  if (plato.etiqueta !== undefined && plato.etiqueta !== null) {
    if (plato.etiqueta.tipo === 'nuevo') {
      etiquetasAMostrar.push({ tipo: 'nuevo', texto: 'Nuevo' });
    } else if (plato.etiqueta.tipo === 'evento') {
      etiquetasAMostrar.push({ tipo: 'evento', texto: 'En otro evento' });
    }
  }

  let claseParaContenedor = "contenedor-tarjeta";
  if (seleccionado === true) {
    claseParaContenedor = "contenedor-tarjeta seleccionado";
  }

  let contenedorEtiquetas = null;
  if (etiquetasAMostrar.length > 0) {
    let listaElementosEtiquetas = [];
    for (let i = 0; i < etiquetasAMostrar.length; i++) {
      let etiquetaActual = etiquetasAMostrar[i];
      let claseEtiqueta = "etiqueta etiqueta-" + etiquetaActual.tipo;
      listaElementosEtiquetas.push(
        <div key={i} className={claseEtiqueta}>
          {etiquetaActual.texto}
        </div>
      );
    }
    
    contenedorEtiquetas = (
      <div className="contenedor-etiquetas">
        {listaElementosEtiquetas}
      </div>
    );
  }

  let contenedorAlergenos = null;
  if (plato.alergenos.length > 0) {
    let listaElementosAlergenos = [];
    for (let i = 0; i < plato.alergenos.length; i++) {
      let alergeno = plato.alergenos[i];
      listaElementosAlergenos.push(
        <span key={i} className="etiqueta-alergeno">
          {alergeno}
        </span>
      );
    }
    
    contenedorAlergenos = (
      <div className="etiquetas-alergenos">
        {listaElementosAlergenos}
      </div>
    );
  }

  return (
    <div className={claseParaContenedor} onClick={alHacerClic}>
      <div className="contenedor-imagen-tarjeta">
        <img src={plato.imagen} alt={plato.nombre} className="imagen-tarjeta" />
        {contenedorEtiquetas}
      </div>

      <div className="contenido-tarjeta">
        <h3>{plato.nombre}</h3>
        <p>{plato.descripcion}</p>
        
        {contenedorAlergenos}

        <div className="pie-tarjeta">
          <div className="etiqueta-concepto-tarjeta">
            <span className="punto-gris"></span>
            {plato.categoria}
          </div>

          <button className="boton-opciones">...</button>
        </div>
      </div>
    </div>
  );
}