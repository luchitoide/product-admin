import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  if (products.length > 0) {
    return (
      <div className="table-container">
        <h1 className="table-title">Productos</h1>
        <table className="excel-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={item.id} className="excel-table-line">
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td className="no-border">
                  <Link to={`/item/${item.id}?quantity=${item.quantity}`} className="ver-mas-button">
                    Ver más
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;
