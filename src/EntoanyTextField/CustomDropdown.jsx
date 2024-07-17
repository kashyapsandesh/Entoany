import React from "react";
import "./CustomDropdown.css"; // Import your CSS file for styling

const CustomDropdown = ({ candidates, onSelectCandidate }) => {
  const handleItemClick = (candidate) => {
    onSelectCandidate(candidate); // Update parent state with selected candidate
  };

  return (
    <ul className={`dropdown-list ${candidates.length > 0 ? "open" : ""}`}>
      {candidates.map((candidate, index) => (
        <li
          key={index}
          className="dropdown-item"
          onClick={() => handleItemClick(candidate)} // Call handler with candidate
        >
          {candidate}
        </li>
      ))}
    </ul>
  );
};

export default CustomDropdown;
