import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button 
      className="dark-mode-toggle" 
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={darkMode ? 'Modo Claro' : 'Modo Escuro'}
    >
      <span className="toggle-icon">
        {darkMode ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
