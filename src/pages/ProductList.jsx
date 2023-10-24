import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API utilizando Axios
    axios
      .get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      .then((response) => {
        // Tomamos los primeros 10 elementos de la respuesta
        setProducts(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div className="table-container">
      <h1 className="table-title">Productos</h1>
      <table className="excel-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="excel-table-line" >
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td className="excel-table-column">
                <button className="ver-mas-button">Ver más</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;