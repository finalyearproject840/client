import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import Cookies from "js-cookie";
const AdminProtectedRoutes = () => {


  return Cookies.get("admin") ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoutes;
