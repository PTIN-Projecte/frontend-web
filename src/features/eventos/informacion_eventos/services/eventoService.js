// Hardcoded mock data – will be replaced by a real service call
const mockEvento = {
  title: "Boda Rivero - Martínez",
  date: "Miércoles 1 de Abril de 2026",
  time: "13:00-18:00h",
  coincidentes: 4,
  comensales: 134,
  confirmados: 97,
  dietasEspeciales: 25,
  contacto: {
    nombre: "JOAN GARCÍA",
    telefono: "93 412 00 33",
  },
  recinto: {
    sala: "Sala Blava",
    planta: "Planta Baja",
    capacidad: 300,
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
};

/**
 * Fetches event data from the API.
 * @param {string} eventoId - the event slug/id from the URL.
 *   Ignored by the mock; will be used in the real fetch call.
 */
export async function getEvento(eventoId) {
  // TODO: replace with real API call:
  // const res = await fetch(`/api/eventos/${eventoId}`);
  // return res.json();
  return mockEvento;
}