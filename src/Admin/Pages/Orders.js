import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import NavBar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
import { useDispatch } from "react-redux";
import { loadOrdersFunc } from "../../Redux/Admin/AdminActions";
import AllOrderSection from "../Features/AllOrders/AllOrderSection";

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrdersFunc());
  }, []);
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="orders" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <NavBar />
        {/* Main container */}
        <StyledMainContainer>
          <AllOrderSection />
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

export default Orders;
