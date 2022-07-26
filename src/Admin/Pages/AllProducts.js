import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
import { useDispatch } from "react-redux";
import { loadProductFunc } from "../../Redux/Admin/AdminActions";
import AdminProductSection from "../Features/AdminProducts/AdminProductSection";
import "datatables.net-bs5/js/dataTables.bootstrap5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";



const AllProducts = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductFunc());
  }, []);


  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="medicine" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
          <AdminProductSection />
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

export default AllProducts;
