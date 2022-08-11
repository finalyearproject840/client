import React from "react";
import styled from "styled-components";
import { StyleContainer } from "../../../Styles";
import NavBar from "../../Components/Navbar/Navbar";
import MenuBar from "../../Features/Menubar/MenuBar";
import SupplierProfileSection from "../../Features/SupplierProfile/SupplierProfileSection";

const SupplierProfile = () => {
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="profile" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <NavBar />
        {/* Main container */}
        <StyledMainContainer>
          <SupplierProfileSection />
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

export default SupplierProfile;
