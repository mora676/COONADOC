import React, { useState } from 'react';

const Documents = () => {
  // Estado para filtrar documentos por categoría
  const [activeCategory, setActiveCategory] = useState('todos');
  
  // Categorías de documentos
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'afiliacion', name: 'Afiliación' },
    { id: 'credito', name: 'Créditos' },
    { id: 'administrativos', name: 'Administrativos' },
    { id: 'beneficios', name: 'Beneficios' }
  ];
  
  // Lista de documentos
  const documents = [
    {
      id: 1,
      title: 'Formulario de Afiliación',
      description: 'Formulario requerido para iniciar el proceso de afiliación a la cooperativa.',
      category: 'afiliacion',
      format: 'PDF',
      size: '120 KB',
      updatedAt: '15/04/2025',
      downloadUrl: '/documents/formulario-afiliacion.pdf'
    },
    {
      id: 2,
      title: 'Solicitud de Crédito',
      description: 'Formulario para solicitar cualquier línea de crédito ofrecida por COONADOC.',
      category: 'credito',
      format: 'PDF',
      size: '150 KB',
      updatedAt: '10/04/2025',
      downloadUrl: '/documents/solicitud-credito.pdf'
    },
    {
      id: 3,
      title: 'Autorización de Descuento por Nómina',
      description: 'Formato para autorizar descuentos por nómina para aportes o pagos de créditos.',
      category: 'afiliacion',
      format: 'PDF',
      size: '85 KB',
      updatedAt: '20/03/2025',
      downloadUrl: '/documents/autorizacion-descuento.pdf'
    },
    {
      id: 4,
      title: 'Reglamento de Crédito',
      description: 'Documento que establece las políticas y condiciones para acceder a los créditos.',
      category: 'credito',
      format: 'PDF',
      size: '320 KB',
      updatedAt: '05/03/2025',
      downloadUrl: '/documents/reglamento-credito.pdf'
    },
    {
      id: 5,
      title: 'Actualización de Datos',
      description: 'Formato para mantener actualizada la información personal y de contacto.',
      category: 'administrativos',
      format: 'PDF',
      size: '95 KB',
      updatedAt: '18/04/2025',
      downloadUrl: '/documents/actualizacion-datos.pdf'
    },
    {
      id: 6,
      title: 'Solicitud de Retiro',
      description: 'Formato para solicitar el retiro voluntario de la cooperativa.',
      category: 'administrativos',
      format: 'PDF',
      size: '110 KB',
      updatedAt: '12/02/2025',
      downloadUrl: '/documents/solicitud-retiro.pdf'
    },
    {
      id: 7,
      title: 'Formulario de Beneficiarios',
      description: 'Documento para designar a los beneficiarios de los aportes y seguros.',
      category: 'beneficios',
      format: 'PDF',
      size: '105 KB',
      updatedAt: '25/03/2025',
      downloadUrl: '/documents/formulario-beneficiarios.pdf'
    },
    {
      id: 8,
      title: 'Solicitud de Auxilios',
      description: 'Formato para solicitar auxilios de solidaridad en casos de calamidad.',
      category: 'beneficios',
      format: 'PDF',
      size: '130 KB',
      updatedAt: '08/04/2025',
      downloadUrl: '/documents/solicitud-auxilios.pdf'
    },
    {
      id: 9,
      title: 'Solicitud de Crédito Educativo',
      description: 'Formulario específico para solicitar crédito educativo.',
      category: 'credito',
      format: 'PDF',
      size: '145 KB',
      updatedAt: '30/03/2025',
      downloadUrl: '/documents/solicitud-credito-educativo.pdf'
    },
    {
      id: 10,
      title: 'Estatutos COONADOC',
      description: 'Documento fundamental que establece las reglas básicas de la cooperativa.',
      category: 'administrativos',
      format: 'PDF',
      size: '450 KB',
      updatedAt: '15/01/2025',
      downloadUrl: '/documents/estatutos-coonadoc.pdf'
    },
    {
      id: 11,
      title: 'Reglamento Interno',
      description: 'Normas específicas que regulan la vida interna y el funcionamiento cotidiano.',
      category: 'administrativos',
      format: 'PDF',
      size: '380 KB',
      updatedAt: '20/01/2025',
      downloadUrl: '/documents/reglamento-interno.pdf'
    },
    {
      id: 12,
      title: 'Solicitud de Crédito de Vivienda',
      description: 'Formulario específico para solicitar crédito de vivienda.',
      category: 'credito',
      format: 'PDF',
      size: '155 KB',
      updatedAt: '05/04/2025',
      downloadUrl: '/documents/solicitud-credito-vivienda.pdf'
    }
  ];
  
  // Filtrar documentos según la categoría seleccionada
  const filteredDocuments = activeCategory === 'todos' 
    ? documents 
    : documents.filter(doc => doc.category === activeCategory);
  
  return (
    <div className="documents-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner__container">
          <h1 className="page-banner__title">Documentación y Formatos</h1>
          <p className="page-banner__text">
            Descarga todos los formatos y documentos necesarios para realizar trámites en COONADOC.
          </p>
        </div>
      </section>

      {/* Documentos */}
      <section className="section documents-section">
        <div className="section__container">
          <h2 className="section__title">Formatos Administrativos</h2>
          
          <div className="documents-section__filters">
            <p className="documents-section__filter-label">Filtrar por categoría:</p>
            <div className="documents-section__categories">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`documents-section__category ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="documents-section__list">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map(document => (
                <div className="documents-section__item" key={document.id}>
                  <div className="documents-section__icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="documents-section__content">
                    <h3 className="documents-section__title">{document.title}</h3>
                    <p className="documents-section__desc">{document.description}</p>
                    <div className="documents-section__meta">
                      <span className="documents-section__format">
                        <i className="fas fa-file"></i> {document.format}
                      </span>
                      <span className="documents-section__size">
                        <i className="fas fa-weight"></i> {document.size}
                      </span>
                      <span className="documents-section__date">
                        <i className="fas fa-calendar-alt"></i> Actualizado: {document.updatedAt}
                      </span>
                    </div>
                  </div>
                  <div className="documents-section__action">
                    <a 
                      href={document.downloadUrl} 
                      className="btn btn--primary btn--sm"
                      download
                    >
                      <i className="fas fa-download"></i> Descargar
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="documents-section__empty">
                <i className="fas fa-search"></i>
                <p>No se encontraron documentos en esta categoría.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Instrucciones */}
      <section className="section documents-instructions">
        <div className="section__container">
          <h2 className="section__title">Cómo Presentar los Documentos</h2>
          
          <div className="documents-instructions__steps">
            <div className="documents-instructions__step">
              <div className="documents-instructions__step-number">1</div>
              <div className="documents-instructions__step-content">
                <h3 className="documents-instructions__step-title">Descargar</h3>
                <p className="documents-instructions__step-text">
                  Descarga el formulario o documento requerido para el trámite que deseas realizar.
                </p>
              </div>
            </div>
            
            <div className="documents-instructions__step">
              <div className="documents-instructions__step-number">2</div>
              <div className="documents-instructions__step-content">
                <h3 className="documents-instructions__step-title">Completar</h3>
                <p className="documents-instructions__step-text">
                  Llena todos los campos requeridos con información clara y precisa. Puedes hacerlo digitalmente o a mano con letra legible.
                </p>
              </div>
            </div>
            
            <div className="documents-instructions__step">
              <div className="documents-instructions__step-number">3</div>
              <div className="documents-instructions__step-content">
                <h3 className="documents-instructions__step-title">Firmar</h3>
                <p className="documents-instructions__step-text">
                  Firma el documento en los espacios indicados. Recuerda que la firma debe coincidir con la de tu documento de identidad.
                </p>
              </div>
            </div>
            
            <div className="documents-instructions__step">
              <div className="documents-instructions__step-number">4</div>
              <div className="documents-instructions__step-content">
                <h3 className="documents-instructions__step-title">Adjuntar Soportes</h3>
                <p className="documents-instructions__step-text">
                  Anexa todos los documentos de soporte requeridos según el tipo de trámite (fotocopia de cédula, certificados, etc).
                </p>
              </div>
            </div>
            
            <div className="documents-instructions__step">
              <div className="documents-instructions__step-number">5</div>
              <div className="documents-instructions__step-content">
                <h3 className="documents-instructions__step-title">Entregar</h3>
                <p className="documents-instructions__step-text">
                  Presenta los documentos en nuestras oficinas o envíalos al correo electrónico documentos@coonadoc.co
                </p>
              </div>
            </div>
          </div>
          
          <div className="documents-instructions__note">
            <i className="fas fa-info-circle"></i>
            <p>
              <strong>Nota importante:</strong> Todos los documentos deben estar completos y legibles para evitar retrasos en el trámite. Si tienes dudas sobre cómo llenar algún formato, no dudes en contactarnos.
            </p>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="section documents-faq">
        <div className="section__container">
          <h2 className="section__title">Preguntas Frecuentes</h2>
          
          <div className="documents-faq__list">
            <div className="documents-faq__item">
              <h3 className="documents-faq__question">
                <i className="fas fa-question-circle"></i>
                ¿Puedo enviar los documentos por correo electrónico?
              </h3>
              <div className="documents-faq__answer">
                <p>
                  Sí, puedes enviar los documentos escaneados al correo documentos@coonadoc.co. Asegúrate de que las imágenes sean claras y legibles, preferiblemente en formato PDF.
                </p>
              </div>
            </div>
            
            <div className="documents-faq__item">
              <h3 className="documents-faq__question">
                <i className="fas fa-question-circle"></i>
                ¿Cuánto tiempo tarda el proceso de revisión de documentos?
              </h3>
              <div className="documents-faq__answer">
                <p>
                  El tiempo de revisión varía según el tipo de trámite. En general, los documentos son revisados en un plazo máximo de 5 días hábiles después de su recepción.
                </p>
              </div>
            </div>
            
            <div className="documents-faq__item">
              <h3 className="documents-faq__question">
                <i className="fas fa-question-circle"></i>
                ¿Qué hago si no puedo descargar algún documento?
              </h3>
              <div className="documents-faq__answer">
                <p>
                  Si tienes problemas para descargar algún documento, puedes solicitarlo directamente a través de nuestros canales de atención o acercarte a nuestras oficinas donde te facilitaremos una copia física.
                </p>
              </div>
            </div>
            
            <div className="documents-faq__item">
              <h3 className="documents-faq__question">
                <i className="fas fa-question-circle"></i>
                ¿Es necesario presentar documentos originales?
              </h3>
              <div className="documents-faq__answer">
                <p>
                  Para la mayoría de los trámites, aceptamos copias. Sin embargo, en algunos casos específicos como la afiliación o solicitudes de crédito de montos elevados, podríamos requerir documentos originales para verificación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">¿Necesitas ayuda con tus documentos?</h2>
          <p className="cta__text">
            Nuestro equipo está listo para asistirte en el proceso de diligenciamiento y presentación de documentos.
          </p>
          <a href="tel:+573001234567" className="btn btn--light">
            <i className="fas fa-phone"></i> Llámanos ahora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Documents;