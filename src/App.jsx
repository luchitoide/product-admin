import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home.jsx";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import ErrorPage from "./pages/ErrorPage";
import DetailProduct from "./pages/DetailProduct";
import axios from "axios";
import Item from "./routes/item";
import ProductPrice from "./pages/ProductPrice";
import NameProvider from "./hooks/NameContext";

export const ProductContext = createContext();

const router = createBrowserRouter([
  {
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product-list",
        element: <ProductList />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/price-product",
        element: <ProductPrice />,
      },
      {
        path: "/product-detail",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "item/:itemId",
    element: <Item />,
  },
]);

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API utilizando Axios
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10") // Tomamos los primeros 10 elementos
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);
  return (
    <ProductContext.Provider value={products}>
      <NameProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </NameProvider>
    </ProductContext.Provider>
  );
}

export default App;
