import React, { useEffect } from "react";
import "./EntoanyTextField.css";
import CustomDropdown from "./CustomDropdown";

export const EntoanyTextField = ({
  preferredLanguage,
  hintText,
  inputText,
  setInputText,
  candidates,
  setCandidates,
}) => {
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        if (inputText.trim() !== "") {
          const { candidates } = await requestCandidates(inputText);
          setCandidates(candidates);
        } else {
          // Clear candidates when the input text is empty
          setCandidates([]);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [inputText, preferredLanguage]);

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);

    if (newText.trim() !== "") {
      fetchCandidates(newText);
    } else {
      // Clear candidates when the input text is empty
      setCandidates([]);
    }
  };

  const handleCandidateClick = (selectedValue) => {
    setInputText(selectedValue);
  };

  const fetchCandidates = async (text) => {
    // Check if the input text is empty and return without making an API request
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
      throw error;
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
