import React from "react";
import Navbar from "../components/Navbar"; // <-- IMPORTAMOS EL NAVBAR AQUÍ
import BotonesPerfil from "../components/BotonesPerfil";
import ListaInfoPerfil from "../components/ListaInfoPerfil";
import "../styles/ConsultaClient.css";

const ConsultaClient = () => {
  const usuario = {
    nombreCompleto: "Usuari Numero Uno",
    usuario: "nombre_usuari",
    rol: "Comercial",
    email: "ejemplomail@gmail.com",
  };

  return (
    <div className="page-container">
      <Navbar /> 

      {/* Contenido principal del perfil */}
      <main className="perfil-container">
        <div className="perfil-header-section">
          <div className="grid-spacer"></div>
          <h1 className="perfil-title">Perfil</h1>
          <div className="config-header">
            <span className="config-text">Configuració</span>
          </div>
        </div>

        <div className="perfil-content">
          <ListaInfoPerfil usuario={usuario} />
          <BotonesPerfil />
        </div>
      </main>
    </div>
  );
}

export default ConsultaClient;