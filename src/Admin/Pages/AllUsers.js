import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
//datatables
import "datatables.net-bs5/js/dataTables.bootstrap5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { useDispatch } from "react-redux";
import { loadAllUsersFunc } from "../../Redux/Admin/AdminActions";
import AllUsersSection from "../Features/AllUsers/AllUsersSection";

const AllUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllUsersFunc());
  }, []);
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="users" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
          <AllUsersSection />
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

export default AllUsers;
