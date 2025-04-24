import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Banner Principal */}
      <section className="banner">
        <div className="banner__container">
          <h1 className="banner__title">Bienvenido a COONADOC</h1>
          <p className="banner__text">
            Cooperativa Nacional de Docentes - Comprometidos con el bienestar y progreso de nuestros afiliados.
          </p>
          <Link to="/afiliacion-servicios" className="btn btn--primary">
            Conoce nuestros servicios
          </Link>
        </div>
      </section>

      {/* Beneficios Principales */}
      <section className="section benefits">
        <div className="section__container">
          <h2 className="section__title">Nuestros Beneficios</h2>
          
          <div className="benefits__grid">
            <div className="benefits__item">
              <div className="benefits__icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3 className="benefits__title">Créditos Accesibles</h3>
              <p className="benefits__text">
                Ofrecemos diferentes líneas de crédito con tasas preferenciales para nuestros afiliados.
              </p>
            </div>
            
            <div className="benefits__item">
              <div className="benefits__icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="benefits__title">Seguros Completos</h3>
              <p className="benefits__text">
                Protección para ti y tu familia con nuestros planes de seguro especialmente diseñados.
              </p>
            </div>
            
            <div className="benefits__item">
              <div className="benefits__icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="benefits__title">Convenios Exclusivos</h3>
              <p className="benefits__text">
                Disfruta de beneficios especiales con nuestros aliados estratégicos en diferentes sectores.
              </p>
            </div>
            
            <div className="benefits__item">
              <div className="benefits__icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="benefits__title">Educación Continua</h3>
              <p className="benefits__text">
                Programas de formación y desarrollo profesional para nuestros afiliados y sus familias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Últimas Noticias */}
      <section className="section news">
        <div className="section__container">
          <h2 className="section__title">Últimas Noticias</h2>
          
          <div className="news__grid">
            <div className="news__card">
              <div className="news__image">
                <img src="/images/news-1.jpg" alt="Noticia 1" />
              </div>
              <div className="news__content">
                <span className="news__date">21 Abril, 2025</span>
                <h3 className="news__title">Nueva línea de crédito educativo</h3>
                <p className="news__excerpt">
                  Lanzamos una nueva línea de crédito para apoyar la educación superior de los hijos de nuestros afiliados.
                </p>
                <Link to="/noticias/nueva-linea-credito" className="news__link">Leer más</Link>
              </div>
            </div>
            
            <div className="news__card">
              <div className="news__image">
                <img src="/images/news-2.png" alt="Noticia 2" />
              </div>
              <div className="news__content">
                <span className="news__date">15 Abril, 2025</span>
                <h3 className="news__title">Calendario de capacitaciones 2025</h3>
                <p className="news__excerpt">
                  Conoce nuestro calendario de capacitaciones gratuitas para el segundo trimestre del año.
                </p>
                <Link to="/noticias/calendario-capacitaciones" className="news__link">Leer más</Link>
              </div>
            </div>
            
            <div className="news__card">
              <div className="news__image">
                <img src="/images/news-3.png" alt="Noticia 3" />
              </div>
              <div className="news__content">
                <span className="news__date">10 Abril, 2025</span>
                <h3 className="news__title">Nuevo convenio con Universidad Nacional</h3>
                <p className="news__excerpt">
                  Firmamos un convenio con la Universidad Nacional para beneficios en programas de posgrado.
                </p>
                <Link to="/noticias/convenio-universidad" className="news__link">Leer más</Link>
              </div>
            </div>
          </div>
          
          <div className="news__more">
            <Link to="/noticias" className="btn btn--secondary">Ver todas las noticias</Link>
          </div>
        </div>
      </section>

      {/* Llamado a la acción - Afiliación */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">¿Aún no eres parte de COONADOC?</h2>
          <p className="cta__text">
            Únete a nuestra cooperativa y disfruta de todos los beneficios que tenemos para ti y tu familia.
          </p>
          <Link to="/afiliacion-servicios" className="btn btn--light">Afiliate ahora</Link>
        </div>
      </section>
      
      {/* Contacto Rápido */}
      <section className="section contact-quick">
        <div className="section__container">
          <div className="contact-quick__wrapper">
            <div className="contact-quick__info">
              <h2 className="section__title">Contacto Rápido</h2>
              <p className="contact-quick__text">
                Estamos aquí para ayudarte. Comunícate con nosotros a través de cualquiera de nuestros canales de atención.
              </p>
              
              <div className="contact-quick__methods">
                <div className="contact-quick__method">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3 className="contact-quick__method-title">Teléfono</h3>
                    <p className="contact-quick__method-text">Atencion al cliente: 311 501 9158</p>
                    <p className="contact-quick__method-text">Linea fija: 601 7523313</p>
                  </div>
                </div>
                
                <div className="contact-quick__method">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3 className="contact-quick__method-title">Email</h3>
                    <p className="contact-quick__method-text">servicioalclientecoonadoc@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-quick__method">
                  <i className="fab fa-whatsapp"></i>
                  <div>
                    <h3 className="contact-quick__method-title">WhatsApp</h3>
                    <p className="contact-quick__method-text">(+57) 311 501 9158</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contacto" className="btn btn--outline">Más información de contacto</Link>
            </div>
            
            <div className="contact-quick__map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8583894101084!2d-74.0720987!3d4.6193412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f98ec812d32f5%3A0xc08cb826ece75740!2sCoonadoc!5e0!3m2!1ses-419!2sco!4v1745267867085!5m2!1ses-419!2sco" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Ubicación COONADOC"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;