import { ALLERGENS } from "../services/dietasService";

/**
 * Circular allergen icon using the real .ico from assets/iconos/.
 *
 * The .ico files are round with no background, so we place them
 * directly on the colored circle. The ban overlay (red circle + diagonal line)
 * sits on top of the .ico image, not replacing it.
 *
 * Props:
 *   id        – allergen key (e.g. "gluten")
 *   size      – diameter in px (default 50 for catalogue, 30 for inline)
 *   showLabel – show allergen name below the circle
 *   showBan   – show the crossed-out overlay (default true)
 */
export default function AllergenIcon({ id, size = 150, showLabel = false, showBan = true }) {
  const allergen = ALLERGENS[id];
  if (!allergen) return null;

  // Vite resolves these at build time. Path relative to this component.
  // File names match the allergen IDs exactly.
  const iconSrc = new URL(`../assets/icons/${id}.ico`, import.meta.url).href;

  const iconInner = Math.round(size * 0.62);
  const banStroke = Math.max(1.5, size * 0.055);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
      <div
        title={allergen.label}
        
      >
        {/* .ico image — round, transparent bg, sits on color circle */}
        <img
          src={iconSrc}
          alt={allergen.label}
          style={{
            width: iconInner,
            height: iconInner,
            objectFit: "contain",
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Ban overlay on top of the .ico */}
        {showBan && (
          <svg
            viewBox={`0 0 ${size} ${size}`}
            width={size}
            height={size}
            style={{ position: "absolute", inset: 0, zIndex: 2 }}
          >
            {/* Outer circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - banStroke / 2}
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth={banStroke * 0.7}
            />
            {/* Diagonal ban line — bottom-left to top-right */}
            <line
              x1={size * 0.22}
              y1={size * 0.78}
              x2={size * 0.78}
              y2={size * 0.22}
              stroke="rgba(255,255,255,0.75)"
              strokeWidth={banStroke}
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {showLabel && (
        <span
          style={{
            fontSize: 9,
            color: "#5C5652",
            textAlign: "center",
            maxWidth: size + 10,
            lineHeight: 1.2,
          }}
        >
          {allergen.label}
        </span>
      )}
    </div>
  );
}