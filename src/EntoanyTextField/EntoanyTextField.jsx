import React, { useState, useEffect } from "react";
import "./EntoanyTextField.css";
import CustomDropdown from "./CustomDropdown";
import { requestCandidates } from "./api";

export const EntoanyTextField = ({
  preferredLanguage,
  hintText,
  onEnteredTextChange,
  onSelectedTextChange,
}) => {
  const [inputText, setInputText] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState("");

  useEffect(() => {
    const fetchCandidates = async (text) => {
      if (text.trim() === "") {
        return;
      }

      try {
        const { candidates } = await requestCandidates(text, preferredLanguage); // Pass preferredLanguage to requestCandidates
        setCandidates(candidates || []);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [inputText, preferredLanguage]);

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    onEnteredTextChange(newText); // Pass input text change to parent
    fetchCandidates(newText); // Trigger fetching candidates when input text changes
  };

  const handleCandidateClick = (selectedValue) => {
    setInputText(selectedValue);
    setSelectedCandidate(selectedValue); // Update selected candidate
    onSelectedTextChange(selectedValue); // Pass selected candidate to parent
    // Optionally, clear candidates to close dropdown
    setCandidates([]);
  };

  const fetchCandidates = async (text) => {
    if (text.trim() === "") {
      return;
    }

    const apiUrl = `https://google.com/inputtools/request?text=${text}&ime=transliteration_en_${preferredLanguage}&num=4&cp=0&cs=1&ie=utf-8&oe=utf-8&a`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data[0] === "SUCCESS") {
        const candidatesList = data[1]?.[0]?.[1];
        const responseArray = candidatesList?.toString().split(",");

        setCandidates(responseArray || []);
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
        />
      </label>

      {candidates.length > 0 && (
        <CustomDropdown
          candidates={candidates}
          onSelectCandidate={handleCandidateClick}
        />
      )}
    </div>
  );
};
