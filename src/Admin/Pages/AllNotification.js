import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
import { useDispatch } from "react-redux";
import { loadNotificationFunc, loadProductFunc } from "../../Redux/Admin/AdminActions";
import AdminNotificationSection from "../Features/AdminNotification/AdminNotificationSection";




const AllNotification = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNotificationFunc());
  }, []);


  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
          <AdminNotificationSection />
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

export default AllNotification;
