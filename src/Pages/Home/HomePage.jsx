import React from "react";
import { Navigate, Outlet } from "react-router";

const HomePage = () => {
  return <Navigate to="/category/1"></Navigate>;
};

export default HomePage;
