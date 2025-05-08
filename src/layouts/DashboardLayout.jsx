// DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Options from '../components/Dashboard/Options';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="box-1-dash"></div>
      <div className="box-2-dash">
        <div className="centered-component">
          <div className='component-children'>
            <Outlet /> {/* Aquí se mostrará la vista activa */}
          </div>
          <div className='component-divition'></div>
          <div className='component-options'>
            <Options />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;