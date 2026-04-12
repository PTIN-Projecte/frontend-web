import { useState, useEffect, useMemo } from "react";
import { getRawDietas, ALLERGEN_ORDER } from "../services/dietasService";
import { applyTransform } from "../utils/dietasTransforms";

/**
 * Fetches raw dietas ONCE, then transforms client-side on sort change.
 * No extra network calls when the user changes the sort order.
 */
export function useDietas(sortId = "comun") {
  const [rawDietas, setRawDietas] = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getRawDietas()
      .then((data) => { if (!cancelled) { setRawDietas(data); setLoading(false); } })
      .catch((err) => { if (!cancelled) { setError(err);      setLoading(false); } });
    return () => { cancelled = true; };
  }, []); // ← only on mount; sort is client-side

  const { viewType, data } = useMemo(
    () => applyTransform(sortId, rawDietas, ALLERGEN_ORDER),
    [sortId, rawDietas]
  );

  return { viewType, data, rawDietas, loading, error };
}