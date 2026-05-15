import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import ListaPerfilEditar from "../components/ListaPerfilEditar";
import "../styles/EditarPerfil.css";

const EditarPerfil = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombreCompleto: "Usuari Numero Uno",
    usuario: "nombre_usuari",
    rol: "Comercial",
    email: "ejemplomail@gmail.com",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-wrapper">
      {/* El Navbar aquí arriba ocupa todo el ancho */}
      <Navbar /> 

      <div className="main-layout">
        <aside className="side-panel"></aside>

        <main className="perfil-container">
          <div className="perfil-header-section">
            {/* Columna 1: Cuadrado azul */}
            <div className="square-accent-container">
              <div className="vertical-blue-square"></div>
            </div>

            {/* Columna 2: Título central */}
            <h1 className="perfil-title">Editar perfil</h1>
            
            {/* Columna 3: Texto derecha */}
            <div className="config-header">
              <span className="config-text">Configuració</span>
            </div>
          </div>

          <form className="perfil-content">
            <ListaPerfilEditar formData={formData} handleChange={handleChange} />

            <div className="perfil-actions"> 
              <button type="button" className="perfil-btn" onClick={() => navigate("/consulta-usuari")}>
                Cancelar
              </button>
              <button type="submit" className="perfil-btn save-btn">
                Guardar canvis
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default EditarPerfil;