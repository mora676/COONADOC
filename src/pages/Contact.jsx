import React, { useState } from 'react';

const Contact = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isAffiliate: false
  });
  
  // Estado para alertas
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  
  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí se implementaría la lógica para enviar el formulario
    // Por ahora simulamos una respuesta exitosa
    
    // Simular procesamiento
    setTimeout(() => {
      // Simulamos un envío exitoso (en producción se haría la validación real)
      if (formData.name && formData.email && formData.message) {
        setFormSuccess(true);
        setFormError(false);
        // Limpiar formulario después de envío exitoso
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          isAffiliate: false
        });
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setFormSuccess(false);
        }, 5000);
      } else {
        setFormError(true);
        setFormSuccess(false);
      }
    }, 1000);
  };
  
  return (
    <div className="contact">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner__container">
          <h1 className="page-banner__title">Contacto y Soporte</h1>
          <p className="page-banner__text">
            Estamos aquí para responder tus preguntas y brindarte la asistencia que necesitas.
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="section contact-info">
        <div className="section__container">
          <div className="contact-info__wrapper">
            <div className="contact-info__methods">
              <h2 className="section__title">Información de Contacto</h2>
              <p className="contact-info__text">
                Comunícate con nosotros a través de cualquiera de estos canales:
              </p>
              
              <div className="contact-info__grid">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__title">Dirección</h3>
                    <p className="contact-info__details">
                      Calle Principal #123<br />
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__title">Teléfonos</h3>
                    <p className="contact-info__details">
                      <a href="tel:+5712345678">(+57) 1 234 5678</a><br />
                      <a href="tel:+573001234567">Celular: (+57) 300 123 4567</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__title">Email</h3>
                    <p className="contact-info__details">
                      <a href="mailto:info@coonadoc.co">info@coonadoc.co</a><br />
                      <a href="mailto:servicioalcliente@coonadoc.co">servicioalcliente@coonadoc.co</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__title">Horario de Atención</h3>
                    <p className="contact-info__details">
                      Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                      Sábados: 9:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="contact-info__social">
                <h3 className="contact-info__social-title">Síguenos en Redes Sociales</h3>
                <div className="contact-info__social-links">
                  <a href="https://facebook.com/coonadoc" target="_blank" rel="noopener noreferrer" className="contact-info__social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/coonadoc" target="_blank" rel="noopener noreferrer" className="contact-info__social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/coonadoc" target="_blank" rel="noopener noreferrer" className="contact-info__social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/company/coonadoc" target="_blank" rel="noopener noreferrer" className="contact-info__social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-info__map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4537406493864!2d-74.06026492428036!3d4.673056042279079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2e545a44b1%3A0x4b93c74777cef66!2sUniversidad%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1650567215693!5m2!1ses!2sco" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Ubicación COONADOC"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="section contact-form-section">
        <div className="section__container">
          <h2 className="section__title">Formulario de Contacto</h2>
          <p className="contact-form-section__intro">
            Completa el siguiente formulario y te responderemos a la brevedad posible:
          </p>
          
          <div className="contact-form-section__wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              {formSuccess && (
                <div className="contact-form__alert success">
                  <i className="fas fa-check-circle"></i>
                  <p>Tu mensaje ha sido enviado con éxito. Te responderemos pronto.</p>
                </div>
              )}
              
              {formError && (
                <div className="contact-form__alert error">
                  <i className="fas fa-exclamation-circle"></i>
                  <p>Ha ocurrido un error. Por favor, verifica los campos e intenta nuevamente.</p>
                </div>
              )}
              
              <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">Nombre Completo *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="contact-form__input" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">Correo Electrónico *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="contact-form__input" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact-form__group">
                <label htmlFor="phone" className="contact-form__label">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="contact-form__input" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="contact-form__group">
                <label htmlFor="subject" className="contact-form__label">Asunto *</label>
                <select 
                  id="subject" 
                  name="subject" 
                  className="contact-form__input" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="info">Información General</option>
                  <option value="afiliacion">Afiliación</option>
                  <option value="creditos">Créditos</option>
                  <option value="convenios">Convenios</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="queja">Queja o Reclamo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">Mensaje *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="contact-form__textarea" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="contact-form__group checkbox">
                <input 
                  type="checkbox" 
                  id="isAffiliate" 
                  name="isAffiliate" 
                  checked={formData.isAffiliate}
                  onChange={handleChange}
                />
                <label htmlFor="isAffiliate" className="contact-form__checkbox-label">
                  Soy afiliado a COONADOC
                </label>
              </div>
              
              <div className="contact-form__group checkbox">
                <input type="checkbox" id="privacy" name="privacy" required />
                <label htmlFor="privacy" className="contact-form__checkbox-label">
                  Acepto la política de privacidad y el tratamiento de mis datos personales *
                </label>
              </div>
              
              <div className="contact-form__submit">
                <button type="submit" className="btn btn--primary">
                  Enviar Mensaje
                </button>
              </div>
            </form>
            
            <div className="contact-form-section__info">
              <div className="contact-form-section__whatsapp">
                <h3 className="contact-form-section__subtitle">Contáctanos por WhatsApp</h3>
                <p className="contact-form-section__text">
                  Para una atención más inmediata, puedes comunicarte con nosotros a través de WhatsApp:
                </p>
                <a href="https://wa.me/573001234567" className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> Chatear por WhatsApp
                </a>
              </div>
              
              <div className="contact-form-section__email">
                <h3 className="contact-form-section__subtitle">Email Directo</h3>
                <p className="contact-form-section__text">
                  También puedes enviarnos un correo electrónico directamente a:
                </p>
                <a href="mailto:info@coonadoc.co" className="contact-form-section__mail-link">
                  <i className="fas fa-envelope"></i> info@coonadoc.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="section faq-section">
        <div className="section__container">
          <h2 className="section__title">Preguntas Frecuentes</h2>
          <p className="faq-section__intro">
            Aquí encontrarás respuestas a las preguntas más comunes:
          </p>
          
          <div className="faq-section__list">
            <div className="faq-section__item">
              <h3 className="faq-section__question">
                <i className="fas fa-question-circle"></i>
                ¿Cuáles son los requisitos para afiliarme a COONADOC?
              </h3>
              <div className="faq-section__answer">
                <p>
                  Para afiliarte a COONADOC debes ser docente activo o pensionado, presentar documentación básica (fotocopia de cédula, certificado laboral y desprendibles de pago), realizar un aporte inicial y completar el formulario de afiliación.
                </p>
              </div>
            </div>
            
            <div className="faq-section__item">
              <h3 className="faq-section__question">
                <i className="fas fa-question-circle"></i>
                ¿Cuánto tiempo toma aprobar una solicitud de crédito?
              </h3>
              <div className="faq-section__answer">
                <p>
                  El tiempo de aprobación depende del tipo de crédito. Para créditos de libre inversión y educativos, el proceso toma aproximadamente 3 días hábiles. Para créditos de vivienda o montos elevados, el proceso puede tomar hasta 15 días hábiles.
                </p>
              </div>
            </div>
            
            <div className="faq-section__item">
              <h3 className="faq-section__question">
                <i className="fas fa-question-circle"></i>
                ¿Cómo puedo actualizar mis datos personales?
              </h3>
              <div className="faq-section__answer">
                <p>
                  Puedes actualizar tus datos personales de tres formas: visitando nuestras oficinas, descargando y enviando el formulario de actualización de datos disponible en la sección de documentos, o contactándonos al correo info@coonadoc.co.
                </p>
              </div>
            </div>
            
            <div className="faq-section__item">
              <h3 className="faq-section__question">
                <i className="fas fa-question-circle"></i>
                ¿Qué beneficios tienen los afiliados de COONADOC?
              </h3>
              <div className="faq-section__answer">
                <p>
                  Los afiliados disfrutan de múltiples beneficios como créditos con tasas preferenciales, seguros de vida y salud, auxilios solidarios, programas de educación continua, convenios con aliados estratégicos y actividades recreativas para toda la familia.
                </p>
              </div>
            </div>
          </div>
          
          <div className="faq-section__more">
            <a href="/preguntas-frecuentes" className="btn btn--secondary">Ver todas las preguntas</a>
          </div>
        </div>
      </section>

      {/* Oficinas */}
      <section className="section offices-section">
        <div className="section__container">
          <h2 className="section__title">Nuestras Oficinas</h2>
          <p className="offices-section__intro">
            Visítanos en cualquiera de nuestras sedes:
          </p>
          
          <div className="offices-section__grid">
            <div className="office-card">
              <div className="office-card__content">
                <h3 className="office-card__title">Sede Principal</h3>
                <p className="office-card__address">
                  <i className="fas fa-map-marker-alt"></i> Calle Principal #123, Bogotá
                </p>
                <p className="office-card__phone">
                  <i className="fas fa-phone"></i> (+57) 1 234 5678
                </p>
                <p className="office-card__hours">
                  <i className="fas fa-clock"></i> Lun-Vie: 8AM-5PM / Sáb: 9AM-12PM
                </p>
              </div>
              <div className="office-card__image">
                <img src="/images/office-1.jpg" alt="Sede Principal" />
              </div>
            </div>
            
            <div className="office-card">
              <div className="office-card__content">
                <h3 className="office-card__title">Sede Norte</h3>
                <p className="office-card__address">
                  <i className="fas fa-map-marker-alt"></i> Av. Norte #456, Bogotá
                </p>
                <p className="office-card__phone">
                  <i className="fas fa-phone"></i> (+57) 1 987 6543
                </p>
                <p className="office-card__hours">
                  <i className="fas fa-clock"></i> Lun-Vie: 9AM-6PM / Sáb: 10AM-1PM
                </p>
              </div>
              <div className="office-card__image">
                <img src="/images/office-2.jpg" alt="Sede Norte" />
              </div>
            </div>
            
            <div className="office-card">
              <div className="office-card__content">
                <h3 className="office-card__title">Sede Sur</h3>
                <p className="office-card__address">
                  <i className="fas fa-map-marker-alt"></i> Calle Sur #789, Bogotá
                </p>
                <p className="office-card__phone">
                  <i className="fas fa-phone"></i> (+57) 1 567 8901
                </p>
                <p className="office-card__hours">
                  <i className="fas fa-clock"></i> Lun-Vie: 8:30AM-5:30PM / Sáb: 9AM-12PM
                </p>
              </div>
              <div className="office-card__image">
                <img src="/images/office-3.jpg" alt="Sede Sur" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;