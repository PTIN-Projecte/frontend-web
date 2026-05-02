/**
 * dietasService.js
 *
 * Business logic layer for diets/allergens.
 * Calls apiClient — never calls fetch() directly.
 */
import { get, putList } from "./apiClient";

// ── Allergen catalogue ─────────────────────────────────────────────────────────
// Static data — comes from the frontend config, not the API.
export const ALLERGENS = {
  gluten:    { id: "gluten",    label: "Contiene gluten",               color: "#D97B3A" },
  apio:      { id: "apio",      label: "Apio",                           color: "#5DA05D" },
  cacahuete: { id: "cacahuete", label: "Cacahuetes",                     color: "#C17B3A" },
  mostaza:   { id: "mostaza",   label: "Mostaza",                        color: "#B8A020" },
  sesamo:    { id: "sesamo",    label: "Granos de sésamo",               color: "#8A7A60" },
  moluscos:  { id: "moluscos",  label: "Moluscos",                       color: "#4A90B8" },
  sulfitos:  { id: "sulfitos",  label: "Dióxido de azufre y sulfitos",   color: "#9B6BA0" },
  crustaceo: { id: "crustaceo", label: "Crustáceos",                    color: "#D45A3A" },
  frutosCas: { id: "frutosCas", label: "Frutos de cáscara",              color: "#A0522D" },
  soja:      { id: "soja",      label: "Soja",                           color: "#6B9A3A" },
  pescado:   { id: "pescado",   label: "Pescado",                        color: "#2A7AB8" },
  lacteos:   { id: "lacteos",   label: "Lácteos",                        color: "#6B3A8A" },
  huevos:    { id: "huevos",    label: "Huevos",                         color: "#D4A020" },
};

// Canonical display order for the allergen catalogue
export const ALLERGEN_ORDER = Object.keys(ALLERGENS);

// Sort options for the view
export const SORT_OPTIONS = [
  { id: "comun",       label: "Por alergias/dietas comunes" },
  { id: "afectados",   label: "Por número de afectados"     },
  { id: "complejidad", label: "Por complejidad"              },
  { id: "alergeno",    label: "Por alérgeno"                 },
];

// ── ID generator (client-side only, real IDs come from backend) ───────────────
let _nextId = 100; // Start high to avoid collisions with seeded IDs
export function getNextDietaId() { return _nextId++; }

// ── Service calls ─────────────────────────────────────────────────────────────

/** Fetch all diet groups for an event (eventoId for real API routing) */
export async function getRawDietas(eventoId) {
  const list = await get(`/eventos/${eventoId}/dietas`);
  return list.map((g) => ({ ...g, alergenos: [...g.alergenos] }));
}

/**
 * Replace the entire dietas list for an event.
 * Returns the saved list.
 */
export async function saveDietas(updatedDietas, eventoId) {
  const saved = await putList(`/eventos/${eventoId}/dietas`, updatedDietas);
  return saved.map((g) => ({ ...g, alergenos: [...g.alergenos] }));
}