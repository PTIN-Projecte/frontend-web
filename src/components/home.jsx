import React, { useState } from 'react';

function Home() {


  return (
    <section>
      <header>Bienvenid@, amante de la buena comida!</header>
      <nav>
        <ul style = {{display: 'grid', gap: '10px'}}>
          <a href="/login">Iniciar Sesión</a>
          <a href="/register">Registrarse</a>
        </ul>
      </nav>
    </section>

  );
}
export default Home;
