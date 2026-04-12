import t from "../styles/tokens";

/**
 * SectionRow — label | separator | content
 * The label column is a FIXED 140px so all three vertical
 * separators align perfectly regardless of label text length.
 */
export default function SectionRow({ label, children, showChevron, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: t.cardBg,
        border: `1px solid ${t.cardBorder}`,
        borderRadius: 12,
        padding: "16px 25px 16px 20px",
        display: "flex",
        alignItems: "stretch",
        gap: 0,
        cursor: onClick ? "pointer" : "default",
        transition: onClick ? "border-color 0.15s" : undefined,
      }}
      onMouseEnter={onClick ? (e) => (e.currentTarget.style.borderColor = t.gold) : undefined}
      onMouseLeave={onClick ? (e) => (e.currentTarget.style.borderColor = t.cardBorder) : undefined}
    >
      {/* Label — FIXED width so separators always align */}
      <div
        style={{
          width: 140,          // fixed, not minWidth
          flexShrink: 0,
          fontSize: 20,
          fontWeight: 500,
          color: t.textSecondary,
          lineHeight: 1.5,
          paddingRight: 22,
          borderRight: "1px solid #D8D3CB",
          display: "flex",
          alignItems: "center",
        }}
      >
        {label}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0, paddingLeft: 22, display: "flex", alignItems: "center" }}>
        {children}
      </div>

      {showChevron && (
        <span style={{ color: t.textMuted, fontSize: 20, flexShrink: 0, display: "flex", alignItems: "center", paddingLeft: 12 }}>
          ›
        </span>
      )}
    </div>
  );
}