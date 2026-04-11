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
        alignItems: "center",
        gap: 16,
      }}
    >
      <span
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: t.textSecondary,
          minWidth: 88,
          flexShrink: 0,
          lineHeight: 1.5,
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
      {showChevron && (
        <span style={{ color: t.textMuted, fontSize: 20, flexShrink: 0, lineHeight: 1 }}>
          ›
        </span>
      )}
    </div>
  );
}