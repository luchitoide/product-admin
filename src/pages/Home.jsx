import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Bienvenido a Mi Sitio</h1>
      <p>Esta es la página de inicio de mi sitio web.</p>
      <button onClick={() => alert('¡Botón clickeado!')}>Haz clic en mí</button>
    </div>
  );
}

export default HomePage;