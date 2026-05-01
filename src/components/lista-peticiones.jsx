import React from "react";
import '../styles/lista-peticiones.css';
import { useState, useEffect } from "react";
import ocultarPanel from '../assets/ocultar-menu.png';
import mostrarPanel from '../assets/display-menu.png';
import filtro from '../assets/filtro.png';
import click from '../assets/click.png';
import peticiones from './peticionesFake.js';
import lupa from '../assets/lupa.png'
import info from '../assets/info.png'
import pendiente from '../assets/pendiente.png'
import denegado from '../assets/denegado.png'
import aceptado from '../assets/aceptado.png'
import fotoPeti from '../assets/pulpo.jfif'

function ListaPeticiones() {

    const [panel, setPanel] = useState(true);
    const [busqueda, setBusqueda] = useState("");
    const [fecha, setFecha] = useState("Recientes");
    const [todas, setTodas] = useState(true);
    const [pendientes, setPendientes] = useState(false);
    const [resueltas, setResueltas] = useState(false);
    const [sugerencias, setSugerencias] = useState([]);
    
    const handleBusqueda = (e) => {
        const valor = e.target.value;
        setBusqueda (valor);
        if (valor.trim()===""){
            setSugerencias([]);
            return;
        }
        const coincidencias = peticiones.peticiones
        .map((p) => p.evento)
        .filter((evento) =>
        evento.toLowerCase().includes(valor.toLowerCase())
        );
        const unicos = [... new Set(coincidencias)];
        setSugerencias(unicos);
    };

    let peticionesFiltradas = peticiones.peticiones;

    // filtro por evento (buscador)
    peticionesFiltradas = peticionesFiltradas.filter((p) =>
    p.evento.toLowerCase().includes(busqueda.toLowerCase())
    );

    // filtro por estado jeje ola :)
    if (!todas) {
    if (pendientes) {
        peticionesFiltradas = peticionesFiltradas.filter(
        (p) => p.estado === "Pendiente"
        );
    }

    if (resueltas) {
        peticionesFiltradas = peticionesFiltradas.filter(
        (p) => p.estado === "Aceptado" || p.estado === "Denegado"
        );
    }
    }

    // ordeno por fecha lol
    peticionesFiltradas = peticionesFiltradas.sort((a, b) => {
    const fechaA = new Date(a.fechaSolicitud);
    const fechaB = new Date(b.fechaSolicitud);

    return fecha === "Recientes"
        ? fechaB - fechaA
        : fechaA - fechaB;
    });


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
                        onChange={() => {
                            setTodas(true);
                            setPendientes(false);
                            setResueltas(false);
                        }}
                        />
                        <label>Todas</label>
                    </div>
                    <div className="linea-filtro">
                        <input type="checkbox" 
                        id="Pendientes" 
                        name="Pendientes" 
                        value="Pendientes"
                        checked={pendientes}
                        onChange={() => {
                            setPendientes(!pendientes);
                            setResueltas(false);
                            setTodas(false);
                        }}
                        />
                        <label>Pendientes</label>
                    </div>
                    <div className="linea-filtro">
                        <input type="checkbox" 
                        id="Resueltas" 
                        name="Resueltas" 
                        value="Resueltas"
                        checked={resueltas}
                        onChange={() => {
                            setResueltas(!resueltas);
                            setPendientes(false);
                            setTodas(false);
                        }}
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
                            setBusqueda("");
                            setSugerencias([]);
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
                <div className="linea-busqueda">
                    <input className="busqueda"
                    type = "text"
                    placeholder="Buscar evento"
                    value = {busqueda}
                    onChange={handleBusqueda}
                    >
                    </input>
                    <img className="lupa"
                        src = {lupa}>
                    </img>
                    {busqueda.length > 0 && sugerencias.length > 0 && (
                        <ul className="sugerencias">
                            { sugerencias.map((evento, index)=> (
                                <li
                                key={index}
                                onClick={() => {
                                    setBusqueda(evento);
                                    setSugerencias([]);
                                }}
                                >
                                    {evento}
                                </li>
                            ))}
                        </ul>
                    )}
                        
                </div>
                
                <div className="lista-peticiones"> 
                    { peticionesFiltradas.map((peticion) => (
                    <div key = {peticion.id} className="peticion">
                        <img className="foto-peticion"
                        src = {fotoPeti}>    
                        </img>
                        <div className={`estado ${peticion.estado}`}>
                            <img
                                src={
                                    peticion.estado==="Pendiente" ? pendiente:
                                    peticion.estado==="Aceptado" ? aceptado:
                                    peticion.estado==="Denegado" ? denegado:""
                                }
                                alt ="img_estado"
                            >
                            </img>
                            <span>{peticion.estado}</span>
                        </div>
                        <div className="abajo">
                            <h3>{peticion.titulo}</h3>
                            <span>Evento: {peticion.evento}</span>
                            <span>Fecha solicitud: {peticion.fechaSolicitud}</span>
                            <span>Fecha peticion: {peticion.fechaRespuesta}</span>
                            <span>Solicitado por: {peticion.solicitadoPor}</span>
                       </div>
                       <div className="base">
                            <div className="circulo">
                            </div>
                            <span>{peticion.tipo}</span>
                            <img 
                                src={info} 
                                className="info-peticion"
                            ></img>
                            </div> 
                    </div>
                    
                    ))}
                </div>
                
        </section>
        </section>
    );
}
export default ListaPeticiones;