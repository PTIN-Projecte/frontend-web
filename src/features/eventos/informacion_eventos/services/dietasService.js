/**
 * dietasService.js
 * Returns RAW data from the API (mocked).
 * No sorting or transformation logic here — that lives in utils/dietasTransforms.js.
 *
 * Each group = a set of people sharing the same dietary restrictions.
 * alergenos[] = list of allergen IDs they cannot have.
 */

// ── Allergen catalogue (13 EU allergens) ─────────────────────────────────────
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

// Canonical allergen order (catalogue display order)
export const ALLERGEN_ORDER = Object.keys(ALLERGENS);

export const SORT_OPTIONS = [
  { id: "comun",       label: "Por alergias/dietas comunes" },
  { id: "afectados",   label: "Por número de afectados"     },
  { id: "complejidad", label: "Por complejidad"              },
  { id: "alergeno",    label: "Por alérgeno"                 },
];

// ── Mock raw data (replace with real fetch when API is ready) ─────────────────
// Total: 3+2+5+3+5+1+2+1+3 = 25 personas
const RAW_DIETAS = [
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

/**
 * Fetches raw diet groups from the API.
 * Simulates network latency.
 */
export async function getRawDietas() {
  await new Promise((r) => setTimeout(r, 1400));
  // Deep clone so transforms don't mutate the source
  return RAW_DIETAS.map((g) => ({ ...g, alergenos: [...g.alergenos] }));
}