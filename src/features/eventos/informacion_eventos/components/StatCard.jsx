import t from "../styles/tokens";

export default function StatCard({ label, children, style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: t.cardBg,
        border: `1px solid ${t.cardBorder}`,
        borderRadius: 12,
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        flex: 1,
        minWidth: 0,
        transition: onClick ? "border-color 0.15s" : undefined,
        ...style,
      }}
      onMouseEnter={onClick ? (e) => (e.currentTarget.style.borderColor = t.gold) : undefined}
      onMouseLeave={onClick ? (e) => (e.currentTarget.style.borderColor = t.cardBorder) : undefined}
    >
      <span
        style={{
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: t.textSecondary,
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}