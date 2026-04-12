import { useState, useRef, useEffect } from "react";
import t from "../styles/tokens";

export default function RecintoSelector({ recintos, selectedId, onSelect }) {
  const [query, setQuery]   = useState("");
  const [open, setOpen]     = useState(false);
  const containerRef = useRef(null);

  const selected = recintos.find((r) => r.id === selectedId);

  const filtered = recintos.filter((r) => {
    const q = query.toLowerCase();
    return (
      r.sala.toLowerCase().includes(q) ||
      r.planta.toLowerCase().includes(q) ||
      r.localidad.toLowerCase().includes(q) ||
      r.cp.includes(q)
    );
  });

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "#fff",
          border: `2px solid ${t.gold}`,
          borderRadius: 8,
          padding: "8px 12px",
          textAlign: "left",
          cursor: "pointer",
          fontFamily: "inherit",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          {selected ? (
            <>
              <div style={{ fontSize: 14, fontWeight: 500, color: t.textPrimary }}>{selected.sala}</div>
              <div style={{ fontSize: 11, color: t.textSecondary }}>{selected.planta} · Cap. {selected.capacidad}</div>
            </>
          ) : (
            <span style={{ fontSize: 13, color: t.textMuted }}>Seleccionar recinto…</span>
          )}
        </div>
        <span style={{ color: t.textMuted, fontSize: 14 }}>{open ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#fff",
            border: `1px solid ${t.cardBorder}`,
            borderRadius: 10,
            boxShadow: "0 4px 20px rgba(43,37,32,0.12)",
            zIndex: 300,
            overflow: "hidden",
          }}
        >
          {/* Search */}
          <div style={{ padding: "10px 12px", borderBottom: `1px solid ${t.divider}` }}>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre, localidad o CP…"
              style={{
                width: "100%",
                border: `1px solid ${t.cardBorder}`,
                borderRadius: 6,
                padding: "6px 10px",
                fontSize: 13,
                fontFamily: "inherit",
                color: t.textPrimary,
                outline: "none",
              }}
            />
          </div>

          {/* List */}
          <div style={{ maxHeight: 200, overflowY: "auto" }}>
            {filtered.length === 0 ? (
              <div style={{ padding: "12px 14px", fontSize: 13, color: t.textMuted }}>
                Sin resultados.
              </div>
            ) : (
              filtered.map((r) => (
                <button
                  key={r.id}
                  onClick={() => { onSelect(r.id); setOpen(false); setQuery(""); }}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px 14px",
                    background: r.id === selectedId ? "#FEF0E2" : "none",
                    border: "none",
                    borderBottom: `1px solid ${t.divider}`,
                    textAlign: "left",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => { if (r.id !== selectedId) e.currentTarget.style.background = t.tagBg; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = r.id === selectedId ? "#FEF0E2" : "none"; }}
                >
                  <div style={{ fontSize: 14, fontWeight: 500, color: t.textPrimary }}>{r.sala} — {r.planta}</div>
                  <div style={{ fontSize: 11, color: t.textSecondary, marginTop: 2 }}>
                    Cap. {r.capacidad} · {r.direccion} · {r.cp} {r.localidad}
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <button
            onClick={() => alert("Funcionalidad de añadir recinto próximamente.")}
            style={{
              display: "block",
              width: "100%",
              padding: "10px 14px",
              background: t.sectionBg,
              border: "none",
              borderTop: `1px solid ${t.divider}`,
              color: t.gold,
              fontSize: 13,
              fontWeight: 500,
              textAlign: "left",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            + Agregar nuevo recinto
          </button>
        </div>
      )}
    </div>
  );
}