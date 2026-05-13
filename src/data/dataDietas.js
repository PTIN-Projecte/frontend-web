// Lista de alérgenos disponibles
export const alergenosList = [
  { id: 'gluten', nombre: 'Contiene gluten', icon: '🌾', color: '#E67E22' },
  { id: 'apio', nombre: 'Apio', icon: '🥬', color: '#2ECC71' },
  { id: 'cacahuetes', nombre: 'Cacahuetes', icon: '🥜', color: '#D35400' },
  { id: 'mostaza', nombre: 'Mostaza', icon: '🌭', color: '#D4AC0D' },
  { id: 'sesamo', nombre: 'Granos de sésamo', icon: '🫘', color: '#95A5A6' },
  { id: 'moluscos', nombre: 'Moluscos', icon: '🐚', color: '#48C9B0' },
  { id: 'sulfitos', nombre: 'Dióxido de azufre y sulfitos', icon: '⚗️', color: '#8E44AD' },
  { id: 'crustaceos', nombre: 'Crustáceos', icon: '🦀', color: '#3498DB' },
  { id: 'frutos_cascara', nombre: 'Frutos de cáscara', icon: '🌰', color: '#E74C3C' },
  { id: 'soja', nombre: 'Soja', icon: '🌱', color: '#27AE60' },
  { id: 'pescado', nombre: 'Pescado', icon: '🐟', color: '#2980B9' },
  { id: 'lacteos', nombre: 'Lácteos', icon: '🥛', color: '#6E2C00' },
  { id: 'huevos', nombre: 'Huevos', icon: '🥚', color: '#F39C12' },
  { id: 'altramuces', nombre: 'Altramuces', icon: '🌼', color: '#F1C40F' }
];

// Datos de personas con dietas especiales
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

// Datos del evento (para mostrar en header)
export const eventoDietasInfo = {
  nombre: "Boda Rivero - Martínez",
  totalDietas: 25,
  contacto: {
    nombre: "JOAN GARCÍA",
    telefono: "93 412 00 33"
  }
};