import React, { useEffect } from "react";
import AppRoutes from "./Router/AppRoutes";
import { useDispatch } from "react-redux";
import { loadAdminFunc } from "./Redux/Admin/AdminActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAdminFunc());
  }, []);
  return <AppRoutes />;
}

export default App;
