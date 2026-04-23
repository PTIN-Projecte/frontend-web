import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login.jsx'
import Home from './components/home.jsx'
import ListaPeticiones from './components/lista-peticiones.jsx'

function App() {

  return (
    <>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/peticiones" element={<ListaPeticiones />} />
      </Routes>  
    </BrowserRouter>
</>
  )
}

export default App
