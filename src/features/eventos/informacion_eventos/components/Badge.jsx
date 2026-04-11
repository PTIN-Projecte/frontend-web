import t from "../styles/tokens";

export default function Badge({ estado }) {
  const isPending = estado === "Pendiente";
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12,
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: 20,
        background: isPending ? t.pendienteBg : t.confirmadaBg,
        color: isPending ? t.pendienteText : t.confirmadaText,
        border: `1px solid ${isPending ? t.pendienteBorder : t.confirmadaBorder}`,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}
    >
      {estado}
    </span>
  );
}