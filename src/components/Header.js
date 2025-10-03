import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <span className="logo-icon">🚀</span>
            <span className="logo-text">WikiTech</span>
          </Link>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/about" onClick={closeMenu}>Sobre</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contato</Link></li>
          </ul>
          <div className="nav-actions">
            <DarkModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
