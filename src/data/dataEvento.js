export const eventoDb = [
  {
    id: 1,
    nombre: "Boda Rivero - Martínez",
    fecha: "2025-06-14",
    horaInicio: "13:00",
    horaFin: "18:00",
    eventosCoincidentes: 3,
    comensales: 120,
    confirmados: 98,
    dietasEspeciales: 25,
    contacto: { nombre: "JOAN GARCÍA", telefono: "93 412 00 33" },
    recinto: { nombre: "Sala Principal Planta 1", capacidad: 200 },
    menu: {
      nombre: "Menú Mediterráneo",
      estado: "Confirmado",
      tags: ["Temporada", "Sin gluten"]
    },
    utilesNecesarios: [
      { nombre: "Sillas chiavari" },
      { nombre: "Manteles blancos" },
      { nombre: "Atril" }
    ],
    peticionesProduccion: [
      { item: "Cambio entrante", estado: "Pendiente" },
      { item: "Postre sin lactosa", estado: "Aceptada" }
    ]
  }
];