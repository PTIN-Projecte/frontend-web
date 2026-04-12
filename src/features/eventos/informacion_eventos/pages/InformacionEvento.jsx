import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { useNavigation } from "../context/NavigationContext";
import { useEvento } from "../hooks/useEvento";
import { useEditEvento } from "../hooks/useEditEvento";
import { getRecintos, formatDateDisplay } from "../services/eventoService";
import Navbar from "../components/Navbar";
import RoleSelector from "../components/RoleSelector";
import StatCard from "../components/StatCard";
import SectionRow from "../components/SectionRow";
import Badge from "../components/Badge";
import Tag from "../components/Tag";
import ConfirmModal from "../components/ConfirmModal";
import DateTimePicker from "../components/DateTimePicker";
import RecintoSelector from "../components/RecintoSelector";
import LoadingSpinner from "../components/LoadingSpinner";
import t from "../styles/tokens";
import "../styles/InformacionEvento.css";

// ── Icons ─────────────────────────────────────────────────────────────────────
function CalendarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" style={{ flexShrink: 0 }}>
      <rect x="3" y="5" width="22" height="20" rx="3" stroke={t.iconColor} strokeWidth="1.5" fill="none" />
      <line x1="3" y1="11" x2="25" y2="11" stroke={t.iconColor} strokeWidth="1.5" />
      <line x1="9" y1="3" x2="9" y2="8" stroke={t.iconColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="3" x2="19" y2="8" stroke={t.iconColor} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
      <path d="M7 1.5C5 1.5 3.5 3 3.5 5C3.5 7.5 7 12.5 7 12.5S10.5 7.5 10.5 5C10.5 3 9 1.5 7 1.5Z" stroke={t.textSecondary} strokeWidth="1.2" fill="none" />
      <circle cx="7" cy="5" r="1.2" fill={t.textSecondary} />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="4.5" cy="5" r="1.5" stroke={t.textSecondary} strokeWidth="1.2" fill="none" />
      <circle cx="9.5" cy="5" r="1.5" stroke={t.textSecondary} strokeWidth="1.2" fill="none" />
      <path d="M2 11.5C2 9.5 3 8.5 4.5 8.5C5.5 8.5 6 9 7 9C8 9 8.5 8.5 9.5 8.5C11 8.5 12 9.5 12 11.5" stroke={t.textSecondary} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ── Reusable edit input ───────────────────────────────────────────────────────
function EditInput({ value, onChange, error, type = "text", style = {} }) {
  return (
    <div style={{ width: "100%" }}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ie-edit-input"
        style={{ borderColor: error ? "#DA0000" : t.gold, ...style }}
      />
      {error && <div className="ie-field-error">{error}</div>}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function InformacionEvento() {
  const { eventoId }      = useParams();
  const { role, setRole } = useRole();
  const { navigate }      = useNavigation();
  const { evento, loading } = useEvento(eventoId);
  const isComercial = role === "comercial";

  const [recintos, setRecintos]       = useState([]);
  const [showDatePicker, setDatePicker] = useState(false);

  useEffect(() => {
    getRecintos().then(setRecintos);
  }, []);

  const edit = useEditEvento(evento || {}, recintos);

  if (loading || !evento) {
    return (
      <div style={{ minHeight: "100vh", background: t.pageBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <LoadingSpinner message="Cargando evento…" />
      </div>
    );
  }

  const ev = evento;
  const d  = edit.draft;
  const isEditing = edit.isEditing;

  // Recinto to show (draft or saved)
  const currentRecinto = isEditing
    ? recintos.find((r) => r.id === d.recintoId)
    : ev.recinto;

  return (
    <div style={{ minHeight: "100vh", background: t.pageBg, fontFamily: "'Helvetica Neue', Arial, sans-serif", color: t.textPrimary }}>
      {!role && <RoleSelector onSelect={setRole} />}
      <Navbar onChangeRole={() => setRole(null)} />

      {/* Loading overlay while saving */}
      {edit.saving && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(240,236,230,0.85)", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <LoadingSpinner message="Guardando cambios…" />
        </div>
      )}

      {/* Date picker overlay */}
      {showDatePicker && (
        <DateTimePicker
          dateISO={d.dateISO}
          startTime={d.startTime}
          endTime={d.endTime}
          onChange={({ dateISO, startTime, endTime }) => {
            edit.update("dateISO", dateISO);
            edit.update("startTime", startTime);
            edit.update("endTime", endTime);
          }}
          onClose={() => setDatePicker(false)}
        />
      )}

      {/* Cancel confirm modal */}
      {edit.showCancelWarning && (
        <ConfirmModal
          title="¿Descartar cambios?"
          message="Los cambios no guardados se perderán. ¿Deseas continuar?"
          confirmLabel="Descartar"
          confirmColor="#DA0000"
          onConfirm={edit.confirmCancel}
          onCancel={() => edit.setCancelWarn(false)}
        />
      )}

      {/* Capacity warning modal */}
      {edit.showCapacityWarning && (
        <ConfirmModal
          title="Advertencia de capacidad"
          message={edit.capacityMessage}
          confirmLabel="Continuar"
          confirmColor={t.gold}
          onConfirm={edit.doSave}
          onCancel={() => edit.setCapWarn(false)}
        />
      )}

      <main className="ie-content">

        {/* Breadcrumb */}
        <div className="ie-breadcrumb">
          Informacion detallada ({isComercial ? "Comercial" : "Producción"})
        </div>

        {/* Title */}
        <div className="ie-title-row">
          <span className="ie-back" onClick={() => navigate(-1)}>‹</span>
          {isEditing ? (
            <div style={{ flex: 1 }}>
              <EditInput
                value={d.title}
                onChange={(v) => edit.update("title", v)}
                error={edit.errors.title}
                style={{ fontSize: "clamp(18px,2.4vw,26px)", fontFamily: "Georgia, serif", fontWeight: 400 }}
              />
              {edit.errors.duplicate && (
                <div className="ie-field-error">{edit.errors.duplicate}</div>
              )}
            </div>
          ) : (
            <h1 className="ie-title">{ev.title}</h1>
          )}
        </div>

        {/* Date card */}
        <div className="ie-card ie-date-card">
          <CalendarIcon />
          <div style={{ flex: 1 }}>
            <div className="ie-date-text">
              {isEditing ? (
                <button
                  onClick={() => setDatePicker(true)}
                  className="ie-date-edit-btn"
                >
                  {d.dateISO
                    ? `${formatDateDisplay(d.dateISO)} - (${d.startTime}-${d.endTime}h)`
                    : "Seleccionar fecha…"}
                </button>
              ) : (
                <>
                  {ev.date} <strong>- ({ev.startTime}-{ev.endTime}h)</strong>
                </>
              )}
              {/* Edit / Save / Cancel buttons */}
              {isComercial && !isEditing && (
                <button className="ie-edit-btn" onClick={edit.startEdit}>
                  Editar evento
                </button>
              )}
              {isEditing && (
                <>
                  <button className="ie-cancel-btn" onClick={edit.requestCancel}>Cancelar</button>
                  <button className="ie-save-btn" onClick={edit.requestSave}>Guardar</button>
                </>
              )}
            </div>
            {(edit.errors.date || edit.errors.startTime || edit.errors.endTime) && (
              <div className="ie-field-error" style={{ marginTop: 4 }}>
                {edit.errors.date || edit.errors.startTime || edit.errors.endTime}
              </div>
            )}
            <div
              className="ie-coincidentes"
              onClick={!isEditing ? () => navigate("/eventos") : undefined}
              style={{ cursor: isEditing ? "default" : "pointer", textDecoration: isEditing ? "none" : "underline dotted" }}
              title={!isEditing ? "Ver todos los eventos coincidentes" : undefined}
            >
              {ev.coincidentes} eventos coincidentes.
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="ie-stats-grid">
          {/* Comensales — editable */}
          <StatCard label="Comensales" className={isEditing ? "ie-stat-editable" : ""}>
            {isEditing ? (
              <EditInput
                type="number"
                value={d.comensales}
                onChange={(v) => edit.update("comensales", v)}
                error={edit.errors.comensales}
                style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 300, width: "100%" }}
              />
            ) : (
              <span className="ie-stat-num">{ev.comensales}</span>
            )}
          </StatCard>

          {/* Confirmados — editable by comercial */}
          <StatCard label="Confirmados">
            {isEditing ? (
              <EditInput
                type="number"
                value={d.confirmados}
                onChange={(v) => edit.update("confirmados", v)}
                style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 300, width: "100%" }}
              />
            ) : (
              <span className="ie-stat-num">{ev.confirmados}</span>
            )}
          </StatCard>

          {/* Dietas — navigates to dietas page */}
          <StatCard
            label="Dietas especiales"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/eventos/${eventoId}/dietas`)}
          >
            <span className="ie-stat-num">{ev.dietasEspeciales}</span>
            <span className="ie-stat-link">Consultar →</span>
          </StatCard>

          {/* Contacto — editable */}
          <StatCard label="Contacto" className={isEditing ? "ie-stat-editable" : ""}>
            {isEditing ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 5, width: "100%" }}>
                <EditInput
                  value={d.contacto.nombre}
                  onChange={(v) => edit.updateContacto("nombre", v)}
                  error={edit.errors.contacto}
                  style={{ fontSize: 13, fontWeight: 500 }}
                />
                <EditInput
                  value={d.contacto.telefono}
                  onChange={(v) => edit.updateContacto("telefono", v)}
                  style={{ fontSize: 12 }}
                />
              </div>
            ) : (
              <>
                <span className="ie-stat-name">{ev.contacto.nombre}</span>
                <span className="ie-stat-sub">{ev.contacto.telefono}</span>
              </>
            )}
          </StatCard>

          {/* Recinto — editable, hover tooltip in view mode */}
          <StatCard label="Recinto" className={isEditing ? "ie-stat-editable" : "ie-recinto-card"}>
            {isEditing ? (
              <div style={{ width: "100%" }}>
                <RecintoSelector
                  recintos={recintos}
                  selectedId={d.recintoId}
                  onSelect={(id) => edit.update("recintoId", id)}
                />
                {edit.errors.recinto && (
                  <div className="ie-field-error">{edit.errors.recinto}</div>
                )}
              </div>
            ) : (
              <div className="ie-recinto-wrap">
                <div>
                  <div className="ie-location-row">
                    <LocationIcon />
                    <div>
                      <div className="ie-stat-name">{ev.recinto.sala}</div>
                      <div className="ie-stat-sub">{ev.recinto.planta}</div>
                    </div>
                  </div>
                  <div className="ie-capacity-row">
                    <PeopleIcon />
                    <span className="ie-stat-sub">Capacidad: {ev.recinto.capacidad}</span>
                  </div>
                </div>
                {/* Hover tooltip */}
                <div className="ie-recinto-tooltip">
                  <div className="ie-tooltip-name">{ev.recinto.sala} — {ev.recinto.planta}</div>
                  <div className="ie-tooltip-line">{ev.recinto.direccion}</div>
                  <div className="ie-tooltip-line">{ev.recinto.cp} {ev.recinto.localidad}</div>
                  <div className="ie-tooltip-line">Capacidad: {ev.recinto.capacidad} personas</div>
                </div>
              </div>
            )}
          </StatCard>
        </div>

        {/* Sections */}
        <div className="ie-sections">
          <SectionRow
            label="Menú"
            showChevron
            onClick={!isEditing ? () => navigate(`/eventos/${eventoId}/menu`) : undefined}
          >
            <div>
              <div className="ie-menu-row">
                <span className="ie-menu-name">{ev.menu.nombre}</span>
                <Badge estado={ev.menu.estado} />
              </div>
              <div className="ie-tags">
                {ev.menu.tags.map((tag) => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </SectionRow>

          <SectionRow label={<>Útiles<br />necesarios</>}>
            <div className="ie-tags">
              {ev.utiles.map((u) => <Tag key={u} label={u} />)}
            </div>
          </SectionRow>

          <SectionRow
            label={<>Peticiones<br />{isComercial ? "a Producción" : "de Comercial"}</>}
            showChevron
            onClick={!isEditing ? () => navigate(`/eventos/${eventoId}/peticiones`) : undefined}
          >
            <div className="ie-peticions-grid">
              {ev.peticiones.map((p) => (
                <div key={p.nombre} className="ie-peticio">
                  <span>{p.nombre}</span>
                  <span className="ie-sep">-</span>
                  <Badge estado={p.estado} />
                </div>
              ))}
            </div>
          </SectionRow>
        </div>
      </main>
    </div>
  );
}