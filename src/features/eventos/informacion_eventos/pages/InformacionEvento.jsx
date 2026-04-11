import { useParams } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { useNavigation } from "../context/NavigationContext";
import { useEvento } from "../hooks/useEvento";
import Navbar from "../components/Navbar";
import RoleSelector from "../components/RoleSelector";
import StatCard from "../components/StatCard";
import SectionRow from "../components/SectionRow";
import Badge from "../components/Badge";
import Tag from "../components/Tag";
import t from "../styles/tokens";
import "../styles/InformacionEvento.css";

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

export default function InformacionEvento() {
  const { eventoId } = useParams();
  const { role, setRole } = useRole();
  const { navigate } = useNavigation();
  const { evento, loading } = useEvento(eventoId);
  const isComercial = role === "comercial";

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: t.pageBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: t.textSecondary, fontSize: 14 }}>Cargando evento…</span>
      </div>
    );
  }

  const ev = evento;

  return (
    <div style={{ minHeight: "100vh", background: t.pageBg, fontFamily: "'Helvetica Neue', Arial, sans-serif", color: t.textPrimary }}>
      {!role && <RoleSelector onSelect={setRole} />}

      <Navbar onChangeRole={() => setRole(null)} />

      <main className="ie-content">
        <div className="ie-title-row">
          <span className="ie-back">‹</span>
          <h1 className="ie-title">{ev.title}</h1>
        </div>

        {/* Date card */}
        <div className="ie-card ie-date-card">
          <CalendarIcon />
          <div style={{ flex: 1 }}>
            <div className="ie-date-text">
              {ev.date} <strong>- ({ev.time})</strong>
              {isComercial && (
                <button className="ie-edit-btn">Editar evento</button>
              )}
            </div>
            <div className="ie-coincidentes">{ev.coincidentes} eventos coincidentes.</div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="ie-stats-grid">
          <StatCard label="Comensales">
            <span className="ie-stat-num">{ev.comensales}</span>
          </StatCard>

          <StatCard label="Confirmados">
            <span className="ie-stat-num">{ev.confirmados}</span>
          </StatCard>

          {/* Dietas card – clickable */}
          <StatCard
            label="Dietas especiales"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/eventos/${eventoId}/dietas`)}
          >
            <span className="ie-stat-num">{ev.dietasEspeciales}</span>
            <span className="ie-stat-link">Consultar →</span>
          </StatCard>

          <StatCard label="Contacto">
            <span className="ie-stat-name">{ev.contacto.nombre}</span>
            <span className="ie-stat-sub">{ev.contacto.telefono}</span>
          </StatCard>

          <StatCard label="Recinto">
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
          </StatCard>
        </div>

        {/* Sections */}
        <div className="ie-sections">
          <SectionRow label="Menú" showChevron>
            <div className="ie-menu-row">
              <span className="ie-menu-name">{ev.menu.nombre}</span>
              <Badge estado={ev.menu.estado} />
            </div>
            <div className="ie-tags">
              {ev.menu.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </SectionRow>

          <SectionRow label={<>Útiles<br />necesarios</>}>
            <div className="ie-tags">
              {ev.utiles.map((u) => <Tag key={u} label={u} />)}
            </div>
          </SectionRow>

          <SectionRow label={<>Peticiones<br />{isComercial ? "a Producción" : "de Comercial"}</>} showChevron>
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