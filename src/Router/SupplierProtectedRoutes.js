import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const SupplierProtectedRoutes = () => {
  let supplier = null;
  let progress = null;

  if (Cookies.get("supplier")) {
    supplier = JSON.parse(Cookies.get("supplier"));
    progress = supplier.progress;
  }

  if (!supplier) {
    return <Navigate to="/supplier/login" />;
  } else {
    if (!progress.addedDetails) {
      return <Navigate to="/supplier/add/details" />;
    }
    if (!progress.addedLicense) {
      return <Navigate to="/supplier/license" />;
    }
    if (supplier.verified) {
      return <Navigate to="/supplier/add/pending" />;
    }
    return <Outlet />;
  }
};

export default SupplierProtectedRoutes;
