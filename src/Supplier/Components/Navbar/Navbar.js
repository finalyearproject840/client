import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { RiArrowDropDownLine, RiUser3Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors, fontSize } from "../../../DefaultValues";
import { StyleTitle } from "../../../Styles";
import AccountContainer from "./AccountContainer";
import NotificationContainer from "./NotificationContainer";

const NavBar = () => {
  const [showNotiContainer, setShowNotiContainer] = useState(false);
  const [showAccountContainer, setShowAccountContainer] = useState(false);

  //function to handle the click notification icon
  const handleShowNotification = () => {
    setShowAccountContainer(false);
    setShowNotiContainer(!showNotiContainer);
  };

  //function to handle the click account event
  const handleShowAccount = () => {
    setShowNotiContainer(false);
    setShowAccountContainer(!showAccountContainer);
  };

  //get all the admin state from redux
  const SupplierState = useSelector((state) => state.SupplierState);
  const { supplier } = SupplierState;

  
  let supplierName = "";
  if (supplier) {
    //limit supplier name string
    supplierName = supplier.username;
    if (supplierName.length > 10) {
      supplierName = supplierName.substring(0, 10) + "...";
    }

    //work on supplier image
    
  }

  const notifications = [
    {
      id: 1,
      title: "New Subscriber",
      date: new Date(),
      msg: "Sean Paul Subscribed to user account",
    },
    {
      id: 2,
      title: "New Order",
      date: new Date(),
      msg: "You have a new order from Sean Paul",
    },
    {
      id: 3,
      title: "Product Verified",
      date: new Date(),
      msg: "Your product with Id 1234234 has been verified",
    },
    {
      id: 4,
      title: "Product Verified",
      date: new Date(),
      msg: "Your product with Id 1234234 has been verified",
    },
    {
      id: 5,
      title: "Product Verified",
      date: new Date(),
      msg: "Your product with Id 1234234 has been verified",
    },
  ];
  return (
    <StyledNavbar className="nav-bar" id="navbar">
      <form method="get" className="form nav-bar-form">
        <div className="input-group d-flex align-items-center">
          <input
            type="text"
            className="form-control search-input"
            name="search"
            id="name"
            placeholder="Search..."
          />
          <span className="input-group-btn">
            <IoSearchCircleSharp className="icon search-icon" size={34} />
          </span>
        </div>
      </form>
      <div className="navbar-second">
        {/* Notifcation area */}
        <div className="notification-area d-flex">
          <div className="icon-box">
            <IoMdNotifications
              className="icon notification-icon"
              onClick={() => handleShowNotification()}
            />
          </div>

          {/* Notifcations container */}
          <NotificationContainer
            data={notifications}
            show={showNotiContainer}
            setShow={handleShowNotification}
          />
        </div>

        {/* Account area */}
        <div className="account-area d-flex">
          <div className="avatar-box d-flex align-items-center">
            <span className="avatar-icon">
              <RiUser3Line
                className="icon user-icon"
                onClick={() => handleShowAccount()}
              />
            </span>
            <div className="name p-0" onClick={() => handleShowAccount()}>
              <StyleTitle
                size={fontSize.sm}
                className="d-inline"
                color={colors.muted}
              >
               {supplier ? supplierName.substring(0, 10) : ""}
              </StyleTitle>
              <RiArrowDropDownLine
                className="icon drop-icon"
                color={colors.muted}
              />
            </div>
            <AccountContainer
              data={notifications}
              show={showAccountContainer}
              setShow={handleShowAccount}
            />
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  height: 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  background-color: #fff;

  .nav-bar-form {
    width: 30%;
    display: flex;
    align-items: center;
  }

  .nav-bar-form .form-control {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #dddddd;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    box-shadow: none;
    background-color: transparent;
  }

  .nav-bar-form .btn {
    background-color: #8338ec;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border: none;
    margin-left: 0.4rem;
  }

  .search-icon {
    color: #8338ec;
    cursor: pointer;
  }

  .navbar-second {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    font-size: 1.3rem;
    cursor: pointer;
  }

  .notification-icon {
    margin-right: 1rem;
    color: #8338ec;
  }

  .avatar-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #f5f5f5;
    margin-right: 0.5rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  .user-icon {
    color: #8338ec;
    font-size: 0.8rem;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .name {
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  .notification-area {
    position: relative;
  }

  .account-area {
    position: relative;
  }
`;

export default NavBar;
