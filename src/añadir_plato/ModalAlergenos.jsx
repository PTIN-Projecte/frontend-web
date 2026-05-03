import { useState } from 'react';
import './ModalAlergenos.css';

import iconGluten from './icon/gluten.ico';
import iconApio from './icon/apio.ico';
import iconCacahuetes from './icon/cacahuete.ico';
import iconMostaza from './icon/mostaza.ico';
import iconSesamo from './icon/sesamo.ico';
import iconMoluscos from './icon/moluscos.ico';
import iconSulfitos from './icon/sulfitos.ico';
import iconCrustaceos from './icon/crustaceo.ico';
import iconFrutosCascara from './icon/frutosCas.ico';
import iconSoja from './icon/soja.ico';
import iconPescado from './icon/pescado.ico';
import iconLacteos from './icon/lacteos.ico';
import iconHuevos from './icon/huevos.ico';
import iconAltramuces from './icon/altramuces.ico';

export const ALERGENOS = [
  { id: 'gluten', label: 'CONTIENE GLUTEN', icon: iconGluten },
  { id: 'apio', label: 'APIO', icon: iconApio },
  { id: 'cacahuetes', label: 'CACAHUETES', icon: iconCacahuetes },
  { id: 'mostaza', label: 'MOSTAZA', icon: iconMostaza },
  { id: 'sesamo', label: 'GRANOS DE SÉSAMO', icon: iconSesamo },
  { id: 'moluscos', label: 'MOLUSCOS', icon: iconMoluscos },
  { id: 'sulfitos', label: 'DIÓXIDO DE AZUFRE Y SULFITOS', icon: iconSulfitos },
  { id: 'crustaceos', label: 'CRUSTÁCEOS', icon: iconCrustaceos },
  { id: 'frutos_cascara', label: 'FRUTOS DE CÁSCARA', icon: iconFrutosCascara },
  { id: 'soja', label: 'SOJA', icon: iconSoja },
  { id: 'pescado', label: 'PESCADO', icon: iconPescado },
  { id: 'lacteos', label: 'LÁCTEOS', icon: iconLacteos },
  { id: 'huevos', label: 'HUEVOS', icon: iconHuevos },
  { id: 'altramuces', label: 'ALTRAMUCES', icon: iconAltramuces },
];

 
// seleccionados: array de ids ya seleccionados (estado del padre)
// onChange: función que recibe el nuevo array de ids al aceptar
export default function ModalAlergenos({ seleccionados = [], onChange }) {
  const [abierto, setAbierto] = useState(false);
  const [tmp, setTmp] = useState([]);
 
  const abrir = () => {
    setTmp([...seleccionados]);
    setAbierto(true);
  };
 
  const cerrar = () => setAbierto(false);
 
  const toggle = (id) => {
    setTmp((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };
 
  const aceptar = () => {
    onChange(tmp);
    cerrar();
  };
 
  return (
    <>
      <button className="ma-btn-seleccionar" onClick={abrir}>
        Seleccionar
      </button>
 
      {abierto && (
        <div className="ma-overlay" onClick={cerrar}>
          <div className="ma-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="ma-titulo">Selecciona Alérgenos</h2>
            <div className="ma-grid">
              {ALERGENOS.map((alergeno) => (
                <div
                  key={alergeno.id}
                  className={`ma-item ${tmp.includes(alergeno.id) ? 'ma-item--selected' : ''}`}
                  onClick={() => toggle(alergeno.id)}
                >
                  <img src={alergeno.icon} alt={alergeno.label} />
                  <span>{alergeno.label}</span>
                </div>
              ))}
            </div>
            <div className="ma-acciones">
              <button className="ma-btn-cancelar" onClick={cerrar}>Cancelar</button>
              <button className="ma-btn-aceptar" onClick={aceptar}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}