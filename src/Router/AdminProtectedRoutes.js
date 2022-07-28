import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
const AdminProtectedRoutes = () => {
  const appStore = useSelector((state) => state);
  const { admin } = appStore.AdminState;

  return Cookies.get("admin") ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoutes;
