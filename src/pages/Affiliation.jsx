import React from 'react';
import { Link } from 'react-router-dom';

const Affiliation = () => {
  return (
    <div className="affiliation">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner__container">
          <h1 className="page-banner__title">Afiliación y Servicios</h1>
          <p className="page-banner__text">
            Conoce los requisitos para ser parte de COONADOC y todos los servicios que tenemos para ti.
          </p>
        </div>
      </section>

      {/* Requisitos de Afiliación */}
      <section className="section affiliation-requirements">
        <div className="section__container">
          <h2 className="section__title">Requisitos de Afiliación</h2>
          <p className="affiliation-requirements__intro">
            Para formar parte de nuestra cooperativa, necesitas cumplir con los siguientes requisitos:
          </p>
          
          <div className="affiliation-requirements__grid">
            <div className="affiliation-requirements__item">
              <div className="affiliation-requirements__icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="affiliation-requirements__content">
                <h3 className="affiliation-requirements__title">Ser Docente</h3>
                <p className="affiliation-requirements__text">
                  Ser docente activo o pensionado de cualquier institución educativa pública o privada del país.
                </p>
              </div>
            </div>
            
            <div className="affiliation-requirements__item">
              <div className="affiliation-requirements__icon">
                <i className="fas fa-id-card"></i>
              </div>
              <div className="affiliation-requirements__content">
                <h3 className="affiliation-requirements__title">Documentación</h3>
                <p className="affiliation-requirements__text">
                  Presentar fotocopia de la cédula de ciudadanía, certificado laboral y últimos dos desprendibles de pago.
                </p>
              </div>
            </div>
            
            <div className="affiliation-requirements__item">
              <div className="affiliation-requirements__icon">
                <i className="fas fa-coins"></i>
              </div>
              <div className="affiliation-requirements__content">
                <h3 className="affiliation-requirements__title">Aportes</h3>
                <p className="affiliation-requirements__text">
                  Realizar un aporte inicial equivalente al 5% de un salario mínimo mensual vigente y aportes mensuales del 3% de tu salario.
                </p>
              </div>
            </div>
            
            <div className="affiliation-requirements__item">
              <div className="affiliation-requirements__icon">
                <i className="fas fa-file-signature"></i>
              </div>
              <div className="affiliation-requirements__content">
                <h3 className="affiliation-requirements__title">Formulario</h3>
                <p className="affiliation-requirements__text">
                  Diligenciar y firmar el formulario de solicitud de afiliación y autorización de descuento por nómina.
                </p>
              </div>
            </div>
          </div>
          
          <div className="affiliation-requirements__action">
            <a href="/documents/formulario-afiliacion.pdf" className="btn btn--primary" download>
              Descargar Formulario de Afiliación
            </a>
          </div>
        </div>
      </section>

      {/* Proceso de Afiliación */}
      <section className="section affiliation-process">
        <div className="section__container">
          <h2 className="section__title">Proceso de Afiliación</h2>
          <p className="affiliation-process__intro">
            Seguimos un proceso sencillo para garantizar una afiliación rápida y sin complicaciones:
          </p>
          
          <div className="affiliation-process__steps">
            <div className="affiliation-process__step">
              <div className="affiliation-process__step-number">1</div>
              <div className="affiliation-process__step-content">
                <h3 className="affiliation-process__step-title">Solicitud</h3>
                <p className="affiliation-process__step-text">
                  Diligencia el formulario de afiliación y reúne todos los documentos requeridos.
                </p>
              </div>
            </div>
            
            <div className="affiliation-process__step">
              <div className="affiliation-process__step-number">2</div>
              <div className="affiliation-process__step-content">
                <h3 className="affiliation-process__step-title">Presentación</h3>
                <p className="affiliation-process__step-text">
                  Entrega la documentación completa en nuestras oficinas o envíala por correo electrónico.
                </p>
              </div>
            </div>
            
            <div className="affiliation-process__step">
              <div className="affiliation-process__step-number">3</div>
              <div className="affiliation-process__step-content">
                <h3 className="affiliation-process__step-title">Revisión</h3>
                <p className="affiliation-process__step-text">
                  El comité de admisiones revisará tu solicitud en un plazo máximo de 5 días hábiles.
                </p>
              </div>
            </div>
            
            <div className="affiliation-process__step">
              <div className="affiliation-process__step-number">4</div>
              <div className="affiliation-process__step-content">
                <h3 className="affiliation-process__step-title">Aprobación</h3>
                <p className="affiliation-process__step-text">
                  Recibirás notificación de la aprobación de tu solicitud y las instrucciones para el primer aporte.
                </p>
              </div>
            </div>
            
            <div className="affiliation-process__step">
              <div className="affiliation-process__step-number">5</div>
              <div className="affiliation-process__step-content">
                <h3 className="affiliation-process__step-title">Bienvenida</h3>
                <p className="affiliation-process__step-text">
                  Te daremos la bienvenida oficial a COONADOC y acceso a todos nuestros servicios y beneficios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Crédito */}
      <section className="section credit-types">
        <div className="section__container">
          <h2 className="section__title">Tipos de Crédito</h2>
          <p className="credit-types__intro">
            En COONADOC ofrecemos diferentes líneas de crédito diseñadas para satisfacer tus necesidades:
          </p>
          
          <div className="credit-types__grid">
            <div className="credit-types__item">
              <div className="credit-types__icon">
                <i className="fas fa-home"></i>
              </div>
              <h3 className="credit-types__title">Crédito de Vivienda</h3>
              <p className="credit-types__text">
                Financia la compra, construcción o mejora de tu vivienda con tasas preferenciales y plazos hasta de 15 años.
              </p>
              <ul className="credit-types__features">
                <li>Tasa desde 0.8% mensual</li>
                <li>Monto hasta 150 SMMLV</li>
                <li>Plazo hasta 180 meses</li>
              </ul>
              <Link to="/afiliacion-servicios/credito-vivienda" className="credit-types__link">
                Más información
              </Link>
            </div>
            
            <div className="credit-types__item">
              <div className="credit-types__icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="credit-types__title">Crédito Educativo</h3>
              <p className="credit-types__text">
                Invierte en tu futuro y el de tu familia financiando estudios de pregrado, posgrado o educación continua.
              </p>
              <ul className="credit-types__features">
                <li>Tasa desde 0.7% mensual</li>
                <li>Monto hasta 80 SMMLV</li>
                <li>Plazo hasta 60 meses</li>
              </ul>
              <Link to="/afiliacion-servicios/credito-educativo" className="credit-types__link">
                Más información
              </Link>
            </div>
            
            <div className="credit-types__item">
              <div className="credit-types__icon">
                <i className="fas fa-car"></i>
              </div>
              <h3 className="credit-types__title">Crédito de Vehículo</h3>
              <p className="credit-types__text">
                Adquiere vehículo nuevo o usado con excelentes condiciones de financiamiento y seguros incluidos.
              </p>
              <ul className="credit-types__features">
                <li>Tasa desde 0.9% mensual</li>
                <li>Monto hasta 100 SMMLV</li>
                <li>Plazo hasta 72 meses</li>
              </ul>
              <Link to="/afiliacion-servicios/credito-vehiculo" className="credit-types__link">
                Más información
              </Link>
            </div>
            
            <div className="credit-types__item">
              <div className="credit-types__icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3 className="credit-types__title">Crédito de Libre Inversión</h3>
              <p className="credit-types__text">
                Financia tus proyectos personales, viajes, electrodomésticos o cualquier necesidad que tengas.
              </p>
              <ul className="credit-types__features">
                <li>Tasa desde 1.0% mensual</li>
                <li>Monto hasta 50 SMMLV</li>
                <li>Plazo hasta 48 meses</li>
              </ul>
              <Link to="/afiliacion-servicios/credito-libre-inversion" className="credit-types__link">
                Más información
              </Link>
            </div>
          </div>
          
          <div className="credit-types__action">
            <Link to="/afiliacion-servicios/simulador" className="btn btn--primary">
              Simular un Crédito
            </Link>
          </div>
        </div>
      </section>

      {/* Seguros y Beneficios */}
      <section className="section insurance-benefits">
        <div className="section__container">
          <h2 className="section__title">Seguros y Beneficios</h2>
          <p className="insurance-benefits__intro">
            Como afiliado a COONADOC, accedes a una amplia gama de seguros y beneficios exclusivos:
          </p>
          
          <div className="insurance-benefits__wrapper">
            <div className="insurance-benefits__column">
              <h3 className="insurance-benefits__subtitle">Seguros</h3>
              <ul className="insurance-benefits__list">
                <li className="insurance-benefits__item">
                  <i className="fas fa-heartbeat"></i>
                  <div className="insurance-benefits__content">
                    <h4 className="insurance-benefits__name">Seguro de Vida</h4>
                    <p className="insurance-benefits__desc">
                      Protección para ti y tu familia con coberturas por fallecimiento e incapacidad total y permanente.
                    </p>
                  </div>
                </li>
                
                <li className="insurance-benefits__item">
                  <i className="fas fa-hospital"></i>
                  <div className="insurance-benefits__content">
                    <h4 className="insurance-benefits__name">Seguro de Salud</h4>
                    <p className="insurance-benefits__desc">
                      Planes complementarios de salud con tarifas preferenciales para ti y tu grupo familiar.
                    </p>
                  </div>
                </li>
                
                <li className="insurance-benefits__item">
                  <i className="fas fa-car-crash"></i>
                  <div className="insurance-benefits__content">
                    <h4 className="insurance-benefits__name">Seguro de Vehículo</h4>
                    <p className="insurance-benefits__desc">
                      Pólizas todo riesgo con descuentos especiales y coberturas ampliadas.
                    </p>
                  </div>
                </li>
                
                <li className="insurance-benefits__item">
                  <i className="fas fa-home"></i>
                  <div className="insurance-benefits__content">
                    <h4 className="insurance-benefits__name">Seguro de Hogar</h4>
                    <p className="insurance-benefits__desc">
                      Protección para tu vivienda y contenido ante eventos inesperados.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="insurance-benefits__column">
              <h3 className="insurance-benefits__subtitle">Beneficios</h3>
              <ul className="insurance-benefits__list">
                <li className="insurance-benefits__item">
                  <i className="fas fa-gift"></i>
                  <div className="insurance-benefits__content">
                    <h4 className="insurance-benefits__name">Auxilios Solidarios</h4>
                    <p className="insurance-benefits__desc">
                      Apoyo económico en situaciones de calamidad, nacimiento de hijos y fallecimiento.
                    </p>
                  </div>
                </li>
                
                <li className="insurance-benefits__item">
                  <i className="fas fa-graduation-cap"></i>
                  <div className="insurance-benefits__content">
                    <h4 className="insurance-benefits__name">Becas Educativas</h4>
                    <p className="insurance-benefits__desc">
                      Programa de becas para hijos de afiliados con excelencia académica.
                    </p>
                  </div>
                </li>
                
                <li className="insurance-benefits__item">
                  <i className="fas fa-umbrella-beach"></i>
                  <div className="insurance-benefits__content">
                    <h4 className="insurance-benefits__name">Recreación y Turismo</h4>
                    <p className="insurance-benefits__desc">
                      Acceso a centros vacacionales, pasadías y planes turísticos con tarifas especiales.
                    </p>
                  </div>
                </li>
                
                <li className="insurance-benefits__item">
                  <i className="fas fa-birthday-cake"></i>
                  <div className="insurance-benefits__content">
                    <h4 className="insurance-benefits__name">Celebraciones Especiales</h4>
                    <p className="insurance-benefits__desc">
                      Reconocimientos por fechas especiales como cumpleaños, día del maestro y navidad.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Convenios */}
      <section className="section agreements">
        <div className="section__container">
          <h2 className="section__title">Convenios con Aliados</h2>
          <p className="agreements__intro">
            Disfruta de descuentos y beneficios especiales con nuestros aliados estratégicos:
          </p>
          
          <div className="agreements__grid">
            <div className="agreements__item">
              <div className="agreements__logo">
                <img src="/images/aliado-1.jpg" alt="Aliado 1" />
              </div>
              <h3 className="agreements__name">Gimnasio Bodytech</h3>
              <p className="agreements__desc">
                Tarifas corporativas con hasta 30% de descuento en planes anuales.
              </p>
            </div>
            
            <div className="agreements__item">
              <div className="agreements__logo">
                <img src="/images/aliado-2.jpg" alt="Aliado 2" />
              </div>
              <h3 className="agreements__name">Cine Colombia</h3>
              <p className="agreements__desc">
                Vive días de pelicula con nuestras tarifas exclusivas.
              </p>
            </div>
            
            <div className="agreements__item">
              <div className="agreements__logo">
                <img src="/images/aliado-3.jpg" alt="Aliado 3" />
              </div>
              <h3 className="agreements__name">Colmedica</h3>
              <p className="agreements__desc">
                Orientación médica ilimitada por llamada o video llamada 24/7.
              </p>
            </div>
            
            <div className="agreements__item">
              <div className="agreements__logo">
                <img src="/images/aliado-4.jpg" alt="Aliado 4" />
              </div>
              <h3 className="agreements__name">Parque Tematico Hacienda Napoles</h3>
              <p className="agreements__desc">
                Vive experiencias inolvidables con nuestras nuevas tarifas exclusivas.
              </p>
            </div>
            
            <div className="agreements__item">
              <div className="agreements__logo">
                <img src="/images/aliado-5.jpg" alt="Aliado 5" />
              </div>
              <h3 className="agreements__name">Mundo Aventura</h3>
              <p className="agreements__desc">
                Vive días de aventuray diversión con nuestras nuevas tarifas.
              </p>
            </div>
            
            <div className="agreements__item">
              <div className="agreements__logo">
                <img src="/images/aliado-6.jpg" alt="Aliado 6" />
              </div>
              <h3 className="agreements__name">Teatro Nacional</h3>
              <p className="agreements__desc">
                Pregunta por nuestras tarifas exclusivas y disfruta del mejor teatro.
              </p>
            </div>
          </div>
          
          <div className="agreements__more">
            <Link to="/afiliacion-servicios/convenios" className="btn btn--secondary">
              Ver todos los convenios
            </Link>
          </div>
        </div>
      </section>

      {/* Documentos Relevantes */}
      <section className="section relevant-documents">
        <div className="section__container">
          <h2 className="section__title">Documentos Relevantes</h2>
          <p className="relevant-documents__intro">
            Descarga los documentos necesarios para acceder a nuestros servicios:
          </p>
          
          <div className="relevant-documents__list">
            <div className="relevant-documents__item">
              <div className="relevant-documents__icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="relevant-documents__content">
                <h3 className="relevant-documents__title">Formulario de Afiliación</h3>
                <p className="relevant-documents__desc">
                  Documento requerido para iniciar el proceso de afiliación a la cooperativa.
                </p>
                <a href="/documents/formulario-afiliacion.pdf" className="btn btn--primary btn--sm" download>
                  Descargar PDF
                </a>
              </div>
            </div>
            
            <div className="relevant-documents__item">
              <div className="relevant-documents__icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="relevant-documents__content">
                <h3 className="relevant-documents__title">Solicitud de Crédito</h3>
                <p className="relevant-documents__desc">
                  Formulario para solicitar cualquier línea de crédito ofrecida por COONADOC.
                </p>
                <a href="/documents/solicitud-credito.pdf" className="btn btn--primary btn--sm" download>
                  Descargar PDF
                </a>
              </div>
            </div>
            
            <div className="relevant-documents__item">
              <div className="relevant-documents__icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="relevant-documents__content">
                <h3 className="relevant-documents__title">Reglamento de Crédito</h3>
                <p className="relevant-documents__desc">
                  Documento que establece las políticas y condiciones para acceder a los créditos.
                </p>
                <a href="/documents/reglamento-credito.pdf" className="btn btn--primary btn--sm" download>
                  Descargar PDF
                </a>
              </div>
            </div>
            
            <div className="relevant-documents__item">
              <div className="relevant-documents__icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="relevant-documents__content">
                <h3 className="relevant-documents__title">Formato de Actualización de Datos</h3>
                <p className="relevant-documents__desc">
                  Documento para mantener actualizada tu información personal y de contacto.
                </p>
                <a href="/documents/actualizacion-datos.pdf" className="btn btn--primary btn--sm" download>
                  Descargar PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">¿Listo para ser parte de COONADOC?</h2>
          <p className="cta__text">
            Inicia tu proceso de afiliación hoy mismo y comienza a disfrutar de todos nuestros beneficios.
          </p>
          <Link to="/contacto" className="btn btn--light">Contactar ahora</Link>
        </div>
      </section>
    </div>
  );
};

export default Affiliation;