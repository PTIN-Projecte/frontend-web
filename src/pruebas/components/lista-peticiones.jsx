import React from "react";
import '../styles/lista-peticiones.css';
import { useState, useEffect } from "react";
import ocultarPanel from '../assets/ocultar-menu.png';
import mostrarPanel from '../assets/display-menu.png';
import filtro from '../assets/filtro.png';
import click from '../assets/click.png';

function ListaPeticiones() {

    const [panel, setPanel] = useState(true);
    const [peticionBuscada, setPeticionBuscada] = useState("");
    const [fecha, setFecha] = useState("Recientes");
    const [todas, setTodas] = useState(false);
    const [pendientes, setPendientes] = useState(false);
    const [resueltas, setResueltas] = useState(false);

    return (
        <section className="general">
        {panel ? ( /* panel abierto*/ 
            <section className="panel-abierto">
                <img src={ocultarPanel} className="img1"
                    onClick={()=> setPanel(!panel)}
                    alt="icono cerrar menu" />
                <div className="filtros">
                    <div className="linea-filtro">
                        <img src={filtro} className="img-filtro"
                            alt="icono filtro" />
                        <strong className="titulo">Filtrar por</strong>
                    </div>
                    <div className="linea-filtro">
                        <input type="checkbox" 
                        id="todas" 
                        name="todas" 
                        value="todas"
                        checked={todas}
                        onChange={() => setTodas(!todas)}
                        />
                        <label>Todas</label>
                    </div>
                    <div className="linea-filtro">
                        <input type="checkbox" 
                        id="Pendientes" 
                        name="Pendientes" 
                        value="Pendientes"
                        checked={pendientes}
                        onChange={() => setPendientes(!pendientes)}
                        />
                        <label>Pendientes</label>
                    </div>
                    <div className="linea-filtro">
                        <input type="checkbox" 
                        id="Resueltas" 
                        name="Resueltas" 
                        value="Resueltas"
                        checked={resueltas}
                        onChange={() => setResueltas(!resueltas)}
                        />
                        <label>Resueltas</label>
                    </div>
                    <div className="porFecha">
                        <span className="linea-filtro">
                            Ordenar por fecha
                        </span>
                        <div className="linea-filtro">
                            <input type="radio" 
                            id="Recientes" 
                            name="ordenFecha" 
                            value="Recientes"
                            checked={fecha === "Recientes"}
                            onChange={() => setFecha("Recientes")}
                            />
                            <label>Recientes</label>
                        </div>
                        <div className="linea-filtro">
                            <input type="radio" 
                            id="Antiguas" 
                            name="ordenFecha" 
                            value="Antiguas"
                            checked={fecha === "Antiguas"}
                            onChange={() => setFecha("Antiguas")}
                            />
                            <label>Antiguas</label>
                        </div>
                    </div>
                    <div className = "limpiar-filtros"
                    onClick={() => {
                            setFecha("Recientes");
                            setTodas(true);
                            setPendientes(false);
                            setResueltas(false);
                        }}>
                        <img src={click} alt="icono limpiar filtros" />
                        <label>
                            Limpiar filtros
                        </label>
                        
                    </div>
                </div>
                   
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