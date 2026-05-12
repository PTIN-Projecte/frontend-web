export const eventoDb = [
    {
    id: 1,
    nombre: "Boda Rivero - Martínez",
    fecha: "2026-04-01",
    horaInicio: "13:00",
    horaFin: "18:00",
    eventosCoincidentes: 4,
    
    comensales: 134,
    confirmados: 97,
    dietasEspeciales: 25,
    
    contacto: {
        nombre: "JOAN GARCÍA",
        telefono: "93 412 00 33"
    },
    
    recinto: {
        nombre: "Sala Blava - Planta Baja",
        capacidad: 300
    },
    
    menu: {
        nombre: "Menú Nupcial Premium",
        estado: "Pendiente",
        tags: ["Boda", "Menú degustación"]
    },
    
    utilesNecesarios: [
        { nombre: "Proyector", cantidad: 1 },
        { nombre: "Pantalla", cantidad: 1 },
        { nombre: "Soporte jamonero", cantidad: 3 },
        { nombre: "Cuchillo jamonero", cantidad: 3 },
        { nombre: "Sartén (35cm)", cantidad: 10 },
        { nombre: "Nevera para vino", cantidad: 2 },
        { nombre: "Vajilla", cantidad: 150 }
    ],
    
    peticionesProduccion: [
        { item: "Proyector", estado: "Confirmada" },
        { item: "Pantalla", estado: "Confirmada" },
        { item: "Menú vegano", estado: "Pendiente" },
        { item: "Menú sin frutos secos", estado: "Pendiente" }
    ]
    },
    {
    id: 2,
    nombre: "Conferencia Tech Innovate",
    fecha: "2026-06-15",
    horaInicio: "09:00",
    horaFin: "14:30",
    eventosCoincidentes: 2,
    
    comensales: 250,
    confirmados: 210,
    dietasEspeciales: 45,
    
    contacto: {
        nombre: "ELENA MARÍN",
        telefono: "91 555 22 11"
    },
    
    recinto: {
        nombre: "Auditorio Principal - Ala Norte",
        capacidad: 500
    },
    
    menu: {
        nombre: "Catering Ejecutivo Buffet",
        estado: "Confirmado",
        tags: ["Corporativo", "Networking", "Finger Food"]
    },
    
    utilesNecesarios: [
        { nombre: "Micrófonos inalámbricos", cantidad: 4 },
        { nombre: "Atril de madera", cantidad: 1 },
        { nombre: "Mesas de apoyo", cantidad: 8 },
        { nombre: "Mantelería blanca", cantidad: 25 },
        { nombre: "Puntos de carga USB", cantidad: 10 },
        { nombre: "Termos de café", cantidad: 12 },
        { nombre: "Copas de agua", cantidad: 250 }
    ],
    
    peticionesProduccion: [
        { item: "Sonido y PA", estado: "Confirmada" },
        { item: "Wifi Alta Velocidad", estado: "Confirmada" },
        { item: "Opciones Celíacas", estado: "En Revisión" },
        { item: "Traducción simultánea", estado: "Pendiente" }
    ]
}
];