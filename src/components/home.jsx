import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <header>Bienvenid@, amante de la buena comida!</header>
      <nav>
        <ul style={{ display: 'grid', gap: '10px', listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/register">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
export default Home;
