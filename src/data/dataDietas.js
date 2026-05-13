//.ico s
import glutenIcon from '../components/icon/gluten.ico';
import apioIcon from '../components/icon/apio.ico';
import cacahueteIcon from '../components/icon/cacahuete.ico';
import mostazaIcon from '../components/icon/mostaza.ico';
import sesamoIcon from '../components/icon/sesamo.ico';
import moluscosIcon from '../components/icon/moluscos.ico';
import sulfitosIcon from '../components/icon/sulfitos.ico';
import crustaceoIcon from '../components/icon/crustaceo.ico';
import frutosCasIcon from '../components/icon/frutosCas.ico';
import sojaIcon from '../components/icon/soja.ico';
import pescadoIcon from '../components/icon/pescado.ico';
import lacteosIcon from '../components/icon/lacteos.ico';
import huevosIcon from '../components/icon/huevos.ico';
import altramucesIcon from '../components/icon/altramuces.ico';

// Lista de alérgenos disponibles
export const alergenosList = [
  { id: 'gluten', nombre: 'Contiene gluten', icon: glutenIcon, color: '#E67E22' },
  { id: 'apio', nombre: 'Apio', icon: apioIcon, color: '#2ECC71' },
  { id: 'cacahuetes', nombre: 'Cacahuetes', icon: cacahueteIcon, color: '#D35400' },
  { id: 'mostaza', nombre: 'Mostaza', icon: mostazaIcon, color: '#D4AC0D' },
  { id: 'sesamo', nombre: 'Granos de sésamo', icon: sesamoIcon, color: '#95A5A6' },
  { id: 'moluscos', nombre: 'Moluscos', icon: moluscosIcon, color: '#48C9B0' },
  { id: 'sulfitos', nombre: 'Dióxido de azufre y sulfitos', icon: sulfitosIcon, color: '#8E44AD' },
  { id: 'crustaceos', nombre: 'Crustáceos', icon: crustaceoIcon, color: '#3498DB' },
  { id: 'frutos_cascara', nombre: 'Frutos de cáscara', icon: frutosCasIcon, color: '#E74C3C' },
  { id: 'soja', nombre: 'Soja', icon: sojaIcon, color: '#27AE60' },
  { id: 'pescado', nombre: 'Pescado', icon: pescadoIcon, color: '#2980B9' },
  { id: 'lacteos', nombre: 'Lácteos', icon: lacteosIcon, color: '#6E2C00' },
  { id: 'huevos', nombre: 'Huevos', icon: huevosIcon, color: '#F39C12' },
  { id: 'altramuces', nombre: 'Altramuces', icon: altramucesIcon, color: '#F1C40F' }
];


// Datos dietas especiales
export const dietasData = [
  { id: 1, personas: 3, tipo: 'Veganas', alergenos: ['gluten', 'lacteos', 'huevos', 'pescado', 'crustaceos'] },
  { id: 2, personas: 2, tipo: 'Sin frutos secos', alergenos: ['frutos_cascara', 'cacahuetes'] },
  { id: 3, personas: 5, tipo: 'Celiacas', alergenos: ['gluten'] },
  { id: 4, personas: 3, tipo: 'Celiacas y sin lactosa', alergenos: ['gluten', 'lacteos'] },
  { id: 5, personas: 5, tipo: 'Vegana y celiaca', alergenos: ['gluten', 'lacteos', 'huevos', 'pescado', 'crustaceos', 'frutos_cascara'] },
  { id: 6, personas: 1, tipo: 'Sin apio', alergenos: ['apio'] },
  { id: 7, personas: 2, tipo: 'Sin marisco', alergenos: ['crustaceos', 'moluscos'] },
  { id: 8, personas: 1, tipo: 'Celiaca, sin lactosa y sin apio', alergenos: ['gluten', 'lacteos', 'apio'] },
  { id: 9, personas: 3, tipo: 'Celiaca y sin pescado', alergenos: ['gluten', 'pescado'] }
];

// Datos evento
export const eventoDietasInfo = {
  nombre: "Boda Rivero - Martínez",
  totalDietas: 25,
  contacto: {
    nombre: "JOAN GARCÍA",
    telefono: "93 412 00 33"
  }
};