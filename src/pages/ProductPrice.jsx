import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {useNameContext} from "../hooks/NameContext";
import "../styles/productprice.css";

function ProductPrice() {
    const { nameState } = useNameContext(); // Cambia aquí

    // Accede a nameState.nombre y nameState.descripcion
    const { nombre, descripcion } = nameState;

    const { control, handleSubmit, setValue, watch } = useForm();
    const precio = watch("precio", 1);
    const cantidad = watch("cantidad", 100);

  // Calcula el impuesto (puedes personalizar esta lógica según tus requisitos)
  const onSubmit = (data) => {
    // Puedes realizar cualquier lógica de guardado aquí si es necesario
    // También, el valor de impuesto se calculará automáticamente
    console.log(data);
  };

  return (
    <div className="add-product-container">
      <h2>Precios del Producto</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>

      <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <Controller
            name="precio"
            control={control}
            defaultValue="100"
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                min="0"
                className="form-input"
              />
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cantidad">Cantidad</label>
          <Controller
            name="cantidad"
            control={control}
            defaultValue="1"
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="1"
                min="1"
                className="form-input"
              />
            )}
          />
        </div>
      </form>
      <p><strong>Precio Total a Cobrar:</strong> ${(parseFloat(precio) * parseFloat(cantidad)).toFixed(2)}</p>
      <p><strong>IVA Total a Cobrar:</strong> ${(parseFloat(precio) * parseFloat(cantidad) * 0.19).toFixed(2)}</p>

      <button onClick={() => alert('Producto guardado')} className="submit-button">
        Guardar
      </button>
    </div>
  );
}

export default ProductPrice;