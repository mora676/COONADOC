import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';  
const News = () => {
  // Estado para categorías activas
  const [activeCategory, setActiveCategory] = useState('todas');
  
  // Categorías de noticias
  const categories = [
    { id: 'todas', name: 'Todas' },
    { id: 'servicios', name: 'Servicios' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'educacion', name: 'Educación' },
    { id: 'exitos', name: 'Historias de Éxito' }
  ];
  
  // Array de noticias de ejemplo
  const newsItems = [
    {
      id: 1,
      title: 'Nueva línea de crédito educativo',
      excerpt: 'Lanzamos una nueva línea de crédito para apoyar la educación superior de los hijos de nuestros afiliados con tasas preferenciales y plazos flexibles.',
      content: 'Lanzamos una nueva línea de crédito para apoyar la educación superior de los hijos de nuestros afiliados con tasas preferenciales y plazos flexibles. Esta iniciativa busca facilitar el acceso a la educación de calidad y fomentar el desarrollo profesional de las nuevas generaciones. El crédito educativo ofrece financiamiento para programas de pregrado, posgrado y educación continua en instituciones reconocidas a nivel nacional e internacional.',
      category: 'servicios',
      date: '21 Abril, 2025',
      author: 'Departamento de Servicios',
      image: '/images/news-1.jpg',
      slug: 'nueva-linea-credito'
    },
    {
      id: 2,
      title: 'Calendario de capacitaciones 2025',
      excerpt: 'Conoce nuestro calendario de capacitaciones gratuitas para el segundo trimestre del año en temas de finanzas personales, cooperativismo y desarrollo profesional.',
      content: 'Conoce nuestro calendario de capacitaciones gratuitas para el segundo trimestre del año en temas de finanzas personales, cooperativismo y desarrollo profesional. Las capacitaciones se realizarán de manera presencial y virtual, para facilitar la participación de todos nuestros afiliados. Inscríbete con anticipación para asegurar tu cupo.',
      category: 'educacion',
      date: '15 Abril, 2025',
      author: 'Departamento de Educación',
      image: '/images/Capacitaciones.avif',
      slug: 'calendario-capacitaciones'
    },
    {
      id: 3,
      title: 'Nuevo convenio con Universidad Nacional',
      excerpt: 'Firmamos un convenio con la Universidad Nacional para beneficios en programas de posgrado y educación continua para nuestros afiliados.',
      content: 'Firmamos un convenio con la Universidad Nacional para beneficios en programas de posgrado y educación continua para nuestros afiliados. Este acuerdo proporciona descuentos del 15% en matrículas y acceso preferencial a programas de alta demanda. Además, se establecerán programas de becas para los afiliados con excelencia académica.',
      category: 'servicios',
      date: '10 Abril, 2025',
      author: 'Departamento de Convenios',
      image: '/images/unal.jpg',
      slug: 'convenio-universidad'
    },
    {
      id: 4,
      title: 'Asamblea General de Asociados 2025',
      excerpt: 'Te invitamos a participar en nuestra Asamblea General de Asociados que se llevará a cabo el próximo 30 de mayo en el auditorio principal.',
      content: 'Te invitamos a participar en nuestra Asamblea General de Asociados que se llevará a cabo el próximo 30 de mayo en el auditorio principal. Durante la asamblea, se presentarán los resultados financieros del año anterior, se elegirán nuevos miembros del consejo directivo y se discutirán proyectos estratégicos para el siguiente periodo. Tu participación es fundamental para el desarrollo democrático de nuestra cooperativa.',
      category: 'eventos',
      date: '5 Abril, 2025',
      author: 'Consejo de Administración',
      image: '/images/asamblea.avif',
      slug: 'asamblea-general'
    },
    {
      id: 5,
      title: 'María Rodríguez: De profesora a empresaria exitosa',
      excerpt: 'Conoce la historia de María Rodríguez, docente que gracias a nuestro programa de emprendimiento logró establecer su propia empresa educativa.',
      content: 'Conoce la historia de María Rodríguez, docente que gracias a nuestro programa de emprendimiento logró establecer su propia empresa educativa. María, quien trabajaba como profesora de primaria, identificó la necesidad de materiales didácticos innovadores para la enseñanza de matemáticas. Con el apoyo financiero y la asesoría de COONADOC, pudo desarrollar su idea y convertirla en una empresa rentable que hoy genera empleo a otros docentes.',
      category: 'exitos',
      date: '28 Marzo, 2025',
      author: 'Departamento de Comunicaciones',
      image: '/images/maria.jpg',
      slug: 'historia-maria-rodriguez'
    },
    {
      id: 6,
      title: 'Resultados del Primer Trimestre 2025',
      excerpt: 'Presentamos los resultados financieros del primer trimestre de 2025, mostrando un crecimiento sostenido y nuevas oportunidades para nuestros afiliados.',
      content: 'Presentamos los resultados financieros del primer trimestre de 2025, mostrando un crecimiento sostenido y nuevas oportunidades para nuestros afiliados. Los indicadores financieros muestran un crecimiento del 12% en comparación con el mismo período del año anterior, lo que nos permite ampliar nuestra oferta de servicios y beneficios. Este crecimiento es resultado de la confianza de nuestros afiliados y de una gestión financiera responsable.',
      category: 'servicios',
      date: '22 Marzo, 2025',
      author: 'Departamento Financiero',
      image: '/images/news-6.png',
      slug: 'resultados-primer-trimestre'
    },
    {
      id: 7,
      title: 'Jornada de Salud para Afiliados',
      excerpt: 'Realizaremos una jornada de salud gratuita para todos nuestros afiliados y sus familias los días 12 y 13 de mayo en nuestra sede principal.',
      content: 'Realizaremos una jornada de salud gratuita para todos nuestros afiliados y sus familias los días 12 y 13 de mayo en nuestra sede principal. La jornada incluirá consultas médicas generales, valoraciones odontológicas, exámenes de optometría y charlas sobre prevención de enfermedades. Esta actividad se realiza en convenio con nuestros aliados del sector salud para promover el bienestar integral de nuestros afiliados.',
      category: 'eventos',
      date: '15 Marzo, 2025',
      author: 'Departamento de Bienestar',
      image: '/images/news-7.png',
      slug: 'jornada-salud'
    },
    {
      id: 8,
      title: 'Carlos Gómez: Del aula de clases a la construcción de su vivienda propia',
      excerpt: 'La historia de Carlos Gómez, docente de secundaria que logró construir su vivienda propia gracias al crédito de vivienda de COONADOC.',
      content: 'La historia de Carlos Gómez, docente de secundaria que logró construir su vivienda propia gracias al crédito de vivienda de COONADOC. Después de 15 años como docente, Carlos había perdido la esperanza de tener casa propia debido a los altos costos y las dificultades para acceder a créditos bancarios tradicionales. Sin embargo, al conocer las condiciones favorables de los créditos de vivienda de COONADOC, pudo hacer realidad su sueño de construir una casa para su familia.',
      category: 'exitos',
      date: '10 Marzo, 2025',
      author: 'Departamento de Comunicaciones',
      image: '/images/news-8.png',
      slug: 'historia-carlos-gomez'
    },
    {
      id: 9,
      title: 'Bienestar Coonadoc',
      excerpt: 'Créditos para viajes nacionales e internacionales promovidos por COONADOC de forma directa o través de sus convenios.',
      content: 'OONADOC, busca el mejoramiento de la calidad de vida del asociado, sus familias y personal administrativo, a través de las relaciones con consigo mismo, con el otro y el medio ambiente ,logrando la construcción de un buen vivir con relaciones equitativas y solidarias.',
      category: 'educacion',
      date: '1 Marzo, 2025',
      author: 'Departamento de Comunicaciones',
      image: '/images/news-9.jpg',
      slug: 'bienestar-coonadoc'
    }
  ];
  
  // Filtrar noticias por categoría
  const filteredNews = activeCategory === 'todas' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);
  
  return (
    <div className="news-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner__container">
          <h1 className="page-banner__title">Noticias y Blog</h1>
          <p className="page-banner__text">
            Mantente informado sobre las últimas novedades, eventos y testimonios de nuestra cooperativa.
          </p>
        </div>
      </section>

      {/* Noticias */}
      <section className="section news-section">
        <div className="section__container">
          <div className="news-section__filters">
            <p className="news-section__filter-label">Filtrar por categoría:</p>
            <div className="news-section__categories">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`news-section__category ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="news-section__grid">
            {filteredNews.length > 0 ? (
              filteredNews.map(item => (
                <div className="news-card" key={item.id}>
                  <div className="news-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-card__content">
                    <span className="news-card__date">{item.date}</span>
                    <span className="news-card__category">{categories.find(cat => cat.id === item.category)?.name}</span>
                    <h3 className="news-card__title">{item.title}</h3>
                    <p className="news-card__excerpt">{item.excerpt}</p>
                    <Link to={`/Home/noticias/${item.slug}`} className="news-card__link">Leer más</Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="news-section__empty">
                <i className="fas fa-newspaper"></i>
                <p>No se encontraron noticias en esta categoría.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="section events-section">
        <div className="section__container">
          <h2 className="section__title">Próximos Eventos</h2>
          
          <div className="events-section__list">
            <div className="event-card">
              <div className="event-card__date">
                <span className="event-card__day">30</span>
                <span className="event-card__month">MAY</span>
              </div>
              <div className="event-card__content">
                <h3 className="event-card__title">Asamblea General de Asociados</h3>
                <p className="event-card__desc">
                  Participa en la toma de decisiones importantes para el futuro de nuestra cooperativa.
                </p>
                <div className="event-card__details">
                  <span className="event-card__time">
                    <i className="fas fa-clock"></i> 9:00 AM - 1:00 PM
                  </span>
                  <span className="event-card__location">
                    <i className="fas fa-map-marker-alt"></i> Auditorio Principal
                  </span>
                </div>
                <div  className="btn btn--outline btn--sm">Más información</div>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-card__date">
                <span className="event-card__day">12</span>
                <span className="event-card__month">MAY</span>
              </div>
              <div className="event-card__content">
                <h3 className="event-card__title">Jornada de Salud para Afiliados</h3>
                <p className="event-card__desc">
                  Consultas médicas gratuitas, valoraciones odontológicas y exámenes de optometría.
                </p>
                <div className="event-card__details">
                  <span className="event-card__time">
                    <i className="fas fa-clock"></i> 8:00 AM - 5:00 PM
                  </span>
                  <span className="event-card__location">
                    <i className="fas fa-map-marker-alt"></i> Sede Principal
                  </span>
                </div>
                <div className="btn btn--outline btn--sm">Más información</div>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-card__date">
                <span className="event-card__day">20</span>
                <span className="event-card__month">JUN</span>
              </div>
              <div className="event-card__content">
                <h3 className="event-card__title">Taller de Finanzas Personales</h3>
                <p className="event-card__desc">
                  Aprende estrategias efectivas para administrar tus finanzas y alcanzar metas económicas.
                </p>
                <div className="event-card__details">
                  <span className="event-card__time">
                    <i className="fas fa-clock"></i> 2:00 PM - 6:00 PM
                  </span>
                  <span className="event-card__location">
                    <i className="fas fa-map-marker-alt"></i> Sala de Capacitaciones
                  </span>
                </div>
                <div className="btn btn--outline btn--sm">Más información</div>
              </div>
            </div>
          </div>
          
          <div className="events-section__more">
            <div  className="btn btn--primary">Ver todos los eventos</div>
          </div>
        </div>
      </section>

      {/* Historias de Éxito */}
      <section className="section success-stories">
        <div className="section__container">
          <h2 className="section__title">Historias de Éxito</h2>
          <p className="success-stories__intro">
            Conoce cómo nuestros afiliados han alcanzado sus metas personales y profesionales con el apoyo de COONADOC.
          </p>
          
          <div className="success-stories__grid">
            <div className="success-story">
              <div className="success-story__image">
                <img src="/images/maria.jpg" alt="María Rodríguez" />
              </div>
              <div className="success-story__content">
                <h3 className="success-story__title">María Rodríguez: De profesora a empresaria exitosa</h3>
                <p className="success-story__excerpt">
                  María, quien trabajaba como profesora de primaria, identificó la necesidad de materiales didácticos innovadores para la enseñanza de matemáticas.
                </p>
                <div className="success-story__link">Leer su historia</div>
              </div>
            </div>
            
            <div className="success-story">
              <div className="success-story__image">
                <img src="/images/news-8.png" alt="Carlos Gómez" />
              </div>
              <div className="success-story__content">
                <h3 className="success-story__title">Carlos Gómez: Del aula de clases a la vivienda propia</h3>
                <p className="success-story__excerpt">
                  Después de 15 años como docente, Carlos había perdido la esperanza de tener casa propia debido a los altos costos y dificultades para acceder a créditos bancarios.
                </p>
                <div className="success-story__link">Leer su historia</div>
              </div>
            </div>
          </div>
          
          <div className="success-stories__more">
            <div  className="btn btn--secondary">Ver más historias</div>
          </div>
        </div>
      </section>

      {/* Boletín */}
      <section className="newsletter">
        <div className="newsletter__container">
          <div className="newsletter__content">
            <h2 className="newsletter__title">Suscríbete a Nuestro Boletín</h2>
            <p className="newsletter__text">
              Recibe mensualmente las últimas noticias, eventos y oportunidades directamente en tu correo electrónico.
            </p>
          </div>
          
          <form className="newsletter__form">
            <div className="newsletter__input-group">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="newsletter__input"
                required
              />
              <button type="submit" className="newsletter__button">
                Suscribirse
              </button>
            </div>
            <label className="newsletter__privacy">
              <input type="checkbox" required />
              <span>Acepto recibir comunicaciones y la política de privacidad</span>
            </label>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;