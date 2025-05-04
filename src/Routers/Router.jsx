import { createBrowserRouter } from "react-router";
import { ErrorPage } from "../Pages/Error/ErrorPage";
import HomePage from "../Pages/Home/HomePage";

import { AuthLayout } from "../Layouts/AuthLayout";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import { NewsLayout } from "../Layouts/NewsLayout";
import Login from "../features/Auth/pages/Login";
import SingUp from "../features/Auth/pages/SingUp";
import MainPage from "../Layouts/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage> ,
    children: [
      {
        index: true,
        element:<HomePage></HomePage> ,
      },
      {
        path: "/about",
        element: <div>about page</div>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <SingUp></SingUp>
      }
    ]
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
