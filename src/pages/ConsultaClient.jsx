import React from "react";
import TituloPagina from "../components/TituloPagina";
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
    <div className="perfil-container">

      <div className="perfil-header">
        <h1 className="perfil-title">Perfil</h1>
        <span className="username-label">{usuario.usuario}</span>
      </div>

      <div className="perfil-info">
        <ListaInfoPerfil usuario={usuario} />
        <BotonesPerfil />
      </div>

    </div>

  );
}

export default ConsultaClient;