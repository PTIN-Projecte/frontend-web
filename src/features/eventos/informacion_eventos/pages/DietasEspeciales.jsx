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
        <span className="da-diet-count">{group.personas} Personas</span>
      </div>
      <div className="da-diet-etiqueta">{group.etiqueta}</div>
      <div className="da-diet-icons">
        {group.alergenos.map((id) => (
          <AllergenIcon key={id} id={id} size={70} showBan={true} /> 
        ))}
      </div>
    </div>
  );
}

function GroupsView({ data }) {
  const mid = Math.ceil((data ?? []).length / 2);
  const list = data ?? [];
  return (
    <div className="da-table-grid">
      <div className="da-table-col">{list.slice(0, mid).map((g) => <DietRow key={g.id} group={g} />)}</div>
      <div className="da-table-col">{list.slice(mid).map((g) => <DietRow key={g.id} group={g} />)}</div>
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
              <AllergenIcon id={section.allergenId} size={50} showBan={false} />
              <div>
                <span className="da-section-title">{allergen?.label}</span>
                <span className="da-section-sub"> {section.totalPersonas} personas afectadas</span>
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

function PeopleIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 28" fill="none">
      <circle cx="10" cy="9" r="5" fill="#C0B8B0"/>
      <circle cx="22" cy="9" r="5" fill="#8A8480"/>
      <path d="M2 26c0-6 4-10 8-10s8 4 8 10" fill="#C0B8B0"/>
      <path d="M14 26c0-6 4-10 8-10s8 4 8 10" fill="#8A8480"/>
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DietasAlergias(props) {
  const { eventoId: eventoIdParam } = useParams();
  const eventoId = eventoIdParam ?? props.eventoId;

  const { role, setRole } = useRole();
  const { goBack }        = useNavigation();
  const [sortId, setSortId]   = useState("comun");
  const [sortOpen, setSortOpen] = useState(false);

  const { viewType, data, loading, rawDietas, eventoInfo } = useDietas(eventoId, sortId);
  const isComercial = role === "comercial";

  const editDietas = useEditDietas(rawDietas || [], eventoId);
  const isEditing  = editDietas.isEditing;

  const currentSortLabel = SORT_OPTIONS.find((o) => o.id === sortId)?.label ?? "";

  if (!eventoId) {
    console.error("DietasAlergias: eventoId is missing");
  }

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'Helvetica Neue', Arial, sans-serif", color: t.textPrimary }}>
      {!role && <RoleSelector onSelect={setRole} />}
      <Navbar onChangeRole={() => setRole(null)} />

      {editDietas.saving && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(255,255,255,0.85)", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <LoadingSpinner message="Guardando dietas…" />
        </div>
      )}

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
        <div className="da-title-row">
          <h1 className="da-title">
            Dietas y Alergias — {eventoInfo?.nombre ?? "…"}
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

        <div className="da-top-section">
          <div className="da-stats-row">
            <StatCard label="Dietas especiales" style={{ maxWidth: 280 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className="da-stat-num">{eventoInfo?.totalDietas ?? "–"}</span>
                <PeopleIcon size={60} />
              </div>
            </StatCard>

            <StatCard label="Contacto" style={{ maxWidth: 540, gap: 15, padding: 20 }}>
              <span className="da-stat-name">{eventoInfo?.contacto?.nombre ?? "–"}</span>
              <span className="da-stat-sub">{eventoInfo?.contacto?.telefono ?? "–"}</span>
            </StatCard>
          </div>

          <div className="da-allergen-grid">
            {ALLERGEN_ORDER.map((id) => (
              <AllergenIcon key={id} id={id} size={80} showLabel showBan />
            ))}
          </div>
        </div>

        {!isEditing && (
          <div style={{ position: "relative", paddingBottom: 5, paddingLeft: 30 }}>
            <button className="da-sort-btn" onClick={() => setSortOpen((o) => !o)}>
              {currentSortLabel}
            </button>

            {sortOpen && (
              <div className="da-sort-dropdown">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    className={`da-sort-option${sortId === opt.id ? " active" : ""}`}
                    onClick={() => {
                      setSortId(opt.id);
                      setSortOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {loading ? (
          <LoadingSpinner message="Cargando dietas y alergias…" />
        ) : isEditing ? (
          <div className="da-edit-container">
            <button className="da-add-row-btn" onClick={editDietas.addRow}>
              + Añadir dieta
            </button>

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