import { useState, useEffect } from "react";
import { getEvento } from "../services/eventoService";

/**
 * Fetches event data for a given eventoId.
 * When the real API is ready, eventoId will be passed to getEvento()
 * so it can fetch the correct event. Currently ignored by the mock.
 */
export function useEvento(eventoId) {
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!eventoId) return;
    let cancelled = false;

    const fetchEvento = async () => {
      try {
        const data = await getEvento(eventoId); // eventoId ready for real API
        if (!cancelled) setEvento(data);
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchEvento();
    return () => { cancelled = true; };
  }, [eventoId]);

  return { evento, loading, error };
}