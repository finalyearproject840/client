import React, { useEffect } from "react";
import styled from "styled-components";
import { StyleContainer } from "../../Styles";
import Navbar from "../Components/Navbar/Navbar";
import MenuBar from "../Features/Menubar/MenuBar";
import { useDispatch, useSelector } from "react-redux";
import SupplierNotificationSection from "../Features/SupplierNotification/SupplierNotificationSection";
import { loadNotificationFunc } from "../../Redux/Supplier/SupplierActions";

const SupplierNotification = () => {
  const appStore = useSelector((state) => state.SupplierState);
  const { supplier } = appStore;

  const dispatch = useDispatch();
  useEffect(() => {
    if (supplier) {
      dispatch(loadNotificationFunc(supplier._id));
    }
  }, [supplier]);

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
          <SupplierNotificationSection />
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

export default SupplierNotification;
