import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { routers } from "./Routers/Router.jsx";
import LoaderProvider from "./Store/Loader/LoaderProvider.jsx";
import CategoryProvider from "./Store/Data/CategoryProvider.jsx";
import NewsProvider from "./Store/Data/NewsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <CategoryProvider>
        <NewsProvider>
          <RouterProvider router={routers}></RouterProvider>
        </NewsProvider>
      </CategoryProvider>
    </LoaderProvider>
  </StrictMode>
);
