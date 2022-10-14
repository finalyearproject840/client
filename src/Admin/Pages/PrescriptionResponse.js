import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadProductFunc } from "../../Redux/Admin/AdminActions";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import PrescriptionResponseSection from "../Features/AllPrescriptions/PrescriptionResponseSection";
import MenuBar from "../Features/Menubar/MenuBar";

const PrescriptionResponse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductFunc());
  }, []);
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="Prescription" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
          <PrescriptionResponseSection />
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

export default PrescriptionResponse;
