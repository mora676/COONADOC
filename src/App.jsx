import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Páginas
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Affiliation from './pages/Affiliation';
import Documents from './pages/Documents';
import Login from './pages/Login';
import News from './pages/News';
import Contact from './pages/Contact';

// Componentes
import ProtectedRoute from './components/ProtectedRoute';
import Loader from './components/Loader';
import DashboardSubHome from './components/Dashboard/Sub-componets/Sub_home';
import Seeclient from './components/Dashboard/Sub-componets/see_client'

// Diseños
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LoginLayout from './layouts/LoginLayout';

// Autenticación
import { checkAuth, logout } from './auth';

// Componente para manejar rutas y detectar cambios
const AppRoutes = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();

  useEffect(() => {
    // Si el usuario está autenticado y sale del dashboard, se hace logout
    if (isAuthenticated && !location.pathname.startsWith('/dashboard')) {
      logout();
      setIsAuthenticated(false);
    }
  }, [location.pathname]);

  return (
    <Routes>
      {/* Ruta principal redirige a Home */}
      <Route path="/" element={<Navigate to="/Home" />} />

      {/* Ruta Home CON navbar */}
      <Route path="/Home" element={<PublicLayout showNavbar={true} />}>
        <Route index element={<Home />} />
        <Route path="quienes-somos" element={<AboutUs />} />
        <Route path="afiliacion-servicios" element={<Affiliation />} />
        <Route path="documentacion" element={<Documents />} />
        <Route path="noticias" element={<News />} />
        <Route path="contacto" element={<Contact />} />
      </Route>

      {/* Login SIN navbar */}
      <Route
        path="/Login"
        element={
          <LoginLayout>
            <Login setAuth={setIsAuthenticated} />
          </LoginLayout>
        }
      />

      {/* Dashboard protegido */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Ruta por defecto dentro del dashboard */}
        <Route index element={<DashboardSubHome />} />  {/* Este es el Home del dashboard */}

        {/* Ruta para la subpágina dentro del dashboard */}
        <Route path="subhome" element={<DashboardSubHome />} />
        <Route path="seeclient" element={<Seeclient />} />
         
      </Route>

    </Routes>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingApp, setLoadingApp] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(checkAuth());
      setLoadingApp(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loadingApp) return <Loader />;

  return (
    <Router>
      <div className="app">
        <AppRoutes
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </div>
    </Router>
  );
}

export default App;

