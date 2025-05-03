import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Store/Context/Context";
import Loading from "../Components/Loading/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
 
  if (loading) {
    return <Loading></Loading>;
  }


  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }


  return children;
};

export default PrivetRoute;