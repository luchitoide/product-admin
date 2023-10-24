import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/acerca">Acerca de</a>
          </li>
          <li className="nav-item">
            <a href="/servicios">Servicios</a>
          </li>
          <li className="nav-item">
            <a href="/product-list">Lista de productos</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
