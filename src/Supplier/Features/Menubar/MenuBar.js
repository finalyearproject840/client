import React from "react";
import { Link } from "react-router-dom";
import { BsPatchPlusFill } from "react-icons/bs";
import Button from "../../../Shared/Components/Button";
import StyledMenu from "./MenuStyles";

const MenuBar = () => {
  return (
    <StyledMenu>
      <div className="top-bar">
        <h3 className="site-logo">Pharmacy</h3>
      </div>
      <div className="menu-container">
        <div>
          <Button display="block" width="100%">
            <Link
              to="#"
              id="upload-drug-link"
              className="d-flex text-light justify-content-between"
            >
              <span>Upload Drug</span>
              <BsPatchPlusFill size={24} />
            </Link>
          </Button>
        </div>
      </div>
    </StyledMenu>
  );
};

export default MenuBar;
