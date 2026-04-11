import t from "../styles/tokens";

export default function StatCard({ label, children, style }) {
  return (
    <div
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
        ...style,
      }}
    >
      <span
        style={{
          fontSize: 10,
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