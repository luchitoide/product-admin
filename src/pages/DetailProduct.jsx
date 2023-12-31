import React, { useContext, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { ProductContext } from "../App";
import ProductList from "./ProductList";


function DetailProduct() {
  const loadCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  };
  
  const products = useContext(ProductContext);
  const [cart, setCart] = useState([]);
  const { control, handleSubmit, setValue } = useForm();

  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Carrito guardado')
  };


  useEffect(() => {
    // Carga el estado de cart desde localStorage
    const cart = loadCart();
    setCart(cart);
  }, []);

  

  const onSubmit = (data) => {

    // Encuentra el producto existente en el carrito según el título seleccionado
    const existingProduct = cart.find((item) => item.title === data.product);

    if (existingProduct) {
      // Crea una copia del objeto existente
      const updatedProduct = { ...existingProduct };

      // Actualiza la cantidad en la copia
      updatedProduct.quantity = data.quantity;
      const updatedCart = [...cart];
      const index = cart.findIndex((item) => item.title === data.product);
      updatedCart[index] = updatedProduct;

      // Encuentra el índice del producto existente en cart
      
      

      if (index !== -1) {
        // Actualiza el producto en la copia de cart
        
        saveCart(updatedCart);

        // Actualiza el estado de cart con la copia actualizada
        setCart(updatedCart);
      }
    } else {
      // Agrega el producto al carrito si no existe
      const selectedProduct = products.find(
        (product) => product.title === data.product
      );

      if (selectedProduct) {
        const updatedCart = [
          ...cart,
          {
            id: selectedProduct.id,
            title: selectedProduct.title,
            description: selectedProduct.description,
            quantity: data.quantity,
          }
        ];
        saveCart(updatedCart);

        // Actualiza el estado de cart con la copia actualizada
        setCart(updatedCart);
      }
    }
    
  };

  return (
    <div>
      <div className="add-product-container">
        <h2>Detalles Producto</h2>
        <div className="add-product-form">
          <form onSubmit={handleSubmit(onSubmit)} className="add-form">
            <div className="form-group">
              <label htmlFor="product">Producto:</label>
              <Controller
                name="product"
                control={control}
                rules={{ required: true }} // Campo requerido
                render={({ field }) => (
                  <select {...field} className="form-block">
                    <option value="">Selecciona un producto</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.title}>
                        {product.title}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Cantidad:</label>
              <Controller
                name="quantity"
                control={control}
                defaultValue="0"
                rules={{
                  required: true, // Campo requerido
                  min: 1, // Cantidad debe ser mayor o igual a 1
                }}
                render={({ field }) => <input {...field} className="form-block" type="number" />}
              />
            </div>

            <button type="submit" className="submit-button">Agregar al Carrito</button>
          </form>
        </div>
      </div>
      <ProductList products={cart} />
    </div>
  );
}

export default DetailProduct;
