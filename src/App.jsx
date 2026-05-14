import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ESTA LÍNEA ES CLAVE
import NuevoEvento from './page/NuevoEvento';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Esta ruta hace que al entrar en la web se vea directamente tu parte */}
        <Route path="/" element={<NuevoEvento />} />
        
        {/* Si quieres que tenga su propia URL específica */}
        <Route path="/nuevo-evento" element={<NuevoEvento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;