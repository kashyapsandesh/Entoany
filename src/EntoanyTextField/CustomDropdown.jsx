// CustomDropdown.js
import React from 'react';
import './CustomDropdown.css'; // Import your CSS file for styling

const CustomDropdown = ({ candidates, onSelectCandidate }) => {
  return (
    <ul className="dropdown-list">
      {candidates.map((candidate, index) => (
        <li
          key={index}
          className="dropdown-item"
          onClick={() => onSelectCandidate(candidate)}
        >
          {candidate}
        </li>
      ))}
    </ul>
  );
};

export default CustomDropdown;
