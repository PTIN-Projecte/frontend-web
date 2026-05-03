/**
 * mockSeedData.js
 *
 * Initial data for the mock API.
 * This is the equivalent of what the backend would return on first GET.
 * Only used by apiClient.js on first load (when sessionStorage is empty).
 *
 * When the real API is connected, this file becomes irrelevant.
 */

export const db = {
  eventos: [
    {
      id: "evt-1",
      title: "Boda Rivero - Martínez",
      dateISO: "2025-06-14",
      date: "Sábado 14 de Junio de 2025",
      startTime: "13:00",
      endTime: "18:00",
      comensales: 120,
      confirmados: 98,
      dietasEspeciales: 25,
      coincidentes: 3,
      contacto: { nombre: "JOAN GARCÍA", telefono: "93 412 00 33" },
      recintoId: "rec-1",
      recinto: {
        sala: "Sala Principal",
        planta: "Planta 1",
        capacidad: 200,
        direccion: "Carrer de Provença, 123",
        cp: "08036",
        localidad: "Barcelona",
      },
      menu: {
        nombre: "Menú Mediterráneo",
        estado: "Confirmado",
        tags: ["Temporada", "Sin gluten"],
      },
      utiles: ["Sillas chiavari", "Manteles blancos", "Atril"],
      peticiones: [
        { nombre: "Cambio entrante", estado: "Pendiente" },
        { nombre: "Postre sin lactosa", estado: "Aceptada" },
      ],
    },
    {
      id: "evt-2",
      title: "Cumpleaños Empresa Tech",
      dateISO: "2025-06-14",
      date: "Sábado 14 de Junio de 2025",
      startTime: "20:00",
      endTime: "23:00",
      comensales: 60,
      confirmados: 55,
      dietasEspeciales: 8,
      coincidentes: 3,
      contacto: { nombre: "MARTA PUIG", telefono: "93 555 11 22" },
      recintoId: "rec-2",
      recinto: {
        sala: "Sala Terraza",
        planta: "Planta 3",
        capacidad: 80,
        direccion: "Av. Diagonal, 456",
        cp: "08037",
        localidad: "Barcelona",
      },
      menu: {
        nombre: "Menú Fusión",
        estado: "Pendiente",
        tags: ["Internacional"],
      },
      utiles: ["Mesas altas", "Iluminación LED"],
      peticiones: [],
    },
  ],

  recintos: [
    {
      id: "rec-1",
      sala: "Sala Principal",
      planta: "Planta 1",
      capacidad: 200,
      direccion: "Carrer de Provença, 123",
      cp: "08036",
      localidad: "Barcelona",
    },
    {
      id: "rec-2",
      sala: "Sala Terraza",
      planta: "Planta 3",
      capacidad: 80,
      direccion: "Av. Diagonal, 456",
      cp: "08037",
      localidad: "Barcelona",
    },
  ],

  // Keyed by eventoId for easy lookup
  dietas: {
    "evt-1": [
      { id: 1, etiqueta: "Veganas",              personas: 3, alergenos: ["gluten","lacteos","huevos","pescado","crustaceo"] },
      { id: 2, etiqueta: "Sin frutos secos",     personas: 2, alergenos: ["frutosCas","cacahuete"] },
      { id: 3, etiqueta: "Celiacas",             personas: 5, alergenos: ["gluten"] },
      { id: 4, etiqueta: "Celiacas y sin lactosa", personas: 3, alergenos: ["gluten","lacteos"] },
      { id: 5, etiqueta: "Vegana y celiaca",     personas: 5, alergenos: ["gluten","lacteos","huevos","pescado","crustaceo","frutosCas"] },
      { id: 6, etiqueta: "Sin apio",             personas: 1, alergenos: ["apio"] },
      { id: 7, etiqueta: "Sin marisco",          personas: 2, alergenos: ["crustaceo","moluscos"] },
      { id: 8, etiqueta: "Celiaca, sin lactosa y sin apio", personas: 1, alergenos: ["gluten","lacteos","apio"] },
      { id: 9, etiqueta: "Celiaca y sin pescado", personas: 3, alergenos: ["gluten","pescado"] },
    ],
    "evt-2": [
      { id: 10, etiqueta: "Sin gluten",  personas: 4, alergenos: ["gluten"] },
      { id: 11, etiqueta: "Sin lactosa", personas: 4, alergenos: ["lacteos"] },
    ],
  },
};