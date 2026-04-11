import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { useNavigation } from "../context/NavigationContext";
import { useDietas } from "../hooks/useDietas";
import { ALLERGENS, ALLERGEN_ORDER, SORT_OPTIONS } from "../services/dietasService";
import Navbar from "../components/Navbar";
import RoleSelector from "../components/RoleSelector";
import AllergenIcon from "../components/AlergenIcon";
import LoadingSpinner from "../components/LoadingSpinner";
import StatCard from "../components/StatCard";
import t from "../styles/tokens";
import "../styles/DietasEspeciales.css";

// ── Group row (used in 'groups' viewType AND inside allergen sections) ─────────
function DietRow({ group }) {
  return (
    <div className="da-diet-row">
      <div className="da-diet-personas">
        <span className="da-diet-count">{group.personas}</span>
        <span className="da-diet-label-sm">Personas</span>
      </div>
      <div className="da-diet-etiqueta">{group.etiqueta}</div>
      <div className="da-diet-icons">
        {group.alergenos.map((id) => (
          <AllergenIcon key={id} id={id} size={30} showBan={false} />
        ))}
      </div>
    </div>
  );
}

// ── Layout: groups (comun / afectados / complejidad) ─────────────────────────
function GroupsView({ data }) {
  const mid = Math.ceil(data.length / 2);
  const left = data.slice(0, mid);
  const right = data.slice(mid);
  return (
    <div className="da-table-grid">
      <div className="da-table-col">
        {left.map((g) => <DietRow key={g.id} group={g} />)}
      </div>
      <div className="da-table-col">
        {right.map((g) => <DietRow key={g.id} group={g} />)}
      </div>
    </div>
  );
}

// ── Layout: allergens (por alérgeno) ─────────────────────────────────────────
// Shows one section per allergen; people can appear in multiple sections.
function AllergenSectionsView({ data }) {
  return (
    <div className="da-allergen-sections">
      {data.map((section) => {
        const allergen = ALLERGENS[section.allergenId];
        const mid = Math.ceil(section.groups.length / 2);
        const left = section.groups.slice(0, mid);
        const right = section.groups.slice(mid);
        return (
          <div key={section.allergenId} className="da-allergen-section">
            {/* Section header */}
            <div className="da-section-header">
              <AllergenIcon id={section.allergenId} size={36} showBan={false} />
              <div>
                <span className="da-section-title">{allergen?.label}</span>
                <span className="da-section-sub">{section.totalPersonas} personas afectadas</span>
              </div>
            </div>
            {/* Groups inside this allergen */}
            <div className="da-table-grid da-section-grid">
              <div className="da-table-col">
                {left.map((g) => <DietRow key={g.id} group={g} />)}
              </div>
              <div className="da-table-col">
                {right.map((g) => <DietRow key={g.id} group={g} />)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DietasEspeciales() {
  const { eventoId } = useParams(); 
  const evento = {
    title: "Boda Rivero - Martínez",
    contacto: {
      nombre: "JOAN GARCÍA",
      telefono: "93 412 00 33"
    }
  };
  const { role, setRole } = useRole();
  const { goBack } = useNavigation();
  const [sortId, setSortId] = useState("comun");
  const [sortOpen, setSortOpen] = useState(false);
  const { viewType, data, loading } = useDietas(sortId);
  const isComercial = role === "comercial";

  const currentSortLabel = SORT_OPTIONS.find((o) => o.id === sortId)?.label ?? "";

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'Helvetica Neue', Arial, sans-serif", color: t.textPrimary }}>
      {!role && <RoleSelector onSelect={setRole} />}
      <Navbar onChangeRole={() => setRole(null)} />

      <main className="da-content">

        {/* Title + edit button inline */}
        <div className="da-title-row">
          <span className="da-back" onClick={goBack}>‹</span>
          <h1 className="da-title">
            Dietas y Alergias — {evento?.title ?? "Boda Rivero - Martínez"}
          </h1>
          {isComercial && (
            <button className="da-edit-btn">Editar evento</button>
          )}
        </div>

        {/* Stat cards */}
        <div className="da-stats-row">
          <StatCard label="Dietas especiales" style={{ maxWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span className="da-stat-num">25</span>
              <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
                <circle cx="10" cy="9" r="5" fill="#C0B8B0"/>
                <circle cx="22" cy="9" r="5" fill="#8A8480"/>
                <path d="M2 26c0-6 4-10 8-10s8 4 8 10" fill="#C0B8B0"/>
                <path d="M14 26c0-6 4-10 8-10s8 4 8 10" fill="#8A8480"/>
              </svg>
            </div>
          </StatCard>
          <StatCard label="Contacto" style={{ maxWidth: 340 }}>
            <span className="da-stat-name">{evento?.contacto?.nombre ?? "JOAN GARCÍA"}</span>
            <span className="da-stat-sub">{evento?.contacto?.telefono ?? "93 412 00 33"}</span>
          </StatCard>
        </div>

        {/* Allergen catalogue (with ban overlay) */}
        <div className="da-allergen-grid">
          {ALLERGEN_ORDER.map((id) => (
            <AllergenIcon key={id} id={id} size={52} showLabel showBan />
          ))}
        </div>

        {/* Sort control */}
        <div className="da-sort-row">
          <span className="da-sort-label">Ordenar</span>
          <div style={{ position: "relative" }}>
            <button className="da-sort-btn" onClick={() => setSortOpen((o) => !o)}>
              {currentSortLabel}
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ marginLeft: 6 }}>
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#2B2520" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            {sortOpen && (
              <div className="da-sort-dropdown">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    className={`da-sort-option${sortId === opt.id ? " active" : ""}`}
                    onClick={() => { setSortId(opt.id); setSortOpen(false); }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main content — grows naturally, no max-height cap */}
        {loading ? (
          <LoadingSpinner message="Cargando dietas y alergias…" />
        ) : viewType === "allergens" ? (
          <AllergenSectionsView data={data} />
        ) : (
          <GroupsView data={data} />
        )}

      </main>
    </div>
  );
}