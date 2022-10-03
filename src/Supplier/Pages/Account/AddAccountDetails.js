import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const AddAccountDetails = () => {
  //redirect from to login page
  if (!Cookies.get("supplier")) {
    return <Navigate to="/supplier/login" />;
  }
  
  if (Cookies.get("supplier")) {
    let cookieSupplier = JSON.parse(Cookies.get("supplier"));
    const progress = cookieSupplier.progress;
    //redirect to supplier dashboard
    if (progress.addedDetails) {
      return <Navigate to="/supplier/dashboard" />;
    }
  }

  //render content of the add details page
  return <div>added details</div>;
};

export default AddAccountDetails;
