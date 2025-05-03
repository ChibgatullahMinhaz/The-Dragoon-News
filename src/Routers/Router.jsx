import { createBrowserRouter } from "react-router";
import App from "../App";
import { ErrorPage } from "../Pages/Error/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import MainLayout from "../Layouts/MainLayout";
import { AuthLayout } from "../Layouts/AuthLayout";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import { NewsLayout } from "../Layouts/NewsLayout";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        index: true,
        Component: HomePage,
      },
      {
        path: "/about",
        element: <div>about page</div>,
      },
      {
        path: "/category/:id",
        Component: CategoryNews
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
  },
  {
    path: "/news/:Id",
    Component: NewsLayout,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
