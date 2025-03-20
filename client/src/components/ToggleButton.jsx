import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const ToggleButton = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    if (onToggle) onToggle(!isOpen);
  };

  return (
    <IconButton onClick={handleClick} sx={{ position: "relative", width: 50, height: 50 }}>
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </motion.div>
    </IconButton>
  );
};

export default ToggleButton;
