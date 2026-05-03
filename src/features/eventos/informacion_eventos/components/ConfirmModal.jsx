import t from "../styles/tokens";

export default function ConfirmModal({
  title = "¿Estás seguro?",
  message,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  confirmColor = t.gold,
  onConfirm,
  onCancel,
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(43,37,32,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 500,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "32px 36px",
          maxWidth: 700,
          width: "90%",
          boxShadow: "0 8px 40px rgba(43,37,32,0.18)",
        }}
      >
        <h3
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: t.textPrimary,
            marginBottom: 12,
            fontFamily: "Georgia, serif",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 20, color: t.textSecondary, lineHeight: 1.6, marginBottom: 28 }}>
          {message}
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button
            onClick={onCancel}
            style={{
              background: "none",
              border: `1px solid ${t.cardBorder}`,
              borderRadius: 20,
              padding: "8px 20px",
              fontSize: 20,
              color: t.textPrimary,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            style={{
              background: confirmColor,
              border: "none",
              borderRadius: 20,
              padding: "8px 20px",
              fontSize: 20,
              fontWeight: 500,
              color: "#fff",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}