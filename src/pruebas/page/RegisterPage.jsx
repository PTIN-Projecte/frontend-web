import React, { useState } from 'react';
import '../styles/login.css';
import { useCreateUser } from '../hooks/userCreateUser'; 
import userIcon from '../assets/user.png';
import passwordIcon from '../assets/password.png';
import ojoAbiertoIcon from '../assets/ojo-abierto.png';
import ojoCerradoIcon from '../assets/ojo-cerrado.png';

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { saveUser, loading, error, success } = useCreateUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = {
      userName: username,
      password: password
    };

    try {
      await saveUser(newUser);
      if (!error) {
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      console.error("Error al crear usuario:", err);
    }
  };

  return (
    <main className="fondo-login">
      <div className="cuadrado-login">
        <h2>Crear Cuenta</h2>
        
        {/* Feedback visual para el usuario */}
        {error && <div className="error-banner">{error}</div>}
        {success && <div className="success-banner">¡Usuario creado con éxito!</div>}

        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Usuario</label>
            <div className="linea-input">
              <div className="cuadrado-input">
                <img src={userIcon} alt="user icon" />
              </div>
              <input
                value={username}
                placeholder='nombre de usuario'
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
              />
            </div> 
          </div>
          
          <div className="campo">
            <label className="label2">Contraseña</label>
            <div className="linea-input">
              <div className="cuadrado-input">
                <img src={passwordIcon} alt="password icon" />
              </div>
              <input
                value={password}
                placeholder='contraseña'
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
              />
              <img 
                className="ojo" 
                src={showPassword ? ojoCerradoIcon : ojoAbiertoIcon} 
                onClick={() => setShowPassword(!showPassword)}
                alt="cambiar visibilidad de contraseña"
              />
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Registrando..." : "Registrar"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default RegisterPage;