// src/App.jsx
import React from 'react';
import './App.css';
import ListaEventos from './components/ListaEventos';

function App() {
  return (
    <div className="app-wrapper">
      
      {/* Navbar Superior */}
      <header className="navbar-top">
        <div className="nav-langs">CA | EN | ES</div>
        <div className="nav-logo">CAL BLAY</div>
        <div className="nav-menu">TO GIFT | CALENDAR | CALÇOTADES | CONTACT | ☰</div>
      </header>

      {/* Título de la Página y Sección de Bienvenida */}
      <section className="seccion-bienvenida">
        <h1 className="main-page-title">LISTA DE EVENTOS CAL BLAY</h1>
        <p className="selling-text">Descubre experiencias gastronómicas únicas y eventos diseñados para ser inolvidables.</p>
        <hr className="separador-titulo" />
      </section>

      {/* Contenedor Principal */}
      <ListaEventos />
      
    </div>
  );
}

export default App;