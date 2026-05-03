import React from 'react';
import MenuItem from '../components/MenuItem';
import './MenuPage.css';

// 1. Icono con un nombre de variable ÚNICO
import iconoPescado from '../../../assets/icons/pescado.ico';
import iconoHuevo from '../../../assets/icons/huevos.ico';
import iconoGluten from '../../../assets/icons/gluten.ico';
import iconoLacteo from '../../../assets/icons/lacteos.ico';
import iconoAltramuces from '../../../assets/icons/altamuces.ico';
import iconoApio from '../../../assets/icons/apio.ico';
import iconoCacahuete from '../../../assets/icons/cacahuete.ico';
import iconoCrustaceo from '../../../assets/icons/crustaceo.ico';
import iconoFrutosCas from '../../../assets/icons/frutosCas.ico';
import iconoMoluscos from '../../../assets/icons/moluscos.ico';
import iconoMostaza from '../../../assets/icons/mostaza.ico';
import iconoSesamo from '../../../assets/icons/sesamo.ico';
import iconoSoja from '../../../assets/icons/soja.ico';
import iconoSulfitos from '../../../assets/icons/sulfitos.ico';

// 2. Diccionario alérgenos conectado a las variables de arriba 
const ALERGENOS = {
  PESCADO: { icono: iconoPescado, nombre: 'Pescado' },
  HUEVO: { icono: iconoHuevo, nombre: 'Huevo' },
  GLUTEN: { icono: iconoGluten, nombre: 'Gluten' },
  LACTEOS: { icono: iconoLacteo, nombre: 'Lácteos' },
  ALTRAMUCES: { icono: iconoAltramuces, nombre: 'Altramuces' },
  APIO: { icono: iconoApio, nombre: 'Apio' },
  CACAHUETE: { icono: iconoCacahuete, nombre: 'Cacahuetes' },
  CRUSTACEOS: { icono: iconoCrustaceo, nombre: 'Crustáceos' },
  FRUTOS_CASCARA: { icono: iconoFrutosCas, nombre: 'Frutos de cáscara' },
  MOLUSCOS: { icono: iconoMoluscos, nombre: 'Moluscos' },
  MOSTAZA: { icono: iconoMostaza, nombre: 'Mostaza' },
  SESAMO: { icono: iconoSesamo, nombre: 'Sésamo' },
  SOJA: { icono: iconoSoja, nombre: 'Soja' },
  SULFITOS: { icono: iconoSulfitos, nombre: 'Sulfitos' }
};

function MenuPage() {
    const nombreDelMenu = "Degustación Orígens";

    return (
        <div className="pagina-menu">
        <h1>Información Menú: <span className="resaltado">{nombreDelMenu}</span></h1>
        <hr className="linea-separadora" /> 

        <section className="seccion-menu">
            <h2 className="titulo-categoria">Entrantes</h2>
        
            <MenuItem 
                titulo="Virutas de Jamón Ibérico de Bellota:" 
                descripcion='Con pan de coca artesano y tomate "de penjar".'
                alergenos={[ ALERGENOS.GLUTEN ]} 
            />
            
            <MenuItem 
                titulo="Ensalada de Tomate de Huerta:" 
                descripcion="Con ventresca de atún, cebolla tierna y aceite de oliva virgen extra."
                alergenos={[ ALERGENOS.PESCADO ]}
            />
        </section>

        <section className="seccion-menu2">
            <h2 className="titulo-categoria">Principales</h2>
        
            <MenuItem 
                titulo="Fricandó de Ternera:" 
                descripcion='Tradicional catalán con "moixernons" (setas) y picada de frutos secos.'
                alergenos={[ ALERGENOS.GLUTEN, ALERGENOS.FRUTOS_CASCARA, ALERGENOS.SULFITOS ]}
            />
              
            <MenuItem 
                titulo="Arroz del Delta con Sepionetas:" 
                descripcion="Cocinado a la brasa con un toque de alioli escalivado."
                alergenos={[ ALERGENOS.MOLUSCOS, ALERGENOS.HUEVO, ALERGENOS.PESCADO ]}
            />
        </section> 

        <section className="seccion-menu3">
            <h2 className="titulo-categoria">Postres</h2>
        
            <MenuItem 
                titulo="Crema Catalana Quemada:" 
                descripcion='Con los tradicionales "carquinyolis" de Sant Sadurní.'
                alergenos={[ ALERGENOS.LACTEOS, ALERGENOS.GLUTEN, ALERGENOS.FRUTOS_CASCARA ]}
            />
        </section>
    </div>
  );
}

export default MenuPage;