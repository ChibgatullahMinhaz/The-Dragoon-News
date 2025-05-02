import { createBrowserRouter } from "react-router";
import App from "../App";
import { ErrorPage } from "../Pages/Error/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import { Categorys } from "../Pages/Category/Categorys";
import MainLayout from "../Layouts/Mainlayout";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '', 
                Component: HomePage
            },
            {
                path: '/about',
                element: <div>about page</div>
            }
            ,
            {
                path: '/category/:cat_id',
                Component: Categorys
            }
        ]
    },
    {
        path: '/auth',
        element: <div>auth layouts</div>
    },
    {
        path: '/news',
        element: <div>new Layoute</div>
    },
    {
        path : '*',
        Component: ErrorPage
    }
]) 