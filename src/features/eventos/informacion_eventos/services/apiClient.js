/**
 * apiClient.js
 */

const MOCK_DELAY_MS = 400;
const IS_MOCK = true;

import { db as _db } from "./mockSeedData";

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

const db = loadDb();

const clone = (x) => JSON.parse(JSON.stringify(x));
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const SIMULATED_DELAY_MS = 300;

export async function get(path) {
  await delay(SIMULATED_DELAY_MS);

  const eventoMatch = path.match(/^\/eventos\/([^/]+)$/);
  console.log('path:', path, 'match:', eventoMatch);
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
    saveDb(db);
    return clone(db.eventos[idx]);
  }

  throw new Error(`404 – Mock: unknown path '${path}'`);
}

export async function putList(path, body) {
  await delay(SIMULATED_DELAY_MS);

  const dietasMatch = path.match(/^\/eventos\/([^/]+)\/dietas$/);
  if (dietasMatch) {
    db.dietas[dietasMatch[1]] = clone(body);
    saveDb(db);
    return clone(body);
  }

  throw new Error(`404 – Mock: unknown path '${path}'`);
}