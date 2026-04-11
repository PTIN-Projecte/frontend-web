import t from "../styles/tokens";

export default function SectionRow({ label, children, showChevron }) {
  return (
    <div
      style={{
        background: t.cardBg,
        border: `1px solid ${t.cardBorder}`,
        borderRadius: 12,
        padding: "16px 25px",
        display: "flex",
        alignItems: "stretch",
        gap: 0,
      }}
    >
      <span
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: t.textSecondary,
          minWidth: 120,
          flexShrink: 0,
          lineHeight: 1.5,
          paddingRight: 22,
          borderRight: "1px solid #D8D3CB",
          display: "flex",
          alignItems: "center",
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, minWidth: 0, paddingLeft: 22, display: "flex", alignItems: "center" }}>{children}</div>
      {showChevron && (
        <span style={{ color: "#A09990", fontSize: 20, flexShrink: 0, lineHeight: 1, display: "flex", alignItems: "center", paddingLeft: 12 }}>
          ›
        </span>
      )}
    </div>
  );
}