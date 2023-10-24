import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/add-product">Agregar Producto</a>
          </li>
          <li className="nav-item">
            <a href="/product-detail">Detalle producto</a>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
