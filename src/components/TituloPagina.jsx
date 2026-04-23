import React from "react";

const TituloPagina = ({label}) => {
  return (
    <div className="titulo-pagina">
        <strong>{label}:</strong>
    </div>
  );
}

export default TituloPagina;