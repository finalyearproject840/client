import React, { useEffect } from "react";
import AppRoutes from "./Router/AppRoutes";
import { useDispatch } from "react-redux";
import { loadAdminFunc } from "./Redux/Admin/AdminActions";
import { loadSupplierFunc } from "./Redux/Supplier/SupplierActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAdminFunc());
    dispatch(loadSupplierFunc());
  }, []);
  return <AppRoutes />;
}

export default App;
