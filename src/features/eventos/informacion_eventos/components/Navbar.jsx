import { useState, useRef, useEffect } from "react";
import { useRole } from "../context/RoleContext";
import t from "../styles/tokens";
import calblayIcon from "../assets/images/calblayIcon.png";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function IconPerfil() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={t.textSecondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconConfiguracio() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={t.textSecondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconPeticions() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" stroke={t.textSecondary} />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke={t.textSecondary} />
      <line x1="9" y1="11" x2="15" y2="11" stroke="#3B82F6" />
      <line x1="9" y1="15" x2="13" y2="15" stroke="#3B82F6" />
      <path d="M15 13l1.5 1.5L19 11" stroke="#F59E0B" strokeWidth="1.5" />
    </svg>
  );
}

function IconTancar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

// ─── Menu items ───────────────────────────────────────────────────────────────

const menuItems = [
  { id: "perfil",        label: "Perfil",        Icon: IconPerfil },
  { id: "configuracio",  label: "Configuración",  Icon: IconConfiguracio },
  { id: "peticions",     label: "Peticiones",     Icon: IconPeticions },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar({ onChangeRole }) {
  const { role } = useRole();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: t.pageBg,
        borderBottom: `1px solid ${t.cardBorder}`,
        height: 75,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {/* Left – Language switcher + debug role */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {["CA", "EN", "ES"].map((lang) => (
          <button
            key={lang}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 500,
              color: t.gold,
              letterSpacing: "0.1em",
              padding: 0,
              fontFamily: "inherit",
              opacity: 0.85,
            }}
          >
            {lang}
          </button>
        ))}
        {/* Debug: role indicator + change */}
        {role && (
          <span
            onClick={onChangeRole}
            style={{
              fontSize: 11,
              color: t.textMuted,
              background: t.tagBg,
              padding: "2px 10px",
              borderRadius: 20,
              cursor: "pointer",
              userSelect: "none",
            }}
            title="Cambiar rol (debug)"
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </span>
        )}
      </div>

      {/* Center – Logo */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={calblayIcon}
          alt="Cal Blay"
          style={{ height: 50, objectFit: "contain" }}
        />
      </div>

      {/* Right – Hamburger menu */}
      <div
        ref={menuRef}
        style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}
      >
        {/* Hamburger button → X when open */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 0px",
            width: 25,
            height: 50,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuOpen ? (
            // X icon
            <svg width="60" height="60" viewBox="0 0 16 16" fill="none">
              <line x1="2" y1="2" x2="14" y2="14" stroke={t.gold} strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="14" y1="2" x2="2" y2="14" stroke={t.gold} strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            // Hamburger – 3 equal lines
            <svg width="60" height="50" viewBox="0 0 18 14" fill="none">
              <line x1="0" y1="1" x2="18" y2="1" stroke={t.gold} strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="0" y1="7" x2="18" y2="7" stroke={t.gold} strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="0" y1="13" x2="18" y2="13" stroke={t.gold} strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>

        {/* Dropdown */}
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              right: 0,
              background: t.pageBg,
              border: `1px solid ${t.cardBorder}`,
              borderLeft: `3px solid #6BA4C8`,
              borderRadius: 10,
              minWidth: 200,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(43,37,32,0.12)",
            }}
          >
            {/* Main items */}
            {menuItems.map(({ id, label, Icon }) => (
              <button
                key={id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  width: "100%",
                  padding: "13px 18px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 15,
                  color: t.textPrimary,
                  textAlign: "left",
                  transition: "background 0.12s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(228,223,214,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
              >
                <Icon />
                {label}
              </button>
            ))}

            {/* Divider + Tancar sessió */}
            <div style={{ borderTop: `1px solid ${t.divider}`, margin: "4px 0" }} />
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                width: "100%",
                padding: "13px 18px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: 15,
                color: t.textPrimary,
                textAlign: "left",
                transition: "background 0.12s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(228,223,214,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              <IconTancar />
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}