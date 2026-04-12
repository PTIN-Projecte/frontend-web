import { useState } from "react";
import { saveDietas, getNextDietaId } from "../services/dietasService";

export function useEditDietas(rawDietas) {
  const [isEditing,    setIsEditing] = useState(false);
  const [draftRows,    setDraftRows] = useState([]);
  const [saving,       setSaving]    = useState(false);
  const [showCancelWarn, setCancelW] = useState(false);
  const [errors,       setErrors]    = useState({});

  const startEdit = () => {
    setDraftRows(rawDietas.map((g) => ({ ...g, alergenos: [...g.alergenos] })));
    setErrors({});
    setIsEditing(true);
  };

  const updateRow = (id, field, value) => {
    setDraftRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const toggleAllergen = (rowId, allergenId) => {
    setDraftRows((prev) =>
      prev.map((r) => {
        if (r.id !== rowId) return r;
        const has = r.alergenos.includes(allergenId);
        return {
          ...r,
          alergenos: has
            ? r.alergenos.filter((a) => a !== allergenId)
            : [...r.alergenos, allergenId],
        };
      })
    );
  };

  const addRow = () => {
    setDraftRows((prev) => [
      ...prev,
      { id: getNextDietaId(), personas: 1, etiqueta: "", alergenos: [] },
    ]);
  };

  const removeRow = (id) => {
    setDraftRows((prev) => prev.filter((r) => r.id !== id));
  };

  const validate = () => {
    const errs = {};
    draftRows.forEach((r) => {
      const rowErrors = [];
      if (!r.etiqueta.trim())
        rowErrors.push("La etiqueta es obligatoria.");
      const n = Number(r.personas);
      if (!Number.isInteger(n) || n <= 0)
        rowErrors.push("El número de personas debe ser entero mayor a 0.");
      if (r.alergenos.length === 0)
        rowErrors.push("Selecciona al menos un alérgeno.");
      if (rowErrors.length) errs[r.id] = rowErrors.join(" ");
    });
    return errs;
  };

  const requestSave = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    doSave();
  };

  const doSave = async () => {
    setSaving(true);
    try {
      await saveDietas(draftRows);
      window.location.reload();
    } catch (e) {
      console.error("Error saving dietas:", e);
      setSaving(false);
    }
  };

  const requestCancel = () => setCancelW(true);
  const confirmCancel = () => {
    setCancelW(false);
    setIsEditing(false);
    setDraftRows([]);
    setErrors({});
  };

  return {
    isEditing, draftRows, saving, showCancelWarn, errors,
    startEdit, updateRow, toggleAllergen, addRow, removeRow,
    requestSave, requestCancel, confirmCancel, setCancelW,
  };
}