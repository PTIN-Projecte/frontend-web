import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EventoInfo from './components/EventoInfo';
import DietasAlergias from './components/DietasAlergias';
import SelectorRol from './components/SelectorRol';

function App() {
  const [userRole, setUserRole]=useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);

  //Rol por defecto
  const displayRole = userRole || 'produccion';

  const handleChangeRole = () => {
    setShowRoleModal(true);
  };

const handleRoleSelect = (role) => {
    setUserRole(role);
    setShowRoleModal(false);
  };

  return (
    <BrowserRouter>
    <div className="app-layout">
      {(showRoleModal || !userRole) && (
        <SelectorRol onSelect={handleRoleSelect} />
      )}

        <Routes>
          <Route path="/" element={<Navigate to="/evento/1" replace />} />

          <Route path="/evento/:id" element={<EventoInfo userRole={displayRole} setUserRole={setUserRole} onChangeRole={handleChangeRole} />} />
          <Route path="/evento/:id/dietas" element={<DietasAlergias userRole={displayRole} />} />
          <Route path="*" element={<Navigate to="/evento/1" replace />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;