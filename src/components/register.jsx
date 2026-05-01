import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <section>
        <h1>Registro</h1>
        <p>Próximamente podrás crear una cuenta aquí.</p>
        <p>
          <Link to="/">Volver a inicio</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
