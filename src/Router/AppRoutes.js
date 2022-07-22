import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../Shared/Pages/Index";
import SupplierSignup from "../Supplier/Pages/Account/SupplierSignup";
import SupplierLogin from "../Supplier/Pages/Account/SupplierLogin";

import SupplierDashboard from "../Supplier/Pages/SupplierDashboard";
import SupplierPending from "../Supplier/Pages/Account/SupplierPending";
import SupplierLicense from "../Supplier/Pages/Account/SupplierLicense";
import AdminSignup from "../Admin/Pages/Account/AdminSignup";
import AdminLogin from "../Admin/Pages/Account/AdminLogin";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<SupplierDashboard />} path="/supplier/dashboard" />
        <Route element={<SupplierSignup />} path="/supplier/create" />
        <Route element={<SupplierLogin />} path="/supplier/login" />
        <Route element={<SupplierPending />} path="/supplier/pending" />
        <Route element={<SupplierLicense />} path="/supplier/license" />

        {/* Admin route */}
        <Route element={<SupplierDashboard />} path="/admin/dashboard" />
        <Route element={<AdminSignup />} path="/admin/create" />
        <Route element={<AdminLogin />} path="/admin/login" />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
