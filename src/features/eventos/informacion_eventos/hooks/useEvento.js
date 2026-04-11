import { useState, useEffect } from "react";
import { getEvento } from "../services/eventoService";

export function useEvento() {
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const data = await getEvento();
        setEvento(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvento();
  }, []);

  return { evento, loading, error };
}