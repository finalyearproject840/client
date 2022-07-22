import React from "react";
import { colors, fontSize } from "../../../DefaultValues";
import Button from "../../../Shared/Components/Button";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import { StyledPending } from "./AccountStyles";

const SupplierPending = () => {
  return (
    <StyledPending>
      <div className="pending-container">
        <StyleTitle
          font="righteous"
          color={colors.voilet}
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
        <Button background={colors.voilet} style={{ letterSpacing: "1px" }}>
          Contact Admin
        </Button>
      </div>
    </StyledPending>
  );
};

export default SupplierPending;
