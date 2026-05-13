import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EventoInfo from './components/EventoInfo';
import DietasAlergias from './components/DietasAlergias';
import SelectorRol from './components/SelectorRol';

function App() {
  const [userRole, setUserRole]=useState(null);
  return (
    <BrowserRouter>
      {!userRole && <SelectorRol onSelect={setUserRole} />}
      <Routes>
        <Route path="/" element={<Navigate to="/evento/1" replace />} />

        <Route path="/evento/:id" element={<EventoInfo userRole={userRole} setUserRole={setUserRole} />} />
        <Route path="/evento/:id/dietas" element={<DietasAlergias userRole={userRole} />} />
        <Route path="*" element={<Navigate to="/evento/1" replace />} />

        {/*<Route path="/evento/:id" element={<EventoInfo />} />
        <Route path="/evento/:id/dietas" element={<DietasAlergias />} />
        <Route path="*" element={<Navigate to="/evento/1" replace />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;