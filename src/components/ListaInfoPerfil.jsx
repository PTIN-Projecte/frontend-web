import React from "react";

const ListaInfoPerfil = ({usuario}) => {
    return (
        <div className= "perfil-info">
            <div className="info-item">
                <strong>Nombre Completo:</strong> {usuario.nombreCompleto}
            </div>
            <div className="info-item">
                <strong>Usuario:</strong> {usuario.usuario}
            </div>
            <div className="info-item">
                <strong>Rol:</strong> {usuario.rol}
            </div>
            <div className="info-item">
                <strong>Email:</strong> {usuario.email}
            </div>
        </div>
    );
}

export default ListaInfoPerfil;