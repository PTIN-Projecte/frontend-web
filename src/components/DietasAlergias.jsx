import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './DietasAlergias.css';
import { alergenosList, dietasData, eventoDietasInfo } from '../data/dataDietas';

export default function DietasAlergias({ userRole }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const role = userRole || 'comercial';
  const [filtroActivo, setFiltroActivo] = useState('comunes');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const visitedDietas = sessionStorage.getItem('dietas_visited');
    
    if (visitedDietas) {
      // Ya habíamos estado aquí en esta sesión → Es una recarga (F5)
      navigate(`/evento/${id}`, { replace: true });
    } else {
      // Primera vez en esta sesión → Marcar como visitado
      sessionStorage.setItem('dietas_visited', 'true');
    }
    
    // Limpiar al salir
    return () => {
      sessionStorage.removeItem('dietas_visited');
    };
  }, [navigate, id]);

  // Opciones de filtrado
  const opcionesFiltro = [
    { value: 'comunes', label: 'Por alergias/dietas comunes' },
    { value: 'numero', label: 'Por número de afectados' },
    { value: 'complejidad', label: 'Por complejidad' },
    { value: 'alergeno', label: 'Por alérgeno' }
  ];

  // Función para obtener el icono de un alérgeno
  const getAlergenoIcon = (alergenoId) => {
    const alergeno = alergenosList.find(a => a.id === alergenoId);
    return alergeno ? alergeno : { icon: '❓', color: '#999' };
  };

  // Filtrar y ordenar datos según el filtro seleccionado
  const getDatosFiltrados = () => {
    let datos = [...dietasData];

    switch (filtroActivo) {
      case 'numero':
        // Ordenar por número de personas (descendente)
        return datos.sort((a, b) => b.personas - a.personas);
      
      case 'complejidad':
        // Ordenar por cantidad de alérgenos (más complejas primero)
        return datos.sort((a, b) => b.alergenos.length - a.alergenos.length);
      
      case 'alergeno':
        // Agrupar por alérgeno (vista especial)
        return null; // Manejamos esto separado
      
      default:
        // Por comunes (orden original)
        return datos;
    }
  };

  // Vista especial: agrupar por alérgeno
  const getVistaPorAlérgeno = () => {
    const grupos = {};
    
    alergenosList.forEach(alergeno => {
      const personasConAlergeno = dietasData.filter(d => d.alergenos.includes(alergeno.id));
      if (personasConAlergeno.length > 0) {
        const totalAfectados = personasConAlergeno.reduce((sum, d) => sum + d.personas, 0);
        grupos[alergeno.id] = {
          ...alergeno,
          personas: personasConAlergeno,
          totalAfectados
        };
      }
    });
    
    return grupos;
  };

  const datosFiltrados = getDatosFiltrados();
  const vistaPorAlérgeno = getVistaPorAlérgeno();

  return (
    <div className="layout-principal">
      
      {/* HEADER */}
      <header className="header-superior">
        <div className="header-left">
          <span className={`badge-comercial ${role === 'produccion' ? 'badge-produccion' : ''}`}>{role === 'comercial' ? 'Comercial' : 'Producción'}</span>
        </div>
        <div className="logo">CAL BLAY</div>
        <nav className="nav-links">
          <span>DASHBOARD</span>
          <span>PETICIONES</span>
          <span>MENÚS</span>
          <span className="menu-hamburguesa">☰</span>
        </nav>
      </header>

      <main className="contenido-dietas">
        
        {/* TÍTULO CON FLECHA VOLVER */}
        <div className="dietas-header">
          <div className="titulo-con-flecha">
            <button className="btn-volver" onClick={() => {navigate(`/evento/${id}`, { state: location.state });}}>←</button>
            <h1>Dietas y Alergias — {eventoDietasInfo.nombre}</h1>
          </div>

          {/* BOTÓN SOLO PARA COMERCIAL */}
          {role === 'comercial' && (
            <button className="btn-editar-evento" onClick={() => navigate(`/evento/${id}`, { state: { wasEditing: true, role: 'comercial' } })}>Editar evento</button>
          )}

        </div>

        <div className="info-superior">
          <div className="card-resumen">
            <span className="label">DIETAS ESPECIALES</span>
            <div className="valor-grande">{eventoDietasInfo.totalDietas}</div>
            <span className="icono-personas">👥</span>
          </div>

          <div className="card-resumen">
            <span className="label">CONTACTO</span>
            <div className="valor-contacto">
              <strong>{eventoDietasInfo.contacto.nombre}</strong>
              <span>{eventoDietasInfo.contacto.telefono}</span>
            </div>
          </div>
        </div>

        {/* ICONOS DE ALÉRGENOS */}
        <div className="alergenos-grid">
          {alergenosList.map(alergeno => (
            <div key={alergeno.id} className="alergeno-item">
              <div 
                className="alergeno-icono" 
              >
                <img src={alergeno.icon} alt={alergeno.nombre} className="icono-img" />
              </div>
              <span className="alergeno-nombre">{alergeno.nombre}</span>
            </div>
          ))}
        </div>

        {/* FILTRO DESPLEGABLE */}
        <div className="filtro-container">
          <div 
            className="filtro-button" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {opcionesFiltro.find(op => op.value === filtroActivo)?.label} ↓
          </div>
          
          {showDropdown && (
            <div className="filtro-dropdown">
              {opcionesFiltro.map(opcion => (
                <div
                  key={opcion.value}
                  className={`filtro-option ${filtroActivo === opcion.value ? 'activo' : ''}`}
                  onClick={() => {
                    setFiltroActivo(opcion.value);
                    setShowDropdown(false);
                  }}
                >
                  {opcion.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* LISTA DE DIETAS */}
        <div className="dietas-lista">
          
          {/* Vista normal (comunes, número, complejidad) */}
          {filtroActivo !== 'alergeno' && datosFiltrados && (
            <div className="dietas-grid">
              {datosFiltrados.map(grupo => (
                <div key={grupo.id} className="dieta-card">
                  <div className="dieta-info">
                    <span className="personas-cantidad">{grupo.personas} Personas</span>
                    <span className="dieta-tipo">{grupo.tipo}</span>
                  </div>
                  <div className="dieta-alergenos">
                    {grupo.alergenos.map(alergenoId => {
                      const alergeno = getAlergenoIcon(alergenoId);
                      return (
                        <img 
                          key={alergenoId} 
                          src={alergeno.icon} 
                          alt={alergeno.nombre} 
                          className="mini-icono-img"
                          title={alergeno.nombre}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vista por alérgeno */}
          {filtroActivo === 'alergeno' && (
            <div className="vista-por-alergeno">
              {Object.values(vistaPorAlérgeno).map(alergenoGrupo => (
                <div key={alergenoGrupo.id} className="alergeno-seccion">
                  <div className="alergeno-header">
                    <div className="alergeno-icono-small">
                      <img 
                        src={alergenoGrupo.icon} 
                        alt={alergenoGrupo.nombre} 
                        className="icono-small-img"
                      />
                    </div>
                    <h3>{alergenoGrupo.nombre}</h3>
                    <span className="afectados-count">{alergenoGrupo.totalAfectados} personas afectadas</span>
                  </div>
                  
                  <div className="dietas-grid">
                    {alergenoGrupo.personas.map(grupo => (
                      <div key={grupo.id} className="dieta-card">
                        <div className="dieta-info">
                          <span className="personas-cantidad">{grupo.personas} Personas</span>
                          <span className="dieta-tipo">{grupo.tipo}</span>
                        </div>
                        
                        <div className="dieta-alergenos">
                          {grupo.alergenos.map(alergenoId => {
                            const alergeno = getAlergenoIcon(alergenoId);
                            return (
                              <img 
                                key={alergenoId} 
                                src={alergeno.icon} 
                                alt={alergeno.nombre} 
                                className="mini-icono-img"
                                title={alergeno.nombre}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}