import React from "react";

const ListaInfoPerfil = ({usuario}) => {
    return (
        <div className="lista-info">
            <div className="info-card">
                <strong>Nombre completo:</strong> {usuario.nombreCompleto}
            </div>
            <div className="info-card">
                <strong>Usuario:</strong> {usuario.usuario}
            </div>
            <div className="info-card">
                <strong>Rol:</strong> {usuario.rol}
            </div>
            <div className="info-card">
                <strong>E-mail:</strong> {usuario.email}
            </div>
        </div>
    );
}

export default ListaInfoPerfil;