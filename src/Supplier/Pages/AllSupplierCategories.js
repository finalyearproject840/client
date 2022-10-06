import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
import { useDispatch } from "react-redux";
import { loadCategoriesFunc } from "../../Redux/Admin/AdminActions";
import SupplierCategoriesSection from "../Features/AllCategories/SupplierCategoriesSection";

const AllSupplierCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategoriesFunc());
  }, []);

  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="category" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
          <SupplierCategoriesSection />
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

export default AllSupplierCategories;
