import React, { useState } from 'react';
import '../styles/anyadir_menu.css';
import SeleccionAñadirPlatos from '../components/seleccionAnyadirPlatos.jsx';

// BASE DE DATOS GENERAL DEL SISTEMA (El catálogo completo disponible para buscar)
const CATALOGO_SISTEMA = [
  { id: 1, nombre: 'Ensalada César', tipo: 'entrantes', imagen: 'https://loremflickr.com/150/150/salad,food/all?random=1', alergenos: ['gluten', 'lacteos', 'huevos'] },
  { id: 2, nombre: 'Crema de Calabaza', tipo: 'entrantes', imagen: 'https://loremflickr.com/150/150/soup,pumpkin/all?random=2', alergenos: ['lacteos'] },
  { id: 3, nombre: 'Gyozas de Cerdo', tipo: 'entrantes', imagen: 'https://loremflickr.com/150/150/dumplings/all?random=3', alergenos: ['gluten', 'soja', 'sesamo'] },
  { id: 4, nombre: 'Solomillo a la Pimienta', tipo: 'principales', imagen: 'https://loremflickr.com/150/150/steak,meat/all?random=6', alergenos: ['lacteos', 'mostaza'] },
  { id: 5, nombre: 'Salmón a la Plancha', tipo: 'principales', imagen: 'https://loremflickr.com/150/150/salmon,fish/all?random=7', alergenos: ['pescado'] },
  { id: 6, nombre: 'Tarta de Queso', tipo: 'postres', imagen: 'https://loremflickr.com/150/150/cheesecake/all?random=11', alergenos: ['gluten', 'lacteos', 'huevos'] },
  { id: 7, nombre: 'Macedonia de Frutas', tipo: 'postres', imagen: 'https://loremflickr.com/150/150/fruit,salad/all?random=13', alergenos: [] }
];

const PaginaAñadirMenu = () => {
    const [entrantes, setEntrantes] = useState([]);
    const [principales, setPrincipales] = useState([]);
    const [postres, setPostres] = useState([]);

    const [menuAbiertoSeccion, setMenuAbiertoSeccion] = useState(null);

    const menuInvalido = entrantes.length === 0 || principales.length === 0 || postres.length === 0;

    // Inyecta platos desde el catálogo
    const handleAñadirPlatosAlMenu = (tipoCategoria, platosSeleccionados) => {
        if (tipoCategoria === "Selección de entrantes") {
            setEntrantes([...entrantes, ...platosSeleccionados]);
        } else if (tipoCategoria === "Selección de platos principales") {
            setPrincipales([...principales, ...platosSeleccionados]);
        } else if (tipoCategoria === "Selección de postres") {
            setPostres([...postres, ...platosSeleccionados]);
        }
    };

    // Elimina un plato específico del menú actual
    const handleBorrarPlatoAlMenu = (tipoCategoria, idPlato) => {
        if (tipoCategoria === "Selección de entrantes") {
            setEntrantes(entrantes.filter(p => p.id !== idPlato));
        } else if (tipoCategoria === "Selección de platos principales") {
            setPrincipales(principales.filter(p => p.id !== idPlato));
        } else if (tipoCategoria === "Selección de postres") {
            setPostres(postres.filter(p => p.id !== idPlato));
        }
    };

    // ==========================================================================
    // LÓGICA DE NAVEGACIÓN (PÁGINA PRINCIPAL)
    // ==========================================================================
    const handleCancelar = () => {
        console.log("Navegando hacia atrás o al panel principal...");
        // Aquí pondrás: navigate('/menus') o tu sistema de rutas
        alert("Cancelando y volviendo a la página anterior...");
    };

    const handleGuardarMenu = () => {
        if (menuInvalido) return;
        console.log("Guardando menú en la base de datos y redirigiendo...");
        // Aquí harías tu fetch/axios para guardar y luego el navigate('/menus')
        alert("¡Menú creado con éxito! Redirigiendo...");
    };

    return (
        <div className="pagina-contenedor" onClick={() => setMenuAbiertoSeccion(null)}>
            <h1>Añadir Menú</h1>
            
            <SeleccionAñadirPlatos 
                seleccion="Selección de entrantes" 
                platos={entrantes} 
                catalogoSistema={CATALOGO_SISTEMA.filter(p => p.tipo === 'entrantes')}
                menuAbiertoSeccion={menuAbiertoSeccion}
                setMenuAbiertoSeccion={setMenuAbiertoSeccion}
                onAñadirPlatos={handleAñadirPlatosAlMenu}
                onBorrarPlato={handleBorrarPlatoAlMenu}
            />

            <SeleccionAñadirPlatos 
                seleccion="Selección de platos principales" 
                platos={principales} 
                catalogoSistema={CATALOGO_SISTEMA.filter(p => p.tipo === 'principales')}
                menuAbiertoSeccion={menuAbiertoSeccion}
                setMenuAbiertoSeccion={setMenuAbiertoSeccion}
                onAñadirPlatos={handleAñadirPlatosAlMenu}
                onBorrarPlato={handleBorrarPlatoAlMenu}
            />

            <SeleccionAñadirPlatos 
                seleccion="Selección de postres" 
                platos={postres} 
                catalogoSistema={CATALOGO_SISTEMA.filter(p => p.tipo === 'postres')}
                menuAbiertoSeccion={menuAbiertoSeccion}
                setMenuAbiertoSeccion={setMenuAbiertoSeccion}
                onAñadirPlatos={handleAñadirPlatosAlMenu}
                onBorrarPlato={handleBorrarPlatoAlMenu}
            />

            <div className="acciones-finales" onClick={(e) => e.stopPropagation()}>
                <button className="btn-cancelar" onClick={handleCancelar}>
                    Cancelar
                </button>
                <button 
                    className={`btn-guardar ${menuInvalido ? 'deshabilitado' : ''}`}
                    disabled={menuInvalido}
                    onClick={handleGuardarMenu}
                >
                    Añadir menú
                </button>
            </div>
        </div>
    );
}

export default PaginaAñadirMenu;