import React from "react";
import styled from "styled-components";
import { StyleContainer } from "../../../Styles";
import NavBar from "../../Components/Navbar/Navbar";
import ChangePasswordSection from "../../Features/EditProfile/ChangePasswordSection";
import MenuBar from "../../Features/Menubar/MenuBar";

const ChangeSupplierPassword = () => {
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="change password" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <NavBar />
        {/* Main container */}
        <StyledMainContainer>
          <ChangePasswordSection />
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

export default ChangeSupplierPassword;
