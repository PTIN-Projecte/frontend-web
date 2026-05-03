import t from "../styles/tokens";

export default function Tag({ label }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12,
        padding: "4px 10px",
        borderRadius: 20,
        background: t.tagBg,
        color: t.tagText,
        fontWeight: 400,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}