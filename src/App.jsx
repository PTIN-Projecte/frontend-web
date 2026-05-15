import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditarPerfil from './pages/EditarPerfil'

function App() {

  return (
    <>
      
    <BrowserRouter>
      <Routes>
        <Route path="/editar-perfil" element={<EditarPerfil />} />
      </Routes>
    </BrowserRouter>
</>
  )
}

export default App