/**
 * apiClient.js
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS IS THE ONLY FILE THAT CHANGES WHEN THE REAL API IS READY.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Current mode: sessionStorage mock
 *   - Data persists across page reloads within the same browser tab
 *   - Data resets when the tab/browser is closed (clean dev state)
 *   - Simulates network latency with configurable delay
 *
 */

// ── Config ────────────────────────────────────────────────────────────────────
const MOCK_DELAY_MS = 400; // simulated network latency
const IS_MOCK = true;      // flip to false when real API is connected

// ── Initial seed data (used on first load if sessionStorage is empty) ─────────
import { db as _db } from "./mockSeedData";

// Carga desde localStorage si hay datos guardados, si no usa el mock original
function loadDb() {
  try {
    const saved = localStorage.getItem("mockDb");
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(_db));
  } catch {
    return JSON.parse(JSON.stringify(_db));
  }
}

function saveDb(db) {
  localStorage.setItem("mockDb", JSON.stringify(db));
}

// Estado en memoria, inicializado desde localStorage
const db = loadDb();

const clone = (x) => JSON.parse(JSON.stringify(x));
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const SIMULATED_DELAY_MS = 300;

export async function get(path) {
  await delay(SIMULATED_DELAY_MS);

  const eventoMatch = path.match(/^\/eventos\/([^/]+)$/);
  if (eventoMatch) {
    const ev = db.eventos.find((e) => e.id === eventoMatch[1]);
    if (!ev) throw new Error(`404 – Evento '${eventoMatch[1]}' not found`);
    return clone(ev);
  }

  const dietasMatch = path.match(/^\/eventos\/([^/]+)\/dietas$/);
  if (dietasMatch) {
    const grupos = db.dietas[dietasMatch[1]] ?? [];
    return clone(grupos);
  }

  if (path === "/eventos") return clone(db.eventos);
  if (path === "/recintos") return clone(db.recintos);

  throw new Error(`404 – Mock: unknown path '${path}'`);
}

export async function put(path, body) {
  await delay(SIMULATED_DELAY_MS);

  const eventoMatch = path.match(/^\/eventos\/([^/]+)$/);
  if (eventoMatch) {
    const idx = db.eventos.findIndex((e) => e.id === eventoMatch[1]);
    if (idx === -1) throw new Error(`404 – Evento '${eventoMatch[1]}' not found`);
    db.eventos[idx] = { ...db.eventos[idx], ...body };
    saveDb(db);  // ← persiste
    return clone(db.eventos[idx]);
  }

  throw new Error(`404 – Mock: unknown path '${path}'`);
}

export async function putList(path, body) {
  await delay(SIMULATED_DELAY_MS);

  const dietasMatch = path.match(/^\/eventos\/([^/]+)\/dietas$/);
  if (dietasMatch) {
    db.dietas[dietasMatch[1]] = clone(body);
    saveDb(db);  // ← persiste
    return clone(body);
  }

  throw new Error(`404 – Mock: unknown path '${path}'`);
}