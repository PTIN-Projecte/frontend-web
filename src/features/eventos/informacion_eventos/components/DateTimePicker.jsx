import { useState } from "react";
import t from "../styles/tokens";

const MONTHS_ES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const DAYS_SHORT = ["Lu","Ma","Mi","Ju","Vi","Sa","Do"];

function getDaysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }
// Monday-first: 0=Mon … 6=Sun
function firstWeekday(y, m) { const d = new Date(y, m, 1).getDay(); return d === 0 ? 6 : d - 1; }

function isoToDate(iso) { return iso ? new Date(iso + "T12:00:00") : null; }
function dateToIso(d) {
  if (!d) return "";
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

export default function DateTimePicker({ dateISO, startTime, endTime, onChange, onClose }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initDate = isoToDate(dateISO) || today;
  const [viewYear, setViewYear]   = useState(initDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initDate.getMonth());
  const [selected, setSelected]   = useState(dateISO || null);
  const [localStart, setLocalStart] = useState(startTime || "13:00");
  const [localEnd, setLocalEnd]     = useState(endTime   || "18:00");

  const totalCells = 42;
  const firstDay   = firstWeekday(viewYear, viewMonth);
  const daysInMon  = getDaysInMonth(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  const confirm = () => {
    onChange({ dateISO: selected, startTime: localStart, endTime: localEnd });
    onClose();
  };

  const cells = Array.from({ length: totalCells }, (_, i) => {
    const day = i - firstDay + 1;
    if (day < 1 || day > daysInMon) return null;
    return day;
  });

  const isToday = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    return d.toDateString() === new Date().toDateString();
  };
  const isPast = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };
  const isSelected = (day) => {
    if (!selected) return false;
    const s = isoToDate(selected);
    return s?.getFullYear() === viewYear && s?.getMonth() === viewMonth && s?.getDate() === day;
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 400,
        background: "rgba(43,37,32,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseDown={onClose}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: 20,
          boxShadow: "0 8px 40px rgba(43,37,32,0.18)",
          width: 300,
        }}
      >
        {/* Month navigation */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <button onClick={prevMonth} style={navBtn}>‹</button>
          <div>
            <select
              value={viewMonth}
              onChange={(e) => setViewMonth(Number(e.target.value))}
              style={selectStyle}
            >
              {MONTHS_ES.map((m, i) => <option key={i} value={i}>{m}</option>)}
            </select>
            <select
              value={viewYear}
              onChange={(e) => setViewYear(Number(e.target.value))}
              style={{ ...selectStyle, marginLeft: 4, width: 60 }}
            >
              {Array.from({ length: 10 }, (_, i) => today.getFullYear() + i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <button onClick={nextMonth} style={navBtn}>›</button>
        </div>

        {/* Day headers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", marginBottom: 6 }}>
          {DAYS_SHORT.map((d) => (
            <div key={d} style={{ textAlign: "center", fontSize: 10, color: t.textMuted, fontWeight: 500, padding: "2px 0" }}>{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2 }}>
          {cells.map((day, i) => {
            if (!day) return <div key={i} />;
            const past = isPast(day);
            const sel  = isSelected(day);
            const tod  = isToday(day);
            return (
              <button
                key={i}
                disabled={past}
                onClick={() => setSelected(dateToIso(new Date(viewYear, viewMonth, day)))}
                style={{
                  border: "none",
                  borderRadius: 6,
                  padding: "6px 2px",
                  fontSize: 13,
                  cursor: past ? "default" : "pointer",
                  fontFamily: "inherit",
                  background: sel ? t.gold : tod ? "#FEF0E2" : "none",
                  color: sel ? "#fff" : past ? t.textMuted : tod ? t.gold : t.textPrimary,
                  fontWeight: sel || tod ? 600 : 400,
                  opacity: past ? 0.4 : 1,
                }}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Time inputs */}
        <div style={{ marginTop: 16, borderTop: `1px solid ${t.divider}`, paddingTop: 14, display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: t.textSecondary, marginBottom: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>Inicio</div>
            <input
              type="time"
              value={localStart}
              onChange={(e) => setLocalStart(e.target.value)}
              style={timeInputStyle}
            />
          </div>
          <span style={{ color: t.textMuted, fontSize: 14, marginTop: 16 }}>—</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: t.textSecondary, marginBottom: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>Fin</div>
            <input
              type="time"
              value={localEnd}
              onChange={(e) => setLocalEnd(e.target.value)}
              style={timeInputStyle}
            />
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <button
            onClick={() => {
              setSelected(dateToIso(today));
              setViewYear(today.getFullYear());
              setViewMonth(today.getMonth());
            }}
            style={{ ...actionBtn, flex: 1, background: t.tagBg, color: t.textPrimary }}
          >
            Hoy
          </button>
          <button
            onClick={confirm}
            disabled={!selected}
            style={{ ...actionBtn, flex: 2, background: selected ? t.gold : t.textMuted, color: "#fff" }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

const navBtn = {
  background: "none", border: "none", cursor: "pointer",
  fontSize: 20, color: "#7A746E", padding: "0 6px", fontFamily: "inherit",
};
const selectStyle = {
  border: "none", background: "none", fontSize: 14,
  color: "#2B2520", cursor: "pointer", fontFamily: "inherit",
};
const timeInputStyle = {
  border: `1px solid #E4DFD6`, borderRadius: 8,
  padding: "6px 8px", fontSize: 13, width: "100%",
  fontFamily: "inherit", color: "#2B2520", outline: "none",
};
const actionBtn = {
  border: "none", borderRadius: 20, padding: "8px 0",
  fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
};