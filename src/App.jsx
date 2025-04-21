import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importar páginas
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Affiliation from './pages/Affiliation';
import Documents from './pages/Documents';
import News from './pages/News';
import Contact from './pages/Contact';

// Importar estilos
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<AboutUs />} />
            <Route path="/afiliacion-servicios" element={<Affiliation />} />
            <Route path="/documentacion" element={<Documents />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;