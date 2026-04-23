import React, { useState } from 'react';
import '../styles/login.css';
import userIcon from '../assets/user.png';
import passwordIcon from '../assets/password.png';
import ojoAbiertoIcon from '../assets/ojo-abierto.png';
import ojoCerradoIcon from '../assets/ojo-cerrado.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="fondo-login">
        <div className="cuadrado-login">
        <h2>Iniciar Sesión</h2>
        <form>

          <div className="campo">
            <label>Usuario</label>
            <div className="linea-input">
              <div className="cuadrado-input">
                <img src={userIcon} alt="user icon" />
              </div>
              <input
                value={email}
                placeholder='usuario'
                onChange={(e) => setEmail(e.target.value)}
                type="text">
              </input>
            </div>   
          </div>
          
          <div className="campo">
            <label className="label2">Contraseña</label>
            <div className="linea-input">
              <div className="cuadrado-input">
                <img src={passwordIcon} alt="user icon2" />
              </div>
              <input
                value={password}
                placeholder='contraseña'
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                >
              </input>
              <img className ="ojo" src={showPassword ? ojoCerradoIcon : ojoAbiertoIcon} 
                onClick={() => setShowPassword(!showPassword)}
                alt = "cambiar visibilidad de contraseña"
              />
            </div>
          </div>
          <button type="submit">Entrar</button>
        </form>

        </div>
    </main>
  );
}
export default Login;
