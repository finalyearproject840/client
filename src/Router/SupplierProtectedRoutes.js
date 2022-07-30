import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const SupplierProtectedRoutes = () => {
  return Cookies.get("supplier") ? (
    <Outlet />
  ) : (
    <Navigate to="/supplier/login" />
  );
};

export default SupplierProtectedRoutes;
