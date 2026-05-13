import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EventoInfo from './components/EventoInfo';
import DietasAlergias from './components/DietasAlergias';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/evento/1" replace />} />
        <Route path="/evento/:id" element={<EventoInfo />} />
        <Route path="/evento/:id/dietas" element={<DietasAlergias />} />
        <Route path="*" element={<Navigate to="/evento/1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;