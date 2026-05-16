import React, { useState } from 'react';

const LISTA_ALERGENOS = [
    { id: 'gluten', nombre: 'CONTIENE GLUTEN', emoji: '🌾', color: '#e2673d' },
    { id: 'apio', nombre: 'APIO', emoji: '🥬', color: '#a6db9e' },
    { id: 'cacahuetes', nombre: 'CACAHUETES', emoji: '🥜', color: '#d9bfa3' },
    { id: 'mostaza', nombre: 'MOSTAZA', emoji: '🍾', color: '#dec797' },
    { id: 'sesamo', nombre: 'GRANOS DE SÉSAMO', emoji: '🌱', color: '#c4beaa' },
    { id: 'moluscos', nombre: 'MOLUSCOS', emoji: '🐚', color: '#9ee0e6' },
    { id: 'sulfitos', nombre: 'DIÓXIDO DE AZUFRE Y SULFITOS', emoji: '🧪', color: '#b58ca6' },
    { id: 'crustaceos', nombre: 'CRUSTÁCEOS', emoji: '🦀', color: '#7bcbe3' },
    { id: 'frutos_cascara', nombre: 'FRUTOS DE CÁSCARA', emoji: '🌰', color: '#e8a5aa' },
    { id: 'soja', nombre: 'SOJA', emoji: '🫛', color: '#84cca4' },
    { id: 'pescado', nombre: 'PESCADO', emoji: '🐟', color: '#8d9ec7' },
    { id: 'lacteos', nombre: 'LÁCTEOS', emoji: '🥛', color: '#bfa79c' },
    { id: 'huevos', nombre: 'HUEVOS', emoji: '🥚', color: '#fcd0a1' }
];

const SeleccionAñadirPlatos = ({ platos, seleccion, catalogoSistema, menuAbiertoSeccion, setMenuAbiertoSeccion, onAñadirPlatos, onBorrarPlato }) => {
    const [modalCatalogoAbierta, setModalCatalogoAbierta] = useState(false);
    const [busqueda, setBusqueda] = useState('');
    const [modalAlergenosAbierto, setModalAlergenosAbierto] = useState(false);
    const [alergenosExcluidos, setAlergenosExcluidos] = useState([]);
    const [platosSeleccionadosTemporal, setPlatosSeleccionadosTemporal] = useState([]);

    const mostrarMenuMas = menuAbiertoSeccion === seleccion;

    const handleToggleMenu = (e) => {
        e.stopPropagation(); 
        setMenuAbiertoSeccion(mostrarMenuMas ? null : seleccion);
    };

    const handleAbrirCatalogo = () => {
        setPlatosSeleccionadosTemporal([]); 
        setBusqueda('');
        setAlergenosExcluidos([]);
        setModalCatalogoAbierta(true);
        setMenuAbiertoSeccion(null);
    };

    // ==========================================================================
    // LÓGICA DE NAVEGACIÓN (BOTÓN "+" DEL DESPLEGABLE)
    // ==========================================================================
    const handleNavegarCrearPlato = () => {
        console.log("Navegando a la pantalla del formulario para crear un nuevo plato...");
        // Aquí pondrás: navigate('/platos/nuevo') o tu sistema de rutas
        setMenuAbiertoSeccion(null); // Cierra el desplegable antes de irte
        alert("Redirigiendo a la página de creación de un nuevo plato...");
    };

    const handleMarcarPlatoFila = (plato) => {
        const yaSeleccionado = platosSeleccionadosTemporal.some(p => p.id === plato.id);
        if (yaSeleccionado) {
            setPlatosSeleccionadosTemporal(platosSeleccionadosTemporal.filter(p => p.id !== plato.id));
        } else {
            setPlatosSeleccionadosTemporal([...platosSeleccionadosTemporal, plato]);
        }
    };

    const handleConfirmarPlatos = () => {
        onAñadirPlatos(seleccion, platosSeleccionadosTemporal);
        setModalCatalogoAbierta(false);
    };

    const toggleAlergeno = (id) => {
        if (alergenosExcluidos.includes(id)) {
            setAlergenosExcluidos(alergenosExcluidos.filter(item => item !== id));
        } else {
            setAlergenosExcluidos([...alergenosExcluidos, id]);
        }
    };

    const catalogoFiltrado = catalogoSistema.filter((plato) => {
        const coincideTexto = plato.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const tieneAlergenoExcluido = alergenosExcluidos.some(al => plato.alergenos && plato.alergenos.includes(al));
        return coincideTexto && !tieneAlergenoExcluido;
    });

    return (
        <div className="seleccion-seccion">
            
            <div className="seleccion-cabecera">
                <div className="categoria-titulo-wrapper">
                    <span className="categoria-badge">{seleccion}</span>
                    <div className="contenedor-menu-mas">
                        <button className="btn-mas-categoria" onClick={handleToggleMenu}>+</button>
                        {mostrarMenuMas && (
                            <div className="menu-mas-desplegable" onClick={(e) => e.stopPropagation()}>
                                <button onClick={handleAbrirCatalogo}>Añadir plato/s existente/s</button>
                                {/* TEXTO CORREGIDO Y FUNCIÓN DE RUTA ASOCIADA */}
                                <button onClick={handleNavegarCrearPlato}>Añadir nuevo plato</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="platos-lista-vertical">
                {platos.length > 0 ? (
                    platos.map((plato, index) => (
                        <div key={`${plato.id}-${index}`} className="plato-contenedor-fila">
                            <div className="plato-miniatura-wrapper">
                                {plato.imagen ? <img src={plato.imagen} alt={plato.nombre} className="plato-miniatura-img" /> : <div className="plato-miniatura-placeholder">🍽️</div>}
                            </div>
                            <div className="plato-fila">
                                <div className="plato-acciones-izq">
                                    <button className="btn-accion-icono editar">📝</button>
                                    <button 
                                        className="btn-accion-icono borrar"
                                        onClick={() => onBorrarPlato(seleccion, plato.id)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                                <div className="plato-info-centro">
                                    <span className="plato-nombre">{plato.nombre}:</span>
                                    <span className="plato-descripcion">Con ingredientes seleccionados de la huerta artesana.</span>
                                </div>
                                <div className="plato-alergenos-der">
                                    {plato.alergenos && plato.alergenos.map(al => {
                                        const f = LISTA_ALERGENOS.find(i => i.id === al);
                                        return f ? <span key={al} className="icono-alergeno" style={{backgroundColor: f.color}}>{f.emoji}</span> : null;
                                    })}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-resultados">No hay plato/s añadido/s en esta categoría. Pulsa "+" para agregar uno o más.</p>
                )}
            </div>

            {/* MODAL 1: CATÁLOGO */}
            {modalCatalogoAbierta && (
                <div className="modal-overlay" onClick={() => setModalCatalogoAbierta(false)}>
                    <div className="modal-catalogo-container" onClick={(e) => e.stopPropagation()}>
                        
                        <div className="modal-catalogo-cabecera">
                            <h2 className="modal-catalogo-titulo">Catálogo del Sistema - {seleccion}</h2>
                            
                            <div className="buscador-bloque-derecho">
                                <button 
                                    className={`btn-filtro-externo ${alergenosExcluidos.length > 0 ? 'activo' : ''}`}
                                    onClick={() => setModalAlergenosAbierto(true)}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icono-filtro-svg">
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                </button>
                                <div className="buscador-wrapper">
                                    <input 
                                        type="text" 
                                        placeholder="Buscar en el sistema..." 
                                        className="buscador-input"
                                        value={busqueda}
                                        onChange={(e) => setBusqueda(e.target.value)}
                                    />
                                    <span className="icono-lupa">🔍</span>
                                </div>
                            </div>
                        </div>

                        <p className="instrucciones-catalogo">Haz clic sobre los platos que desees incluir en el menú (se marcarán en verde):</p>

                        <div className="catalogo-lista-scrollable">
                            {catalogoFiltrado.length > 0 ? (
                                catalogoFiltrado.map((plato) => {
                                    const marcado = platosSeleccionadosTemporal.some(p => p.id === plato.id);
                                    return (
                                        <div 
                                            key={plato.id} 
                                            className={`plato-contenedor-fila fila-seleccionable ${marcado ? 'fila-marcada' : ''}`}
                                            onClick={() => handleMarcarPlatoFila(plato)}
                                        >
                                            <div className="plato-miniatura-wrapper">
                                                <img src={plato.imagen} alt={plato.nombre} className="plato-miniatura-img" />
                                            </div>
                                            <div className="plato-fila">
                                                <div className="plato-info-centro">
                                                    <span className="plato-nombre">{plato.nombre}</span>
                                                    {marcado && <span className="badge-seleccionado">✓ Seleccionado</span>}
                                                </div>
                                                <div className="plato-alergenos-der">
                                                    {plato.alergenos && plato.alergenos.map(al => {
                                                        const f = LISTA_ALERGENOS.find(i => i.id === al);
                                                        return f ? <span key={al} className="icono-alergeno" style={{backgroundColor: f.color}}>{f.emoji}</span> : null;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="no-resultados">No se encontraron platos en el sistema con esos filtros.</p>
                            )}
                        </div>

                        <div className="modal-acciones-box">
                            <button className="modal-btn-cancelar" onClick={() => setModalCatalogoAbierta(false)}>Cancelar</button>
                            <button className="modal-btn-aceptar" onClick={handleConfirmarPlatos}>Aceptar ({platosSeleccionadosTemporal.length})</button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL 2: ALÉRGENOS */}
            {modalAlergenosAbierto && (
                <div className="modal-overlay submodal" onClick={() => setModalAlergenosAbierto(false)}>
                    <div className="modal-contenedor" onClick={(e) => e.stopPropagation()}>
                        <h2 className="modal-alergenos-titulo">Selecciona Alergenos</h2>
                        <p className="modal-subtitulo">Se ocultarán del catálogo los platos que contengan los elementos seleccionados.</p>
                        <div className="modal-grid-alergenos">
                            {LISTA_ALERGENOS.map((alergeno) => {
                                const seleccionado = alergenosExcluidos.includes(alergeno.id);
                                return (
                                    <div key={alergeno.id} className={`modal-alergeno-item ${seleccionado ? 'seleccionado' : ''}`} onClick={() => toggleAlergeno(alergeno.id)}>
                                        <div className="circle-icon" style={{ backgroundColor: alergeno.color }}>
                                            <span className="emoji-render">{alergeno.emoji}</span>
                                            {seleccionado && <span className="check-block">❌</span>}
                                        </div>
                                        <span className="alergeno-label">{alergeno.nombre}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="modal-acciones-box">
                            <button className="modal-btn-cancelar" onClick={() => setAlergenosExcluidos([])}>Limpiar Filtros</button>
                            <button className="modal-btn-aceptar" onClick={() => setModalAlergenosAbierto(false)}>Aceptar</button>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default SeleccionAñadirPlatos;