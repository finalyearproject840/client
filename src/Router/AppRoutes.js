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
import EditProfile from "../Supplier/Pages/EditProfile";
import SupplierProfile from "../Supplier/Pages/Account/SupplierProfile";
import SupplierHelp from "../Supplier/Pages/SupplierHelp";
import SupplierNotification from "../Supplier/Pages/SupplierNotification";
import AdminProfile from "../Admin/Pages/Account/AdminProfile";
import EditAdminProfile from "../Admin/Pages/EditAdminProfile";
import AllCategories from "../Admin/Pages/AllCategories";
import AddCategory from "../Admin/Pages/AddCategory";
import EditCategory from "../Admin/Pages/EditCategory";
import AllUsers from "../Admin/Pages/AllUsers";
import ViewUser from "../Admin/Pages/ViewUser";
import ViewSupplier from './../Admin/Pages/ViewSupplier';
import AllSubscribers from './../Supplier/Pages/AllSubscribers';
import AllHelps from "../Admin/Pages/AllHelps";
import AddAccountDetails from "../Supplier/Pages/Account/AddAccountDetails";
import AllSupplierCategories from "../Supplier/Pages/AllSupplierCategories";
import AddSupplierCategory from "../Supplier/Pages/AddSupplierCategory";
import ProductOffers from "../Supplier/Pages/ProductOffers";
import AllPrescription from "../Admin/Pages/AllPrescriptions";
import PrescriptionResponse from "../Admin/Pages/PrescriptionResponse";
import ChangeAdminPassword from "../Admin/Pages/Account/ChangePassword";
import ChangeSupplierPassword from "../Supplier/Pages/Account/ChangePassword";
import ContactMessages from "../Admin/Pages/ContactMessages";
import HelpView from "../Admin/Pages/HelpView";
import ViewContactMessage from './../Admin/Pages/ViewContactMessage';
import ViewSubscriber from './../Supplier/Pages/ViewSubscriber';
import Orders from "../Admin/Pages/Orders";
import ViewOrder from "../Admin/Pages/ViewOder";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<SupplierSignup />} path="/supplier/create" />
        <Route element={<SupplierLogin />} path="/supplier/login" />
        <Route element={<SupplierPending />} path="/supplier/pending" />
        <Route element={<SupplierLicense />} path="/supplier/license" />
        <Route element={<AddAccountDetails />} path="/supplier/add/details" />
        {/* admin protected route */}
        <Route element={<AdminProtectedRoutes />}>
          <Route element={<AdminDashboard />} path="/admin/dashboard" />
          <Route element={<AllSuppliers />} path="/admin/all/suppliers" />
          <Route element={<ViewSupplier />} path="/admin/supplier/:id" />
          <Route element={<AllUsers />} path="/admin/all/users" />
          <Route element={<ViewUser />} path="/admin/user/:id" />
          <Route element={<AllProducts />} path="/admin/all/products" />
          <Route element={<AdminProductPreview />} path="/admin/product/:id" />
          <Route
            element={<AllNotification />}
            path="/admin/all/notifications"
          />
           <Route
            element={<AllHelps />}
            path="/admin/requested/help"
          />
          <Route
            element={<ContactMessages />}
            path="/admin/contact/messages"
          />
           <Route
            element={<ViewContactMessage />}
            path="/admin/contact/message/:id"
          />
          <Route element={<ChangeAdminPassword />} path="/admin/change/password" />
          <Route element={<AdminProfile />} path="/admin/profile" />
          <Route element={<EditAdminProfile />} path="/admin/edit/profile" />
          <Route element={<AllCategories />} path="/admin/all/categories" />
          <Route element={<AddCategory />} path="/admin/add/category" />
          <Route element={<EditCategory />} path="/admin/edit/category/:id" />
          <Route element={<AllPrescription />} path="/admin/all/prescription" />
          <Route element={<HelpView />} path="/admin/help/:id" />
          <Route element={<PrescriptionResponse />} path="/admin/respond/prescription/:id" />
          <Route element={<Orders />} path="/admin/all/orders" />
          <Route element={<ViewOrder />} path="/admin/order/:id" />
        </Route>

        {/* supplier protected route */}
        <Route element={<SupplierProtectedRoutes />}>
          <Route element={<SupplierDashboard />} path="/supplier/dashboard" />
          <Route element={<SupplierProfile />} path="/supplier/profile" />
          <Route element={<UploadProduct />} path="/supplier/product/upload" />
          <Route element={<AllSupplierCategories />} path="/supplier/categories" />
          <Route element={<AddSupplierCategory />} path="/add/supplier/category" />
          <Route element={<ProductPreview />} path="/supplier/product/:id" />
          <Route element={<SupplierProducts />} path="/supplier/products" />
          <Route element={<AllSubscribers />} path="/supplier/all/subscribers" />
          <Route element={<ViewSubscriber />} path="/supplier/subscriber/:id" />
          <Route element={<EditProduct />} path="/supplier/edit/product/:id" />
          <Route element={<ProductOffers />} path="/supplier/offers/:id" />
          <Route
            element={<EditProductImage />}
            path="/supplier/edit/product/images/:id"
          />
          <Route element={<EditProfile />} path="/supplier/edit/profile" />
          <Route element={<ChangeSupplierPassword />} path="/supplier/change/password" />
          <Route element={<SupplierHelp />} path="/supplier/help/" />
          <Route
            element={<SupplierNotification />}
            path="/supplier/all/notifications/"
          />
          
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
