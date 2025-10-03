import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>WikiTech</h3>
            <p>Seu Blog favorito focado em tecnologia e inovação!</p>
            {/* <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <span>𝕏</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <span>📘</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <span>💼</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <span>💻</span>
              </a>
            </div> */}
          </div>

          <div className="footer-section">
            <h4>Acesso Rápido</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/posts">Todos os Posts</Link></li>
              <li><Link to="/categories">Categorias</Link></li>
              <li><Link to="/about">Sobre Nós</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categorias</h4>
            <ul>
              <li><Link to="/categories">Gaming</Link></li>
              <li><Link to="/categories">Inteligência Artificial</Link></li>
              <li><Link to="/categories">Cibersegurança</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} WikiTech. Todos os direitos reservados.</p>
          <p>Projeto feito por Diego Amorim ❤️ </p>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
