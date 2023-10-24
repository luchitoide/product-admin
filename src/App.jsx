import "./App.css";
import React, { useEffect, useState , createContext} from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import ErrorPage from "./pages/ErrorPage";
import DetailProduct from "./pages/DetailProduct";
import axios from 'axios';

export const ProductContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
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
    path: "/product-detail",
    element: <DetailProduct />,
  },
]);

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API utilizando Axios
    axios
      .get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')       // Tomamos los primeros 10 elementos
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);
  return (
    <ProductContext.Provider value={products}>
      <div>
        <RouterProvider router={router} />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
