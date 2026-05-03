import t from "../styles/tokens";

export default function LoadingSpinner({ message = "Cargando…" }) {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
      }}
    >
      <p style={{ fontSize: 18, color: t.textPrimary, fontFamily: "Georgia, serif" }}>
        {message}
      </p>
      {/* Two-tone spinner matching Cal Blay mockup */}
      <div style={{ position: "relative", width: 80, height: 80 }}>
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ animation: "spin 1.2s linear infinite" }}>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          {/* Light arc */}
          <circle
            cx="40" cy="40" r="32"
            fill="none"
            stroke="#E4DFD6"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Gold accent arc */}
          <circle
            cx="40" cy="40" r="32"
            fill="none"
            stroke="#B8915A"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="50 150"
            strokeDashoffset="0"
          />
        </svg>
      </div>
    </div>
  );
}