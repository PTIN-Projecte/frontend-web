import React, { useState } from 'react';
import '../styles/login.css';
import userIcon from '../assets/user.png';
import passwordIcon from '../assets/password.png';
import ojoAbiertoIcon from '../assets/ojo-abierto.png';
import ojoCerradoIcon from '../assets/ojo-cerrado.png';
import alerta from '../assets/alerta.png';
import users from './usersFake.js';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const userFound = users.users.find(
    (user) =>
      user.username === username &&
      user.password === password
    );
    if (userFound){
      alert("Login correcto ✅")
      setInvalidLogin(false);
    }
    else{
      alert("Usuario o contraseña incorrectos ❌");
      setUsername("");
      setPassword("");
      setInvalidLogin(true);
    }
  };
  return (
    <main className="fondo-login">
        <div className="cuadrado-login">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="campo">
            <label>Usuario</label>
            <div className= {invalidLogin ? "linea-input-invalida" : "linea-input"}>
              <div className="cuadrado-input">
                <img src={userIcon} alt="user icon" />
              </div>
              <input
                value={username}
                placeholder='usuario'
                onChange={(e) => setUsername(e.target.value)}
                type="text">
              </input>
            </div>   
          </div>
          
          <div className="campo">
            <label className="label2">Contraseña</label>
              <div className={invalidLogin ? "linea-input-invalida" : "linea-input"}>
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
          {invalidLogin && (
            <div className="campo-invalida">
              <img src={alerta} alt="alerta" />
              <label>Usuario o contraseña incorrectos</label>
              
            </div>
          )}
          <button 
          type="submit"
          >Entrar</button>
        </form>

        </div>
    </main>
  );
}
export default Login;
