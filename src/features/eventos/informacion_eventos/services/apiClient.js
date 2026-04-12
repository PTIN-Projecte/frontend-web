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
 * When real API is ready, replace the body of `get`, `post`, and `put`
 * with real fetch() calls to your backend. Example:
 *
 *   export async function get(endpoint) {
 *     const res = await fetch(`${API_BASE_URL}${endpoint}`, {
 *       headers: { Authorization: `Bearer ${getToken()}` },
 *     });
 *     if (!res.ok) throw new Error(`GET ${endpoint} failed: ${res.status}`);
 *     return res.json();
 *   }
 *
 *   export async function post(endpoint, data) {
 *     const res = await fetch(`${API_BASE_URL}${endpoint}`, {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
 *       body: JSON.stringify(data),
 *     });
 *     if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
 *     return res.json();
 *   }
 *
 *   export async function put(endpoint, data) { ... }
 *   export async function del(endpoint) { ... }
 */

// ── Config ────────────────────────────────────────────────────────────────────
const MOCK_DELAY_MS = 400; // simulated network latency
const IS_MOCK = true;      // flip to false when real API is connected

// ── Initial seed data (used on first load if sessionStorage is empty) ─────────
import { SEED_EVENTOS, SEED_DIETAS, SEED_RECINTOS } from "./mockSeedData";

const SEEDS = {
  "/eventos":  SEED_EVENTOS,
  "/recintos": SEED_RECINTOS,
  "/dietas":   SEED_DIETAS,
};

// ── SessionStorage helpers ────────────────────────────────────────────────────

function storageKey(endpoint) {
  return `calblay_mock${endpoint.replace(/\//g, "_")}`;
}

function readStore(endpoint) {
  const key = storageKey(endpoint);
  const raw = sessionStorage.getItem(key);
  if (raw !== null) return JSON.parse(raw);
  // First load: seed from initial data
  const seed = SEEDS[endpoint];
  if (seed !== undefined) {
    sessionStorage.setItem(key, JSON.stringify(seed));
    return seed;
  }
  return null;
}

function writeStore(endpoint, data) {
  sessionStorage.setItem(storageKey(endpoint), JSON.stringify(data));
}

function delay() {
  return new Promise((r) => setTimeout(r, MOCK_DELAY_MS));
}

// ── Public API (same interface as real fetch wrapper) ─────────────────────────

/** GET /endpoint → returns stored data */
export async function get(endpoint) {
  await delay();
  const data = readStore(endpoint);
  if (data === null) throw new Error(`Mock: no data for ${endpoint}`);
  return structuredClone(data);
}

/** POST /endpoint → appends item, returns new list */
export async function post(endpoint, item) {
  await delay();
  const list = readStore(endpoint) ?? [];
  const newList = Array.isArray(list) ? [...list, item] : item;
  writeStore(endpoint, newList);
  return structuredClone(item);
}

/**
 * PUT /endpoint/:id → updates one item in a list by id field.
 * If endpoint is not a list, replaces the entire record.
 */
export async function put(endpoint, data) {
  await delay();
  const current = readStore(endpoint);
  if (Array.isArray(current)) {
    const updated = current.map((item) =>
      item.id === data.id ? { ...item, ...data } : item
    );
    writeStore(endpoint, updated);
    return structuredClone(data);
  }
  // Single record (e.g. /eventos/boda-rivero-martinez)
  const merged = { ...current, ...data };
  writeStore(endpoint, merged);
  return structuredClone(merged);
}

/** DELETE /endpoint/:id → removes item from list */
export async function del(endpoint) {
  await delay();
  // For list endpoints: caller is responsible for re-PUTting the full list
  writeStore(endpoint, null);
  return { ok: true };
}

/** Replaces entire resource (used for dietas list) */
export async function putList(endpoint, list) {
  await delay();
  writeStore(endpoint, list);
  return structuredClone(list);
}