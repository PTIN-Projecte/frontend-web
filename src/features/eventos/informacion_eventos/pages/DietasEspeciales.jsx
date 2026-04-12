import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { useNavigation } from "../context/NavigationContext";
import { useDietas } from "../hooks/useDietas";
import { useEditDietas } from "../hooks/useEditDietas";
import { ALLERGENS, ALLERGEN_ORDER, SORT_OPTIONS } from "../services/dietasService";
import Navbar from "../components/Navbar";
import RoleSelector from "../components/RoleSelector";
import AllergenIcon from "../components/AlergenIcon";
import LoadingSpinner from "../components/LoadingSpinner";
import ConfirmModal from "../components/ConfirmModal";
import EditDietRow from "../components/EditDietRow";
import StatCard from "../components/StatCard";
import t from "../styles/tokens";
import "../styles/DietasEspeciales.css";

// ── View: groups layout ───────────────────────────────────────────────────────
function DietRow({ group }) {
  return (
    <div className="da-diet-row">
      <div className="da-diet-personas">
        <span className="da-diet-count">{group.personas}</span>
        <span className="da-diet-label-sm">Personas</span>
      </div>
      <div className="da-diet-etiqueta">{group.etiqueta}</div>
      <div className="da-diet-icons">
        {group.alergenos.map((id) => <AllergenIcon key={id} id={id} size={30} showBan={false} />)}
      </div>
    </div>
  );
}

function GroupsView({ data }) {
  const mid = Math.ceil(data.length / 2);
  return (
    <div className="da-table-grid">
      <div className="da-table-col">{data.slice(0, mid).map((g) => <DietRow key={g.id} group={g} />)}</div>
      <div className="da-table-col">{data.slice(mid).map((g) => <DietRow key={g.id} group={g} />)}</div>
    </div>
  );
}

function AllergenSectionsView({ data }) {
  return (
    <div className="da-allergen-sections">
      {data.map((section) => {
        const allergen = ALLERGENS[section.allergenId];
        const mid = Math.ceil(section.groups.length / 2);
        return (
          <div key={section.allergenId} className="da-allergen-section">
            <div className="da-section-header">
              <AllergenIcon id={section.allergenId} size={36} showBan={false} />
              <div>
                <span className="da-section-title">{allergen?.label}</span>
                <span className="da-section-sub">{section.totalPersonas} personas afectadas</span>
              </div>
            </div>
            <div className="da-table-grid">
              <div className="da-table-col">{section.groups.slice(0, mid).map((g) => <DietRow key={g.id} group={g} />)}</div>
              <div className="da-table-col">{section.groups.slice(mid).map((g) => <DietRow key={g.id} group={g} />)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DietasAlergias() {
  const { eventoId }      = useParams();
  const { role, setRole } = useRole();
  const { goBack }        = useNavigation();
  const [sortId, setSortId]   = useState("comun");
  const [sortOpen, setSortOpen] = useState(false);
  const { viewType, data, loading, rawDietas } = useDietas(sortId);
  const isComercial = role === "comercial";

  const editDietas = useEditDietas(rawDietas || []);
  const isEditing  = editDietas.isEditing;

  const currentSortLabel = SORT_OPTIONS.find((o) => o.id === sortId)?.label ?? "";

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'Helvetica Neue', Arial, sans-serif", color: t.textPrimary }}>
      {!role && <RoleSelector onSelect={setRole} />}
      <Navbar onChangeRole={() => setRole(null)} />

      {/* Saving overlay */}
      {editDietas.saving && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(255,255,255,0.85)", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <LoadingSpinner message="Guardando dietas…" />
        </div>
      )}

      {/* Cancel confirm */}
      {editDietas.showCancelWarn && (
        <ConfirmModal
          title="¿Descartar cambios?"
          message="Los cambios en las dietas no se guardarán. ¿Deseas continuar?"
          confirmLabel="Descartar"
          confirmColor="#DA0000"
          onConfirm={editDietas.confirmCancel}
          onCancel={() => editDietas.setCancelW(false)}
        />
      )}

      <main className="da-content">

        {/* Title row */}
        <div className="da-title-row">
          <span className="da-back" onClick={goBack}>‹</span>
          <h1 className="da-title">
            Dietas y Alergias — Boda Rivero - Martínez
          </h1>
          {isComercial && !isEditing && (
            <button className="da-edit-btn" onClick={editDietas.startEdit}>
              Editar evento
            </button>
          )}
          {isEditing && (
            <>
              <button className="da-cancel-btn" onClick={editDietas.requestCancel}>Cancelar</button>
              <button className="da-save-btn" onClick={editDietas.requestSave}>Guardar</button>
            </>
          )}
        </div>

        {/* Stats */}
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
            <span className="da-stat-name">JOAN GARCÍA</span>
            <span className="da-stat-sub">93 412 00 33</span>
          </StatCard>
        </div>

        {/* Allergen catalogue */}
        <div className="da-allergen-grid">
          {ALLERGEN_ORDER.map((id) => (
            <AllergenIcon key={id} id={id} size={52} showLabel showBan />
          ))}
        </div>

        {/* Sort — hidden in edit mode */}
        {!isEditing && (
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
        )}

        {/* Main content */}
        {loading ? (
          <LoadingSpinner message="Cargando dietas y alergias…" />
        ) : isEditing ? (
          /* ── Edit mode ─────────────────────────────────────────── */
          <div className="da-edit-container">
            <div className="da-edit-rows">
              {editDietas.draftRows.map((row) => (
                <EditDietRow
                  key={row.id}
                  group={row}
                  onChange={editDietas.updateRow}
                  onToggleAllergen={editDietas.toggleAllergen}
                  onDelete={editDietas.removeRow}
                  error={editDietas.errors[row.id]}
                />
              ))}
            </div>
            <button className="da-add-row-btn" onClick={editDietas.addRow}>
              + Añadir dieta
            </button>
          </div>
        ) : viewType === "allergens" ? (
          <AllergenSectionsView data={data} />
        ) : (
          <GroupsView data={data} />
        )}
      </main>
    </div>
  );
}