import React from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import NavBar from "../Components/Navbar/Navbar";
import ViewUserSection from "../Features/AllUsers/ViewUserSection";
import MenuBar from "../Features/Menubar/MenuBar";

const ViewUser = () => {
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="users" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <NavBar />
        {/* Main container */}
        <StyledMainContainer>
          <ViewUserSection />
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

export default ViewUser;
