import React, { useState } from "react";
import { useLocationAutocomplete } from "../../useLocationAutoComplete";


export const Form = () => {
  const [formData, setFormData] = useState({ location: "", name: "", email: "" });
  const { suggestions, fetchSuggestions, clearSuggestions } = useLocationAutocomplete();


  // Generic field update
  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle generic fields (name, email)
  const handleFormChange = ({ target }) => {
    updateField(target.name, target.value);
  };

  // Handle location + autocomplete
  const handleLocationChange = (e) => {
    const value = e.target.value;
    updateField("location", value);
    fetchSuggestions(value);
  };

  // Select suggestion
  const selectSuggestion = (suggestion) => {
    updateField("location", suggestion.display_name);
    clearSuggestions();
  };

  // Form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is just a demo alert.)'
      +'\n'
      +'\nDear '+ formData.name+','
      +'\n'
      +'\nYour booking details have been sent to the workspace team.'
      +'\nYou have requested a free 3-day seat at the location ('+ formData.location+').'
      +'\nWe will get back to you through your email address ('+ formData.email+').'
      +'\n'
      +'\nThank you!' 
      +'\n' 
    );
    setFormData({ location: "", name: "", email: "" });
  };


  return (
    <form onSubmit={handleFormSubmit} className="messageForm" method="POST" action="#">
      <h2>Get 3 Days Free Seat Right Now</h2>
      <p className="formParagraph">A modern workplace in London</p>

      <label className="label" htmlFor="location">Location</label>
      <input
        value={formData.location}
        onChange={handleLocationChange}
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

      <label className="label" htmlFor="name">Your Name</label>
      <input
        className="inputField"
        value={formData.name}
        onChange={handleFormChange}
        name="name"
        type="text"
        placeholder="Enter full name"
        required
      />

      <label className="label" htmlFor="email">Email Address</label>
      <input
        className="inputField"
        value={formData.email}
        onChange={handleFormChange}
        name="email"
        type="email"
        placeholder="Enter email address"
        required
      />

      <button className="buttons" id="sendMessageButton" type="submit">
        Get 3 Days Free Seat <img className="arrowIcon" src="/arrowIcon.svg" />
      </button>
    </form>
  );
};
