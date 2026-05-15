import React from "react";

const ListaPerfilEditar = ({ formData, handleChange }) => {
  return (
    <div className="lista-inputs">
      <div className="input-group">
        <label>Nombre completo:</label>
        <input
          type="text"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Usuario:</label>
        <input
          type="text"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Rol:</label>
        <input
          type="text"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Confirmar contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ListaPerfilEditar;