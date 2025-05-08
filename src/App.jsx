import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Paginas
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Affiliation from './pages/Affiliation';
import Documents from './pages/Documents';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Contact from './pages/Contact';

// Componentes
import ProtectedRoute from './components/ProtectedRoute';
import Loader from './components/Loader';

// Diseños
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LoginLayout from './layouts/LoginLayout';

// Estados
import { checkAuth } from './auth';
import { useState, useEffect } from 'react';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingApp, setLoadingApp] = useState(true); // Estado para controlar el loader

  useEffect(() => {
    // Simula la carga de la app (puedes reemplazarlo con un fetch real para comprobar autenticación)
    const timer = setTimeout(() => {
      setIsAuthenticated(checkAuth());  // Verifica el estado de autenticación
      setLoadingApp(false);  // Después de 2 segundos, termina la carga
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el temporizador cuando se desmonte el componente
  }, []);

  // Muestra el loader mientras `loadingApp` es true
  if (loadingApp) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Ruta principal redirige a Home */}
          <Route path="/" element={<Navigate to="/Home" />} />

          {/* Ruta Home CON navbar */}
          <Route path="/Home" element={<PublicLayout showNavbar={true} />}>
            <Route index element={<Home />} /> {/* /COONADOC */}
            <Route path="quienes-somos" element={<AboutUs />} />
            <Route path="afiliacion-servicios" element={<Affiliation />} /> 
            <Route path="documentacion" element={<Documents />} /> 
            <Route path="noticias" element={<News />} /> 
            <Route path="contacto" element={ <Contact />} /> 
            
          </Route>

          {/* Login SIN navbar */}
          <Route path="/Login" element={
            <LoginLayout>
              <Login setAuth={setIsAuthenticated} />
            </LoginLayout>
          } />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
