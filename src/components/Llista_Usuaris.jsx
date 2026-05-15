import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Llista_Usuaris.css";

const LupaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const Llista_Usuaris = () => {
  const navigate = useNavigate();
  const [cerca, setCerca] = useState("");

  const usuaris = [
    { id: 1, nom: "usuario176768" },
    { id: 2, nom: "usuario18765" },
    { id: 3, nom: "usuario154356" },
    { id: 4, nom: "usuario1543" },
    { id: 5, nom: "usuario1876987" },
    { id: 6, nom: "usuario13248796" },
    { id: 7, nom: "usuario197680" },
    { id: 8, nom: "usuario12345" },
    { id: 9, nom: "usuario109789" },
    { id: 10, nom: "usuario123409" },
  ];

  const usuarisFiltrats = usuaris.filter((u) =>
    u.nom.toLowerCase().includes(cerca.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="main-layout">
        {/* Panell esquerre buit */}
        <aside className="side-panel-left" />

        <main className="perfil-container">
          {/* Títol de la pàgina */}
          <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "2rem" }}>
            Usuarios
          </h1>

          {/* Capçalera amb etiqueta, cerca i botó */}
          <div className="llista-header">
            <div className="llista-header-left">
              <span className="llista-title-label">Lista usuarios:</span>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Buscar un usuario..."
                  value={cerca}
                  onChange={(e) => setCerca(e.target.value)}
                />
                <SearchIcon />
              </div>
            </div>

            <button className="add-user-btn" onClick={() => navigate("/afegir-usuari")}>
              Añadir usuario
            </button>
          </div>

          {/* Grid de cards */}
          <div className="usuaris-grid">
            {usuarisFiltrats.map((u) => (
              <div
                key={u.id}
                className="usuari-card"
                onClick={() => navigate(`/modificar-usuari`)}
              >
                <span className="usuari-card-nom">{u.nom}</span>
                <button
                  className="card-lupa-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/modificar-usuari`);
                  }}
                >
                  <LupaIcon />
                </button>
              </div>
            ))}
          </div>
        </main>

        {/* Panell dret amb nav */}
        <aside className="side-panel-right">
          <span className="side-nav-item">Usuarios</span>
        </aside>
      </div>
    </div>
  );
};

export default Llista_Usuaris;
