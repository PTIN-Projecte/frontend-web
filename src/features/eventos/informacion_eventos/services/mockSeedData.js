/**
 * mockSeedData.js
 *
 * Initial data for the mock API.
 * This is the equivalent of what the backend would return on first GET.
 * Only used by apiClient.js on first load (when sessionStorage is empty).
 *
 * When the real API is connected, this file becomes irrelevant.
 */

export const SEED_RECINTOS = [
  {
    id: 1,
    sala: "Sala Blava",
    planta: "Planta Baja",
    capacidad: 300,
    direccion: "Carretera de Martorell 2",
    cp: "08760",
    localidad: "Martorell",
  },
  {
    id: 2,
    sala: "Carpa este",
    planta: "Privé",
    capacidad: 300,
    direccion: "Avinguda del Penedès 45",
    cp: "08760",
    localidad: "Martorell",
  },
  {
    id: 3,
    sala: "Ca la cinta",
    planta: "Sant Agustí",
    capacidad: 100,
    direccion: "Plaça de Sant Agustí 3",
    cp: "08770",
    localidad: "Sant Sadurní d'Anoia",
  },
  {
    id: 4,
    sala: "Masia Font de la Canya",
    planta: "Planta Principal",
    capacidad: 250,
    direccion: "Camí de la Font 12",
    cp: "08779",
    localidad: "Pacs del Penedès",
  },
];

export const SEED_EVENTOS = [
  {
    id: "boda-rivero-martinez",
    title: "Boda Rivero - Martínez",
    date: "Miércoles 1 de Abril de 2026",
    dateISO: "2026-04-01",
    startTime: "13:00",
    endTime: "18:00",
    coincidentes: 4,
    comensales: 134,
    confirmados: 97,
    dietasEspeciales: 25,
    contacto: {
      nombre: "JOAN GARCÍA",
      telefono: "93 412 00 33",
    },
    recintoId: 1,
    recinto: {
      id: 1,
      sala: "Sala Blava",
      planta: "Planta Baja",
      capacidad: 300,
      direccion: "Carretera de Martorell 2",
      cp: "08760",
      localidad: "Martorell",
    },
    menu: {
      nombre: "Menú Nupcial Premium",
      estado: "Pendiente",
      tags: ["Boda", "Menú degustación"],
    },
    utiles: [
      "Proyector x1",
      "Pantalla x1",
      "Soporte jamonero x3",
      "Cuchillo jamonero x3",
      "Sartén (35cm) x10",
      "Nevera para vino x2",
      "Vajilla x150",
    ],
    peticiones: [
      { nombre: "Proyector", estado: "Confirmada" },
      { nombre: "Pantalla", estado: "Confirmada" },
      { nombre: "Menú vegano", estado: "Pendiente" },
      { nombre: "Menú sin frutos secos", estado: "Pendiente" },
    ],
  },
];

export const SEED_DIETAS = [
  { id: 1, personas: 3, etiqueta: "Veganas",                          alergenos: ["gluten", "lacteos", "pescado", "crustaceo", "huevos"] },
  { id: 2, personas: 2, etiqueta: "Sin frutos secos",                 alergenos: ["cacahuete", "frutosCas"] },
  { id: 3, personas: 5, etiqueta: "Celiacas",                         alergenos: ["gluten"] },
  { id: 4, personas: 3, etiqueta: "Celiacas y sin lactosa",           alergenos: ["gluten", "lacteos"] },
  { id: 5, personas: 5, etiqueta: "Vegana y celiaca",                 alergenos: ["gluten", "lacteos", "pescado", "crustaceo", "huevos", "cacahuete"] },
  { id: 6, personas: 1, etiqueta: "Sin apio",                         alergenos: ["apio"] },
  { id: 7, personas: 2, etiqueta: "Sin marisco",                      alergenos: ["crustaceo"] },
  { id: 8, personas: 1, etiqueta: "Celiacas, sin lactosa y sin apio", alergenos: ["gluten", "lacteos", "apio"] },
  { id: 9, personas: 3, etiqueta: "Celiaca y sin pescado",            alergenos: ["gluten", "pescado"] },
];