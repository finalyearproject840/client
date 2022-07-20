import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../Shared/Pages/Index";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Index />} path="/" />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
