import React from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import NavBar from "../Components/Navbar/Navbar";
import ViewSubscriberSection from "../Features/AllSubscribers/ViewSubscriberSection";
import MenuBar from "../Features/Menubar/MenuBar";

const ViewSubscriber = () => {
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="subscribers" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <NavBar />
        {/* Main container */}
        <StyledMainContainer>
          <ViewSubscriberSection />
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

export default ViewSubscriber;
