import t from "../styles/tokens";

const roles = [
  { id: "comercial", label: "Comercial", desc: "Vista con edición" },
  { id: "produccion", label: "Producción", desc: "Vista de lectura" },
];

export default function RoleSelector({ onSelect }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(43, 37, 32, 0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
      }}
    >
      <div
        style={{
          background: t.cardBg,
          borderRadius: 16,
          padding: "36px 40px",
          width: 540,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            borderTop: `1px solid ${t.cardBorder}`,
            borderBottom: `1px solid ${t.cardBorder}`,
            padding: "5px 18px",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: t.textSecondary,
            fontFamily: "Georgia, serif",
            marginBottom: 16,
          }}
        >
          Cal Blay
        </div>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: t.textPrimary,
            margin: "0 0 6px",
            fontFamily: "Georgia, serif",
          }}
        >
          Entrar como
        </h2>
        <p style={{ fontSize: 13, color: t.textSecondary, margin: "0 0 24px" }}>
          Selecciona tu rol para depurar la vista
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => onSelect(r.id)}
              style={{
                border: `1px solid ${t.cardBorder}`,
                borderRadius: 10,
                padding: "14px 18px",
                background: t.sectionBg,
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = t.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = t.cardBorder)}
            >
              <div style={{ fontSize: 15, fontWeight: 500, color: t.textPrimary, marginBottom: 2 }}>
                {r.label}
              </div>
              <div style={{ fontSize: 12, color: t.textSecondary }}>{r.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}