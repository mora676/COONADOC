import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">COONADOC</h3>
          <p className="footer__text">
            Cooperativa Nacional de Docentes - Mejorando la calidad de vida de nuestros afiliados
          </p>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Enlaces Rápidos</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">Inicio</Link>
            </li>
            <li className="footer__item">
              <Link to="/quienes-somos" className="footer__link">Quiénes Somos</Link>
            </li>
            <li className="footer__item">
              <Link to="/afiliacion-servicios" className="footer__link">Afiliación y Servicios</Link>
            </li>
            <li className="footer__item">
              <Link to="/documentacion" className="footer__link">Documentación</Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Contacto</h3>
          <ul className="footer__contact">
            <li className="footer__contact-item">
              <i className="footer__icon fas fa-map-marker-alt"></i>
              <span>Cra, 16 # 30 - 63, Teusaquillo, Bogotá, Cundinamarca</span>
            </li>
            <li className="footer__contact-item">
              <i className="footer__icon fas fa-phone"></i>
              <span>Atencion al cliente: 311 501 9158</span>
            </li>
            <li className="footer__contact-item">
              <i className="footer__icon fas fa-phone"></i>
              <span>Linea fija: 601 7523313</span>
            </li>
            <li className="footer__contact-item">
              <i className="footer__icon fas fa-envelope"></i>
              <span>Email: servicioalclientecoonadoc@gmail.com</span>
            </li>
            <li className="footer__contact-item">
              <i className="footer__icon fas fa-envelope"></i>
              <span>Email: gerencia@coonadoc.co</span>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Síguenos en nuestras redes</h3>
          <div className="footer__social">
            <a href="https://www.facebook.com/COONADOC/" className="footer__social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/Coonadoc" className="footer__social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/coopcoonadoc/" className="footer__social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=573115019158" className="footer__social-link">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} COONADOC. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;