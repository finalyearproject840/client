import React from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import SupplierHelpSection from "../Features/Help/SupplierHelpSection";
import MenuBar from "../Features/Menubar/MenuBar";


const SupplierHelp = () => {
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="help" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
            <SupplierHelpSection />
        </StyledMainContainer>
      </div>
    </StyleContainer>
  );
};
const StyledMainContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 6rem;
`;

export default SupplierHelp;
