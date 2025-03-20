import React, { useState } from "react";

const ToggleButton = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    if (onToggle) onToggle(!isOpen);
  };

  return (
    <IconButton
      onClick={handleClick}
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {isOpen ? "Close" : "Open"}
    </IconButton>
  );
};

export default ToggleButton;
