import { useState } from "react";
import { saveEvento, getAllEventos } from "../services/eventoService";
import { validateEvento, getCapacityWarning } from "../utils/validators";

export function useEditEvento(evento, recintos) {
  const [isEditing,          setIsEditing]   = useState(false);
  const [draft,              setDraft]        = useState(null);
  const [errors,             setErrors]       = useState({});
  const [saving,             setSaving]       = useState(false);
  const [showCancelWarning,  setCancelWarn]   = useState(false);
  const [showCapacityWarning,setCapWarn]      = useState(false);
  const [capacityMessage,    setCapMessage]   = useState("");

  const startEdit = () => {
    setDraft({
      id:          evento.id,
      title:       evento.title,
      dateISO:     evento.dateISO,
      startTime:   evento.startTime,
      endTime:     evento.endTime,
      comensales:  evento.comensales,
      confirmados: evento.confirmados,   // ← now editable
      contacto:    { ...evento.contacto },
      recintoId:   evento.recinto?.id ?? null,
    });
    setErrors({});
    setIsEditing(true);
  };

  const update = (field, value) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const updateContacto = (field, value) => {
    setDraft((prev) => ({
      ...prev,
      contacto: { ...prev.contacto, [field]: value },
    }));
    setErrors((prev) => ({ ...prev, contacto: undefined }));
  };

  const requestSave = async () => {
    const allEventos = await getAllEventos();
    const errs = validateEvento(draft, allEventos, draft.id);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const capWarning = getCapacityWarning(draft, recintos);
    if (capWarning) {
      setCapMessage(capWarning);
      setCapWarn(true);
      return;
    }
    await doSave();
  };

  const doSave = async () => {
    setSaving(true);
    setCapWarn(false);
    try {
      await saveEvento(draft);
      window.location.reload();
    } catch (e) {
      console.error("Error saving evento:", e);
      setSaving(false);
    }
  };

  const requestCancel = () => setCancelWarn(true);
  const confirmCancel = () => {
    setCancelWarn(false);
    setIsEditing(false);
    setDraft(null);
    setErrors({});
  };

  return {
    isEditing, draft, errors, saving,
    showCancelWarning, showCapacityWarning, capacityMessage,
    startEdit, update, updateContacto,
    requestSave, doSave, requestCancel, confirmCancel,
    setCancelWarn, setCapWarn,
  };
}