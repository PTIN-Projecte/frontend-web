import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; 
import "../styles/Afegir_Usuari.css";

const Afegir_Usuari = () => {
  const navigate = useNavigate();

  // Estado inicial vacío para un nuevo usuario
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    usuario: "",
    rol: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el usuario en la base de datos
    console.log("Nuevo usuario:", formData);
    navigate("/consulta-usuari"); 
  };

  return (
    <div className="page-wrapper">
      <Navbar /> 

      <div className="main-layout">
        <aside className="side-panel"></aside>

        <main className="perfil-container">
          {/* Cabecera con sistema Grid para alineación perfecta */}
          <div className="perfil-header-section">
            <div className="square-accent-container">
              <div className="vertical-blue-square"></div>
            </div>

            <h1 className="perfil-title">Afegir usuari</h1>
            
            <div className="config-header">
              <span className="config-text">Usuaris</span>
            </div>
          </div>

          <form className="perfil-content" onSubmit={handleAdd}>
            <div className="lista-inputs">
              <div className="input-group">
                <label>Nombre completo:</label>
                <input type="text" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} placeholder="Escriu el nom..." />
              </div>
              <div className="input-group">
                <label>Usuario:</label>
                <input type="text" name="usuario" value={formData.usuario} onChange={handleChange} placeholder="@usuari" />
              </div>
              <div className="input-group">
                <label>Rol:</label>
                <input type="text" name="rol" value={formData.rol} onChange={handleChange} placeholder="Ej: Comercial" />
              </div>
              <div className="input-group">
                <label>E-mail:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="correu@ejemplo.com" />
              </div>
              <div className="input-group">
                <label>Contrasenya:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="********" />
              </div>
              <div className="input-group">
                <label>Confirmar contrasenya:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="********" />
              </div>
            </div>

            <div className="perfil-actions"> 
              <button type="button" className="perfil-btn" onClick={() => navigate("/consulta-usuari")}>
                Cancel·lar
              </button>
              <button type="submit" className="perfil-btn add-btn">
                Afegir
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Afegir_Usuari;