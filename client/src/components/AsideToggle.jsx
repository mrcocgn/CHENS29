import React, { useState } from 'react';
import '../styles/AsideToggle.css';
import AsideContent from './AsideContent';

const AsideToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const OpenIcon = (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const CloseIcon = (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const toggleButton = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <>
      <button onClick={toggleButton} className="toggle-button fixed">
        {isVisible ? CloseIcon : OpenIcon}
      </button>

      <aside className={`full-aside ${isVisible ? 'visible' : ''}`}>
        <AsideContent />
      </aside>
    </>
  );
};

export default AsideToggle;
