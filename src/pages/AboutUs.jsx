import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner__container">
          <h1 className="page-banner__title">Quiénes Somos</h1>
          <p className="page-banner__text">
            Conoce nuestra historia, misión, visión y los valores que nos guían día a día.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="section history">
        <div className="section__container">
          <div className="history__wrapper">
            <div className="history__content">
              <h2 className="section__title">Nuestra Historia</h2>
              <p className="history__text">
                COONADOC fue fundada en 1995 por un grupo de docentes universitarios que buscaban crear una alternativa financiera cooperativa que respondiera a las necesidades específicas del gremio educativo. A lo largo de más de 25 años, hemos crecido y evolucionado para convertirnos en una de las cooperativas más sólidas del sector educativo.
              </p>
              <p className="history__text">
                Desde nuestros inicios, nos hemos comprometido con el bienestar integral y el mejoramiento de la calidad de vida de nuestros afiliados, manteniendo siempre los principios cooperativos de ayuda mutua, responsabilidad, democracia, igualdad, equidad y solidaridad.
              </p>
              <p className="history__text">
                Hoy, COONADOC cuenta con más de 10,000 afiliados en todo el país, y seguimos creciendo gracias a la confianza que los docentes han depositado en nuestra gestión y en nuestros servicios.
              </p>
              <button
                className="btn btn-ver-video"
                onClick={() => window.open('https://www.youtube.com/watch?v=gILqRwzFPFs', '_blank')}
              >
                Click para ver video de historia completo
              </button>

            </div>
            <div className="history__image responsive-image">
              <img src="/images/Historia.jpg" alt="Historia de COONADOC" />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section mission-vision">
        <div className="section__container">
          <div className="mission-vision__wrapper">
            <div className="mission-vision__box mission">
              <div className="mission-vision__icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2 className="mission-vision__title">Misión</h2>
              <p className="mission-vision__text">
                Somos una cooperativa comprometida con el bienestar integral y el mejoramiento de la calidad de vida de los docentes y sus familias, ofreciendo servicios financieros y sociales de calidad, con un enfoque en la educación, la solidaridad y el desarrollo sostenible.
              </p>
            </div>

            <div className="mission-vision__box vision">
              <div className="mission-vision__icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2 className="mission-vision__title">Visión</h2>
              <p className="mission-vision__text">
                Para el 2030, COONADOC será reconocida como la cooperativa líder en el sector educativo a nivel nacional, destacándose por su innovación, sostenibilidad, impacto social y excelencia en el servicio, contribuyendo significativamente al desarrollo integral de sus afiliados y de la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section values">
        <div className="section__container">
          <h2 className="section__title">Nuestros Valores</h2>

          <div className="values__grid">
            <div className="values__item">
              <div className="values__icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="values__title">Solidaridad</h3>
              <p className="values__text">
                Trabajamos juntos por el bienestar común, apoyándonos mutuamente para alcanzar nuestras metas.
              </p>
            </div>

            <div className="values__item">
              <div className="values__icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3 className="values__title">Equidad</h3>
              <p className="values__text">
                Promovemos un trato justo y equilibrado para todos nuestros afiliados, sin distinciones ni preferencias.
              </p>
            </div>

            <div className="values__item">
              <div className="values__icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="values__title">Responsabilidad</h3>
              <p className="values__text">
                Asumimos nuestros compromisos con seriedad y garantizamos el cumplimiento de nuestras obligaciones.
              </p>
            </div>

            <div className="values__item">
              <div className="values__icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="values__title">Democracia</h3>
              <p className="values__text">
                Fomentamos la participación activa de todos los afiliados en la toma de decisiones de la cooperativa.
              </p>
            </div>

            <div className="values__item">
              <div className="values__icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="values__title">Innovación</h3>
              <p className="values__text">
                Buscamos constantemente nuevas y mejores formas de satisfacer las necesidades de nuestros afiliados.
              </p>
            </div>

            <div className="values__item">
              <div className="values__icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="values__title">Honestidad</h3>
              <p className="values__text">
                Actuamos con transparencia y sinceridad en todas nuestras operaciones y relaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos Normativos */}
      <section className="section documents">
        <div className="section__container">
          <h2 className="section__title">Documentos Normativos</h2>
          <p className="documents__intro">
            Estos documentos establecen las normas, procedimientos y lineamientos que rigen el funcionamiento de nuestra cooperativa.
          </p>

          <div className="documents__list">
            <div className="documents__item">
              <div className="documents__icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="documents__content">
                <h3 className="documents__title">Estatutos COONADOC</h3>
                <p className="documents__desc">
                  Documento fundamental que establece las reglas básicas de organización y funcionamiento de la cooperativa.
                </p>
                <a href="/documents/estatutos-coonadoc.pdf" className="btn btn--primary btn--sm" download>
                  Descargar PDF
                </a>
              </div>
            </div>

            <div className="documents__item">
              <div className="documents__icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="documents__content">
                <h3 className="documents__title">Reglamento Interno</h3>
                <p className="documents__desc">
                  Normas específicas que regulan la vida interna y el funcionamiento cotidiano de la cooperativa.
                </p>
                <a href="/documents/reglamento-interno.pdf" className="btn btn--primary btn--sm" download>
                  Descargar PDF
                </a>
              </div>
            </div>

            <div className="documents__item">
              <div className="documents__icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="documents__content">
                <h3 className="documents__title">Código de Ética y Buen Gobierno</h3>
                <p className="documents__desc">
                  Lineamientos éticos y principios de buen gobierno que orientan el comportamiento de directivos y funcionarios.
                </p>
                <a href="/documents/codigo-etica.pdf" className="btn btn--primary btn--sm" download>
                  Descargar PDF
                </a>
              </div>
            </div>

            <div className="documents__item">
              <div className="documents__icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="documents__content">
                <h3 className="documents__title">Política de Tratamiento de Datos</h3>
                <p className="documents__desc">
                  Documento que establece los criterios para el tratamiento y protección de datos personales.
                </p>
                <a href="/documents/politica-datos.pdf" className="btn btn--primary btn--sm" download>
                  Descargar PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="section team">
        <div className="section__container">
          <h2 className="section__title">Nuestro Equipo Directivo</h2>
          <p className="team__intro">
            Conoce a las personas que lideran COONADOC, comprometidas con el bienestar de nuestros afiliados y el crecimiento sostenible de la cooperativa.
          </p>

          <div className="team__grid">
            <div className="team__member">
              <div className="team__photo">
                <img src="/images/silueta-hombre.png" alt="Director 1" />
              </div>
              <h3 className="team__name">Carlos Rodríguez</h3>
              <p className="team__position">Presidente</p>
              <p className="team__desc">
                Doctor en Educación con más de 20 años de experiencia en el sector cooperativo.
              </p>
            </div>

            <div className="team__member">
              <div className="team__photo">
                <img src="/images/silueta-mujer.png" alt="Director 2" />
              </div>
              <h3 className="team__name">Martha Sánchez</h3>
              <p className="team__position">Gerente General</p>
              <p className="team__desc">
                Especialista en Economía Solidaria con amplia trayectoria en administración de cooperativas.
              </p>
            </div>

            <div className="team__member">
              <div className="team__photo">
                <img src="/images/silueta-hombre.png" alt="Director 3" />
              </div>
              <h3 className="team__name">Juan Gómez</h3>
              <p className="team__position">Director Financiero</p>
              <p className="team__desc">
                Máster en Finanzas con experiencia en el diseño de productos financieros para el sector solidario.
              </p>
            </div>

            <div className="team__member">
              <div className="team__photo">
                <img src="/images/silueta-mujer.png" alt="Director 4" />
              </div>
              <h3 className="team__name">Laura Mendoza</h3>
              <p className="team__position">Directora de Servicios</p>
              <p className="team__desc">
                Especialista en Gestión de Proyectos Sociales y desarrollo de programas de bienestar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">¿Quieres conocer más sobre nosotros?</h2>
          <p className="cta__text">
            Contáctanos para resolver tus dudas o programa una visita a nuestras instalaciones.
          </p>
          <Link to="/COONADOC/contacto" className="btn btn--light">Contactar ahora</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;