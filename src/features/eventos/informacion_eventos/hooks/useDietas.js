import { useState, useEffect, useMemo } from "react";
import { getRawDietas, ALLERGEN_ORDER } from "../services/dietasService";
import { applyTransform } from "../utils/dietasTransforms";

/**
 * Fetches raw dietas once, then re-applies the transform client-side
 * when sortId changes — no extra network calls.
 *
 * Returns:
 *   viewType: 'groups' | 'allergens'  → which layout to render
 *   data:     transformed array
 *   loading:  boolean
 *   error:    Error | null
 */
export function useDietas(sortId = "comun") {
  const [rawDietas, setRawDietas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch only once
  useEffect(() => {
    let cancelled = false;
    const fetch = async () => {
      try {
        const data = await getRawDietas();
        if (!cancelled) {
          setRawDietas(data);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      }
    };
    fetch();
    return () => { cancelled = true; };
  }, []);

  // Re-transform whenever sortId changes (instant, no loading)
  const { viewType, data } = useMemo(
    () => applyTransform(sortId, rawDietas, ALLERGEN_ORDER),
    [sortId, rawDietas]
  );

  return { viewType, data, loading, error };
}