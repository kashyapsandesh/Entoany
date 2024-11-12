import React, { useState, useEffect } from "react";
import "./EntoanyTextField.css";

export const EntoanyTextField = ({
  preferredLanguage,
  hintText,
  onEnteredTextChange = () => {},
  onSelectedTextChange,
  width = "100%", // Default width for input field
  dropdownWidth = "100%", // Default width for the dropdown
  height = "20px", // Default height for input field
}) => {
  const [inputText, setInputText] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    console.log("inputText changed:", inputText); // Log text change
    if (inputText.trim() !== "") {
      fetchCandidates(inputText);
    } else {
      setCandidates([]);
      setShowDropdown(false);
    }
  }, [inputText, preferredLanguage]);

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    onEnteredTextChange(newText);
    setShowDropdown(true);
  };

  const handleCandidateSelect = (selectedValue) => {
    setInputText(selectedValue);
    onSelectedTextChange(selectedValue);
    setShowDropdown(false); // Hide dropdown after selection
  };

  const fetchCandidates = async (text) => {
    const apiUrl = `https://google.com/inputtools/request?text=${text}&ime=transliteration_en_${preferredLanguage}&num=4&cp=0&cs=1&ie=utf-8&oe=utf-8&a`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data[0] === "SUCCESS") {
        const candidatesList = data[1]?.[0]?.[1];
        setCandidates(candidatesList || []);
      } else {
        throw new Error("Failed to fetch candidates");
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  return (
    <div className="custom-text-field-container">
      <label className="input-label">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="input-field"
          placeholder={hintText}
          onFocus={() => setShowDropdown(true)} // Show dropdown when input is focused
          onBlur={() => setShowDropdown(false)} // Hide dropdown when input loses focus
          style={{ width, height }} // Apply width style here
        />
      </label>

      {showDropdown && candidates.length > 0 && (
        <ul
          className="suggestion-dropdown"
          style={{ width: dropdownWidth }} // Apply dropdown width
        >
          {candidates.map((candidate, index) => (
            <li
              key={index}
              onMouseDown={() => handleCandidateSelect(candidate)} // Use onMouseDown instead of onClick
              className="suggestion-item"
            >
              {candidate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
