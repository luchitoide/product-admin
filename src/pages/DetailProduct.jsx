import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";

function DetailProduct() {
  const products = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // Aquí puedes implementar la lógica para agregar el producto y cantidad al carrito.
    // Puedes utilizar un estado o una función para manejar el carrito en tu aplicación.
    console.log("Producto:", selectedProduct);
    console.log("Cantidad:", quantity);
  };

  return (
    <div className="add-product-container">
      <h2>Detalles Producto</h2>
      <div className="add-product-form">
        <div className="form-group">
          <label htmlFor="productSelector">Producto</label>
          <select
            id="productSelector"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Selecciona un producto</option>
            {products.map((product) => (
              <option key={product.id} value={product.title}>
                {product.title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Cantidad</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <button onClick={addToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default DetailProduct;
