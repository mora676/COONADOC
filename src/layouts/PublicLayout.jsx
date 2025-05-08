import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function PublicLayout({ showNavbar = false }) {
  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <main className="main-content">
        <Outlet /> {/* Esto reemplaza a children para rutas anidadas */}
      </main>
    </div>
  );
}

export default PublicLayout;
