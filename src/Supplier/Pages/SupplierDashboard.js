import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import CardSection from "../Features/Dashboard/CardSection";
import MenuBar from "../Features/Menubar/MenuBar";
//datatables
import "datatables.net-bs5/js/dataTables.bootstrap5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import TableSection from "../Features/Dashboard/TableSection";
import { useDispatch, useSelector } from "react-redux";
import { loadProductFunc } from "../../Redux/Supplier/SupplierActions";
const SupplierDashboard = () => {
  const dispatch = useDispatch();
  const appStore = useSelector((state) => state.SupplierState);
  const { supplier } = appStore;

  useEffect(() => {
    if (supplier) {
      dispatch(loadProductFunc(supplier._id));
    }
  }, [supplier]);
  return (
    <StyleContainer>
      {/* divide the container into 2 menubar and the main content */}
      <MenuBar active="dashboard" />
      {/* main content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* Main container */}
        <StyledMainContainer>
          {/* Card Section*/}
          <CardSection />
          {/* table section*/}
          <TableSection />
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

export default SupplierDashboard;
