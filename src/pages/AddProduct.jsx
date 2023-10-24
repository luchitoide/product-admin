import React from "react";
import { useForm, Controller } from "react-hook-form";

function AddProduct() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a una API.
    console.log(data);
  };

  return (
    <div className="add-product-container">
      <h2>Producto</h2>
      <div className="add-product-form">
        <form onSubmit={handleSubmit(onSubmit)} className="add-form" >
          <div className="form-group">
            <label htmlFor="nombre">Nombre </label>
            <Controller
              name="nombre"
              control={control}
              defaultValue=""
              rules={{ required: "Este campo es obligatorio" }}
              render={({ field }) => <input {...field}className="form-block" type="text" />}
            />
            {errors.nombre && (
              <span className="error-message">{errors.nombre.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <Controller
              name="descripcion"
              control={control}
              defaultValue=""
              rules={{ required: "Este campo es obligatorio" }}
              render={({ field }) => <textarea {...field}className="form-block" rows="4" />}
            />
            {errors.descripcion && (
              <span className="error-message">
                {errors.descripcion.message}
              </span>
            )}
          </div>
          <button type="submit" className="submit-button">
              Guardar
            </button>
            

        </form>
      </div>
    </div>
  );
}

export default AddProduct;
