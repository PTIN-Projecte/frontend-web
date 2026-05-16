import React from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaAñadirMenu from './pruebas/page/anyadir_menu.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Tu pantalla de añadir menú es la principal por defecto */}
          <Route path="/" element={<PaginaAñadirMenu />} /> 
          
          {/* Dejamos las demás rutas declaradas abajo de forma limpia por si en el futuro las necesitas */}
          {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/peticiones" element={<ListaPeticiones />} />
          */}
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App 

// Cambio final para forzar la subida