import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
import { useDispatch } from "react-redux";
import AllRequestedHelp from './../Features/AllRequestedHelp/AllRequestedHelp';
import { loadHelpFunc } from './../../Redux/Admin/AdminActions';




const AllHelps = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHelpFunc());
  }, []);


  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="notifications" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
          <AllRequestedHelp />
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

export default AllHelps;
