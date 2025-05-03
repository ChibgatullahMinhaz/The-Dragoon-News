import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { routers } from "./Routers/Router.jsx";
import LoaderProvider from "./Store/Provider/Loader/LoaderProvider.jsx";
import NewsProvider from "./Store/Data/NewsProvider.jsx";
import CategoryProvider from "./Store/Provider/Data/CategoryProvider.jsx";
import AuthProvider from "./Store/Provider/Auth/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
    <LoaderProvider>
      <AuthProvider>
        <CategoryProvider>
          <NewsProvider>
            <RouterProvider router={routers}></RouterProvider>
          </NewsProvider>
        </CategoryProvider>
      </AuthProvider>
    </LoaderProvider>
  </StrictMode>
);
