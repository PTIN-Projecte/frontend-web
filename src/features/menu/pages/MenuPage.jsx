import React from 'react';
import MenuItem from '../components/MenuItem';
import './MenuPage.css';

// Diccionario alérgenos
const ALERGENOS = {
  PESCADO: { icono: '🐟', nombre: 'Pescado' },
  HUEVO: { icono: '🥚', nombre: 'Huevo' },
  GLUTEN: { icono: '🌾', nombre: 'Gluten' },
  LACTEOS: { icono: '🧀', nombre: 'Lácteos' }
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
                alergenos={[ ALERGENOS.PESCADO, ALERGENOS.HUEVO ]}
            />
        </section>

        <section className="seccion-menu2">
            <h2 className="titulo-categoria">Principales</h2>
        
            <MenuItem 
                titulo="Fricandó de Ternera:" 
                descripcion='Tradicional catalán con "moixernons" (setas) y picada de frutos secos.'
                alergenos={[ ALERGENOS.GLUTEN ]} 
            />
              
            <MenuItem 
                titulo="Arroz del Delta con Sepionetas:" 
                descripcion="Cocinado a la brasa con un toque de alioli escalivado."
                alergenos={[ ALERGENOS.PESCADO, ALERGENOS.HUEVO ]} 
            />
        </section> 

        <section className="seccion-menu3">
            <h2 className="titulo-categoria">Postres</h2>
        
            <MenuItem 
                titulo="Crema Catalana Quemada:" 
                descripcion='Con los tradicionales "carquinyolis" de Sant Sadurní.'
                alergenos={[ ALERGENOS.GLUTEN ]} 
            />
        </section>
    </div>
  );
}

export default MenuPage;