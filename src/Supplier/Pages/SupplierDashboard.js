import React from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import CardSection from "../Features/Dashboard/CardSection";
import MenuBar from "../Features/Menubar/MenuBar";
const SupplierDashboard = () => {
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar />
      {/* main content */}
      <div className="main-content">
        <Navbar />
        <StyledMainContainer>
          <CardSection />
        </StyledMainContainer>
      </div>
    </StyleContainer>
  );
};
const StyledMainContainer = styled.div`
  
`;

export default SupplierDashboard;
