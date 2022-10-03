import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";
import { colors } from "../../../DefaultValues";
import Button from "../../../Shared/Components/Button";
import { StyleTitle } from "../../../Styles";
import { StyledPending } from "./AccountStyles";

const SupplierPending = () => {
  //redirect to login when supplier has not logged in
  if (!Cookies.get("supplier")) {
    return <Navigate to="/supplier/login" />;
  }

  //other redirects 
  if (Cookies.get("supplier")) {
    let cookieSupplier = JSON.parse(Cookies.get("supplier"));
    const progress = cookieSupplier.progress;
    //redirect to add details
    if (!progress.addedDetails) {
      return <Navigate to="/supplier/add/details" />;
    }
    //redirect to add license
    if (!progress.addedLicense) {
      return <Navigate to="/supplier/license" />;
    }
    //redirect to supplier dashboard
    if (progress.addedDetails && progress.addedLicense) {
      return <Navigate to="/supplier/dashboard" />;
    }
  }

  //render content of the pending page
  return (
    <StyledPending>
      <div className="pending-container">
        <StyleTitle
          font="righteous"
          color={colors.violet}
          size="2rem"
          className="mb-4"
        >
          Account Pending...
        </StyleTitle>
        <p className="lead">
          Your account is under review. <br />
          This usually takes a maximum of 48 hours. Please try again later or
        </p>
        <p className="lead">
          Contact Admin if the review process has exceeded 48 hours
        </p>
        <Button background={colors.violet} style={{ letterSpacing: "1px" }}>
          Contact Admin
        </Button>
      </div>
    </StyledPending>
  );
};

export default SupplierPending;
