/**
 * eventoService.js
 *
 * Business logic layer for events.
 * Calls apiClient — never calls fetch() directly.
 * When the real API is ready, ONLY apiClient.js changes.
 */
import { get, put } from "./apiClient";

// ── Helpers ───────────────────────────────────────────────────────────────────
const DAYS_ES   = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const MONTHS_ES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

export function formatDateDisplay(dateISO) {
  if (!dateISO) return "";
  const d = new Date(dateISO + "T12:00:00");
  return `${DAYS_ES[d.getDay()]} ${d.getDate()} de ${MONTHS_ES[d.getMonth()]} de ${d.getFullYear()}`;
}

// ── Service calls ─────────────────────────────────────────────────────────────

/** Fetch a single event by ID */
export async function getEvento(eventoId) {
  const eventos = await get("/eventos");
  const evento  = eventos.find((e) => e.id === eventoId);
  if (!evento) throw new Error(`Evento '${eventoId}' not found`);
  return evento;
}

/** Fetch all events (used for duplicate check) */
export async function getAllEventos() {
  return get("/eventos");
}

/** Fetch all recintos */
export async function getRecintos() {
  return get("/recintos");
}

/**
 * Save (update) an event.
 * Rebuilds the derived fields (date display text, recinto object)
 * so the UI can update immediately without a second fetch.
 */
export async function saveEvento(draft) {
  const recintos = await getRecintos();
  const recinto  = recintos.find((r) => r.id === draft.recintoId);

  const updated = {
    ...draft,
    date: formatDateDisplay(draft.dateISO),
    recinto: recinto ?? null,
  };

  // PUT updates the event inside the /eventos list
  await put("/eventos", updated);
  return updated;
}