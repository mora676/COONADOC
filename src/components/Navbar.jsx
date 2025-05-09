import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/Home" className="navbar__logo" onClick={closeMenu}>
          <img src="/images/Logo.svg" alt="coonadoc-front Logo" />
        </NavLink>

        <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink 
                to="/Home/" 
                className="navbar__link"
                end
                onClick={closeMenu}
              >
                Inicio
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/Home/quienes-somos" 
                className="navbar__link"
                onClick={closeMenu}
              >
                Quiénes Somos
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/Home/afiliacion-servicios" 
                className="navbar__link"
                onClick={closeMenu}
              >
                Afiliación y Servicios
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/Home/documentacion" 
                className="navbar__link"
                onClick={closeMenu}
              >
                Documentación
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/Home/noticias" 
                className="navbar__link"
                onClick={closeMenu}
              >
                Noticias
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/Home/contacto" 
                className="navbar__link"
                onClick={closeMenu}
              >
                Contacto
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/Login" 
                className="navbar__link"
                onClick={closeMenu}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar__toggle" onClick={toggleMenu}>
          <span className="navbar__bar"></span>
          <span className="navbar__bar"></span>
          <span className="navbar__bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;