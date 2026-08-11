import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [selectionStyle, updateSelectionStyle] = useState({
    background: "",
  });

  const handleClick = () => {
    applyColor(updateSelectionStyle);
  };

  return (
    <div
      className="selection"
      style={selectionStyle}
      onClick={handleClick}
    >
      Click me
    </div>
  );
};

export default Selection;
