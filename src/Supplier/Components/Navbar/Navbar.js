import React from "react";
import "./Navbar.css";
import { IoMdNotifications } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { RiArrowDropDownLine, RiUser3Line } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="nav-bar" id="navbar">
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
            <IoMdNotifications className="icon notification-icon" />
          </div>
          <div className="notification-container"></div>
        </div>

        {/* Account area */}
        <div className="account-area d-flex">
          <div className="avatar-box d-flex align-items-center">
            <span className="avatar-icon">
              <RiUser3Line className="icon user-icon" />
            </span>
            <p className="name p-0">
              <span>Blue Jeans</span>
              <RiArrowDropDownLine className="icon drop-icon" />
            </p>
            <div className="account-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
