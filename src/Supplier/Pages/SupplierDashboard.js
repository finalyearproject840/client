import React from "react";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
const SupplierDashboard = () => {
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar />
      {/* main content */}
      <div className="main-content">
        <Navbar />
      </div>
    </StyleContainer>
  );
};

export default SupplierDashboard;
