import React, { useState, useRef, useEffect } from "react";

const url = "https://us1.locationiq.com/v1/autocomplete.php?";

export const LocationInputWithAutoComplete = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const api = import.meta.env.VITE_LOCATIONIQ_KEY;

  const controllerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setInput(value);

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

          if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
          }

          const data = await res.json();
          setSuggestions(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            setSuggestions([]);
          }
        }
      } else {
        setSuggestions([]);
      }
    }, 400);
  };

  const selectSuggestion = (suggestion) => {
    setInput(suggestion.display_name);
    setSuggestions([]);
  };

  //  Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, []);

  return (
    <>
      <input
        value={input}
        onChange={handleOnChange}
        className="inputField"
        name="location"
        type="text"
        placeholder="Enter location"
        required
        autoComplete="off"
      />

      {suggestions.length > 0 && (
        <ul className="suggestionsList">
          {suggestions.map((suggestion, i) => (
            <li
              key={suggestion.place_id || i} 
              className="suggestionItem"
              onClick={() => selectSuggestion(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
