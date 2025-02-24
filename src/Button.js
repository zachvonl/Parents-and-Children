import React from 'react';

function Button({ backgroundColor, onClick, label }) {
  return (
    <button
      className="color-button"
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;