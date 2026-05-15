function Home() {


  return (
    <section>
      <header>Bienvenid@, amante de la buena comida!</header>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img 
        src="/api/images/carlitosMaricon.jpg" 
        alt="Logo Catering" 
        style={{ width: '200px', borderRadius: '8px' }} 
      />
    </div>
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
