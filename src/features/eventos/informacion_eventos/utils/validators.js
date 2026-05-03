/**
 * Validates a draft evento object.
 * Returns an object of { field: errorMessage }.
 * Empty object = valid.
 */
export function validateEvento(draft, allEventos = [], currentId = null) {
  const errors = {};

  // ── Nombre ────────────────────────────────────────────────────
  if (!draft.title || draft.title.trim().length === 0) {
    errors.title = "El nombre del evento es obligatorio.";
  } else if (draft.title.trim().length < 3) {
    errors.title = "El nombre debe tener al menos 3 caracteres.";
  } else if (draft.title.trim().length > 100) {
    errors.title = "El nombre no puede superar 100 caracteres.";
  }

  // ── Fecha ─────────────────────────────────────────────────────
  if (!draft.dateISO) {
    errors.date = "La fecha es obligatoria.";
  } else {
    const eventDate = new Date(draft.dateISO);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(eventDate.getTime())) {
      errors.date = "La fecha no tiene un formato válido.";
    } else if (eventDate < today) {
      errors.date = "La fecha debe ser posterior o igual a hoy.";
    }
  }

  // ── Hora ──────────────────────────────────────────────────────
  if (!draft.startTime) {
    errors.startTime = "La hora de inicio es obligatoria.";
  }
  if (!draft.endTime) {
    errors.endTime = "La hora de fin es obligatoria.";
  }
  if (draft.startTime && draft.endTime && draft.startTime >= draft.endTime) {
    errors.endTime = "La hora de fin debe ser posterior a la de inicio.";
  }

  // ── Confirmados ───────────────────────────────────────────────
  const confirmados = Number(draft.confirmados);
  if (draft.confirmados !== undefined && draft.confirmados !== "") {
    if (!Number.isInteger(confirmados) || confirmados < 0) {
      errors.confirmados = "Debe ser un número entero igual o mayor a 0.";
    } else if (draft.comensales && confirmados > Number(draft.comensales)) {
      errors.confirmados = "Los confirmados no pueden superar el total de comensales.";
    }
  }

  // ── Comensales ────────────────────────────────────────────────
  const comensales = Number(draft.comensales);
  if (!draft.comensales && draft.comensales !== 0) {
    errors.comensales = "El número de comensales es obligatorio.";
  } else if (!Number.isInteger(comensales) || comensales <= 0) {
    errors.comensales = "Debe ser un número entero mayor a 0.";
  }

  // ── Contacto ──────────────────────────────────────────────────
  if (!draft.contacto?.nombre?.trim()) {
    errors.contacto = "El nombre del contacto es obligatorio.";
  }

  // ── Recinto ───────────────────────────────────────────────────
  if (!draft.recintoId) {
    errors.recinto = "Debe seleccionar un recinto.";
  }

  // ── Duplicados ────────────────────────────────────────────────
  const isDuplicate = allEventos.some(
    (ev) =>
      ev.id !== currentId &&
      ev.title.trim().toLowerCase() === draft.title?.trim().toLowerCase() &&
      ev.dateISO === draft.dateISO &&
      ev.recintoId === draft.recintoId
  );
  if (isDuplicate) {
    errors.duplicate =
      "Ya existe un evento con el mismo nombre, fecha y recinto.";
  }

  return errors;
}

/**
 * Returns a warning message if comensales > recinto capacity.
 * Returns null if no warning.
 */
export function getCapacityWarning(draft, recintos) {
  if (!draft.recintoId || !draft.comensales) return null;
  const recinto = recintos.find((r) => r.id === draft.recintoId);
  if (!recinto) return null;
  const comensales = Number(draft.comensales);
  if (comensales > recinto.capacidad) {
    return `El número de comensales (${comensales}) supera la capacidad del recinto (${recinto.capacidad}). ¿Desea continuar igualmente?`;
  }
  return null;
}