import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Index from "../Shared/Pages/Index";
import SupplierSignup from "../Supplier/Pages/Account/SupplierSignup";
import SupplierLogin from "../Supplier/Pages/Account/SupplierLogin";

import SupplierDashboard from "../Supplier/Pages/SupplierDashboard";
import SupplierPending from "../Supplier/Pages/Account/SupplierPending";
import SupplierLicense from "../Supplier/Pages/Account/SupplierLicense";
import AdminSignup from "../Admin/Pages/Account/AdminSignup";
import AdminLogin from "../Admin/Pages/Account/AdminLogin";
import ErrorPage from "../Shared/Pages/ErrorPage";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import AdminDashboard from "../Admin/Pages/AdminDashboard";
import AllSuppliers from "../Admin/Pages/AllSuppliers";
import SupplierProtectedRoutes from "./SupplierProtectedRoutes";
import UploadProduct from "../Supplier/Pages/UploadProduct";
import ProductPreview from "../Supplier/Pages/ProductPreview";
import SupplierProducts from "../Supplier/Pages/SupplierProducts";
import EditProduct from "../Supplier/Pages/EditProduct";
import AllProducts from "../Admin/Pages/AllProducts";
import AdminProductPreview from "../Admin/Pages/AdminProductPreview";
import AllNotification from "../Admin/Pages/AllNotification";
import EditProductImage from "../Supplier/Pages/EditProductImage";

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
       
       {/* admin protected route */}
        <Route element={<AdminProtectedRoutes />}>
          <Route element={<AdminDashboard />} path="/admin/dashboard" />
          <Route element={<AllSuppliers />} path="/admin/all/suppliers" />
          <Route element={<AllProducts />} path="/admin/all/products" />
          <Route element={<AdminProductPreview />} path="/admin/product/:id" />
          <Route element={<AllNotification />} path="/admin/all/notifications" />
        </Route>

        {/* supplier protected route */}
        <Route element={<SupplierProtectedRoutes />}>
          <Route element={<SupplierDashboard />} path="/supplier/dashboard" />
          <Route element={<UploadProduct />} path="/supplier/product/upload" />
          <Route element={<ProductPreview />} path="/supplier/product/:id" />
          <Route element={<SupplierProducts />} path="/supplier/products" />
          <Route element={<EditProduct />} path="/supplier/edit/product/:id" />
          <Route element={<EditProductImage />} path="/supplier/edit/product/images/:id" />
        </Route>

        {/* Admin route */}
        <Route element={<AdminSignup />} path="/admin/create" />
        <Route element={<AdminLogin />} path="/admin/login" />
        {/* Error page */}
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
