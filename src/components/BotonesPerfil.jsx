import React, { useState } from "react";

const BotonesPerfil = () => {
    // Estado para controlar si el modal se ve o no
    const [mostrarModal, setMostrarModal] = useState(false);

    // Función que se ejecuta si confirman la eliminación
    const handleConfirmarEliminar = () => {
        // Aquí en el futuro conectarás con tu base de datos para borrarlo
        console.log("Perfil eliminado correctamente");
        setMostrarModal(false); // Cerramos el modal
    };

    return (
        <>
            <div className='perfil-actions'> 
                <button className='perfil-btn'>Editar perfil</button>
                {/* Al hacer clic, cambiamos el estado a true para mostrar el modal */}
                <button className='perfil-btn' onClick={() => setMostrarModal(true)}>
                    Eliminar perfil
                </button>
            </div>

            {/* --- VENTANA EMERGENTE (MODAL) --- */}
            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>¿Eliminar perfil?</h3>
                        <p>Esta acción no se puede deshacer. ¿Estás seguro de que deseas continuar?</p>
                        
                        <div className="modal-buttons">
                            {/* Botón cancelar: cierra el modal poniéndolo en false */}
                            <button className="modal-btn cancel" onClick={() => setMostrarModal(false)}>
                                Cancelar
                            </button>
                            {/* Botón eliminar: ejecuta la función de arriba */}
                            <button className="modal-btn delete" onClick={handleConfirmarEliminar}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BotonesPerfil;