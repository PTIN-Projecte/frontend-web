import { useState, useEffect, useMemo } from "react";
import { getRawDietas, ALLERGEN_ORDER } from "../services/dietasService";
import { applyTransform } from "../utils/dietasTransforms";
import { getEvento } from "../services/eventoService";

/**
 * Fetches raw dietas ONCE, then transforms client-side on sort change.
 * No extra network calls when the user changes the sort order.
 */
export function useDietas(eventoId, sortId = "comun") {
  const [rawDietas, setRawDietas] = useState([]);
  const [eventoInfo, setEventoInfo] = useState(null);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);

  useEffect(() => {
    if (!eventoId) return;
    let cancelled = false;
    setLoading(true);

    Promise.all([
      getRawDietas(eventoId),
      getEvento(eventoId),     
    ])
      .then(([dietas, evento]) => {
        if (!cancelled) {
          setRawDietas(dietas);
          setEventoInfo({
            nombre:      evento.title,
            totalDietas: evento.dietasEspeciales,
            contacto:    evento.contacto,
          });
          setLoading(false);
        }
      })
      .catch((err) => { if (!cancelled) { setError(err); setLoading(false); } });

    return () => { cancelled = true; };
  }, [eventoId]);

  const { viewType, data } = useMemo(
    () => applyTransform(sortId, rawDietas, ALLERGEN_ORDER),
    [sortId, rawDietas]
  );

  return { viewType, data, rawDietas, eventoInfo, loading, error };
}