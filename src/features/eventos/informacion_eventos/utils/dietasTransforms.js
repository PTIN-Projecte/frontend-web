/**
 * Pure transformation functions for diet/allergen data.
 * Input is always the raw API groups:
 *   [{ id, personas, etiqueta, alergenos: string[] }]
 *
 * Each function returns a { viewType, data } object so the
 * page knows which layout to render.
 */

// ── Mode: groups (comun / afectados / complejidad) ────────────────────────────
// Each person appears exactly once. Total personas = sum across groups.

export function transformByComun(rawGroups) {
  if (!Array.isArray(rawGroups) || rawGroups.length === 0) return { viewType: "groups", data: [] };
  return {
    viewType: "groups",
    data: [...rawGroups], // original API order
  };
}

export function transformByAfectados(rawGroups) {
  if (!Array.isArray(rawGroups) || rawGroups.length === 0) return { viewType: "groups", data: [] };
  return {
    viewType: "groups",
    data: [...rawGroups].sort((a, b) => b.personas - a.personas),
  };
}

export function transformByComplejidad(rawGroups) {
  if (!Array.isArray(rawGroups) || rawGroups.length === 0) return { viewType: "groups", data: [] };
  return {
    viewType: "groups",
    data: [...rawGroups].sort((a, b) => b.alergenos.length - a.alergenos.length),
  };
}

// ── Mode: allergens ───────────────────────────────────────────────────────────
// Groups by allergen. A person can appear in MULTIPLE sections.
// Total personas across all sections > raw total (intentional).
//
// Returns: [{ allergenId, totalPersonas, groups: [...] }]
// Ordered by totalPersonas descending so the most critical allergen leads.

export function transformByAlergeno(rawGroups, allergenOrder) {
  if (!Array.isArray(rawGroups) || rawGroups.length === 0) return { viewType: "groups", data: [] };
  // Build a map: allergenId → { totalPersonas, groups[] }
  const map = {};

  rawGroups.forEach((group) => {
    group.alergenos.forEach((aid) => {
      if (!map[aid]) {
        map[aid] = { allergenId: aid, totalPersonas: 0, groups: [] };
      }
      map[aid].totalPersonas += group.personas;
      map[aid].groups.push(group);
    });
  });

  // Sort sections by totalPersonas desc, then use allergenOrder as tiebreaker
  const sections = Object.values(map).sort((a, b) => {
    if (b.totalPersonas !== a.totalPersonas) return b.totalPersonas - a.totalPersonas;
    // Tiebreaker: maintain catalogue order
    const ai = allergenOrder.indexOf(a.allergenId);
    const bi = allergenOrder.indexOf(b.allergenId);
    return ai - bi;
  });

  return {
    viewType: "allergens",
    data: sections,
  };
}

// ── Dispatcher ────────────────────────────────────────────────────────────────
export function applyTransform(sortId, rawGroups, allergenOrder) {
  switch (sortId) {
    case "afectados":   return transformByAfectados(rawGroups);
    case "complejidad": return transformByComplejidad(rawGroups);
    case "alergeno":    return transformByAlergeno(rawGroups, allergenOrder);
    case "comun":
    default:            return transformByComun(rawGroups);
  }
}