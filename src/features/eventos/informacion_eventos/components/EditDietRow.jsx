import { ALLERGENS, ALLERGEN_ORDER } from "../services/dietasService";
import AllergenIcon from "./AlergenIcon";
import t from "../styles/tokens";

export default function EditDietRow({ group, onChange, onToggleAllergen, onDelete, error }) {
  return (
    <div
      style={{
        background: "#fff",
        border: `2px solid ${error ? "#DA0000" : t.gold}`,
        borderRadius: 14,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Top row: personas + etiqueta + delete */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>

        {/* Personas */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: 15, color: t.textSecondary, marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.07em" }}>
            Personas
          </div>
          <input
            type="number"
            min="1"
            value={group.personas}
            onChange={(e) => onChange(group.id, "personas", parseInt(e.target.value) || 1)}
            style={{
              width: 68,
              border: `1px solid ${t.cardBorder}`,
              borderRadius: 8,
              padding: "8px 10px",
              fontSize: 18,
              fontWeight: 500,
              fontFamily: "inherit",
              color: t.textPrimary,
              outline: "none",
              textAlign: "center",
            }}
          />
        </div>

        {/* Etiqueta */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, color: t.textSecondary, marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.07em" }}>
            Etiqueta
          </div>
          <input
            type="text"
            value={group.etiqueta}
            placeholder="Ej. Veganas, Sin gluten…"
            onChange={(e) => onChange(group.id, "etiqueta", e.target.value)}
            style={{
              width: "100%",
              border: `1px solid ${t.cardBorder}`,
              borderRadius: 8,
              padding: "8px 14px",
              fontSize: 18,
              fontFamily: "inherit",
              color: t.textPrimary,
              outline: "none",
            }}
          />
        </div>

        {/* Delete */}
        <button
          onClick={() => onDelete(group.id)}
          title="Eliminar fila"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: t.textMuted,
            fontSize: 30,
            lineHeight: 1,
            padding: 6,
            flexShrink: 0,
            alignSelf: "flex-end",
          }}
        >
          ✕
        </button>
      </div>

      {/* Allergen toggle row */}
      <div>
        <div style={{ fontSize: 15, color: t.textSecondary, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.07em" }}>
          Alérgenos (clic para activar/desactivar)
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {ALLERGEN_ORDER.map((aid) => {
            const active = group.alergenos.includes(aid);
            return (
              <button
                key={aid}
                onClick={() => onToggleAllergen(group.id, aid)}
                title={ALLERGENS[aid]?.label}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  opacity: active ? 1 : 0.25,
                  transition: "opacity 0.15s",
                  borderRadius: "50%",
                }}
              >
                <AllergenIcon id={aid} size={50} showBan={false} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div style={{ fontSize: 12, color: "#DA0000" }}>{error}</div>
      )}
    </div>
  );
}