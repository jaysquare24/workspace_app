import { useState, useRef, useEffect } from "react";
const url = "https://us1.locationiq.com/v1/autocomplete.php?";
const api = import.meta.env.VITE_LOCATIONIQ_KEY;

export const useLocationAutocomplete = () => {
  const [suggestions, setSuggestions] = useState([]);
  const timeoutRef = useRef(null);
  const controllerRef = useRef(null);

    const fetchSuggestions = (value) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(async () => {
            if (value.length > 2) {
                if (controllerRef.current) controllerRef.current.abort();
                controllerRef.current = new AbortController();

                try {
                    const res = await fetch(
                        `${url}key=${api}&q=${encodeURIComponent(value)}&limit=5&dedupe=1&format=json`,
                        { signal: controllerRef.current.signal }
                    );

                    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

                    const data = await res.json();
                    setSuggestions(data);
                } catch (err) {
                if (err.name !== "AbortError") setSuggestions([]);
                }
            } else {
                setSuggestions([]);
            }
        }, 400);
    };

  const clearSuggestions = () => setSuggestions([]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, []);

  return { suggestions, fetchSuggestions, clearSuggestions };
}
