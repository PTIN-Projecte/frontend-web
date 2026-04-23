import React from "react";
import '../styles/lista-peticiones.css';
import { useState, useEffect } from "react";
import ocultarPanel from '../assets/ocultar-menu.png';
import mostrarPanel from '../assets/display-menu.png';
import filtro from '../assets/filtro.png';

function ListaPeticiones() {

    const [panel, setPanel] = useState(true);
    const [peticionBuscada, setPeticionBuscada] = useState("");

    return (
        <section className="general">
        {panel ? ( /* panel abierto*/ 
            <section className="panel-abierto">
                <img src={ocultarPanel} className="img1"
                    onClick={()=> setPanel(!panel)}
                    alt="icono cerrar menu" />
                <div className="linea-filtro">
                    <img src={filtro} className="img-filtro"
                        alt="icono filtro" />
                    <strong>Filtros</strong>
                </div>
                <span>Lista de peticiones</span>
            </section>
        ) : ( /* panel cerrado*/ 
            <section className="panel-cerrado">
                <img src={mostrarPanel} className="img2"
                    onClick={() => setPanel(!panel)}
                    alt="icono abrir menu" />
            </section>
         )}

        <section className="contenido">
                <h1>Lista de Peticiones</h1>
                <input className="busqueda"
                    type = "text"
                    placeholder="   Buscar peticiones"
                    value = {peticionBuscada}
                    onChange={(e) => setPeticionBuscada(e.target.value)}
                >
                </input>
        </section>


         </section>
    );
}
export default ListaPeticiones;