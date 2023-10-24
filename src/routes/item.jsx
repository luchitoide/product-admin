import React, { useContext } from "react";
import "../styles/items.css";
import { useParams, useLocation } from "react-router-dom";
import { ProductContext } from "../App";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";

function Item() {
  const { itemId } = useParams();
  const products = useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(itemId, 10));

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const quantity = searchParams.get("quantity");

  if (!product) {
    // Manejar el caso en el que el producto no se encuentre
    return <div>No se ha encontrado el producto.</div>;
  }

  return (
    <>
      <div className="top-bar">
        <div className="left-section">
          <img src={logo} alt="Logo" />
        </div>
        <div className="right-section">
          <span>Recomendados</span>
          <span>Registrarte</span>
          <span>Inicia sesión</span>
          <span>Total $</span>
        </div>
      </div>

      <div className="green-bar">
        <div className="right-section">
          <span>Medellín, Colombia</span>
          <span className="font-dark">Ingresa tu dirección</span>
          <LocationOnOutlinedIcon />
          {/* Añade el icono que desees */}
        </div>
      </div>

      <div className="product-container">

          <img src={banner} alt="Banner" />

        <div className="product-details-container">
          <img src={product.images[0]} alt="Product Image" />
          <div className="product-details">
            <h2 className="font-dark">{product.title}</h2>
            <p>ID: {product.id}</p>
            <p>{product.description}</p>

            <div className="detail-bottom">
            <p className="font-dark">$ {quantity*product.price*1.19}</p>
            <button type="submit" className="detail-button">
              Agregar al carrito
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="left-section">
          <span>Preguntas frecuentes</span>
          <span>Blog</span>
          <span>Términos y condiciones</span>
          <span>Políticas de privacidad</span>
        </div>
        <div className="icons-section">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </>
  );
}

export default Item;
