import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
import { useDispatch } from "react-redux";
import AllRequestedHelp from './../Features/AllRequestedHelp/AllRequestedHelp';
import { loadContactMessagesFunc } from './../../Redux/Admin/AdminActions';
import ContactMessageSection from "../Features/ContactMessages/ContactMessageSection";




const ContactMessages = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContactMessagesFunc());
  }, []);


  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="contact messages" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
          <ContactMessageSection />
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

export default ContactMessages;
