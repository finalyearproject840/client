import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Shared/Components/Button";
import StyledMenu, { StyledList, StyledMenuCloser } from "./MenuStyles";
import { colors } from "../../../DefaultValues";
import MenuListItem from "./MenuListItem";
import { BsPatchPlusFill, BsTruck, BsBasket } from "react-icons/bs";
import { BiCategory, BiHome, BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {
  IoMdNotificationsOutline,
  IoMdHelpCircle,
  IoMdSettings,
} from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { GiMedicines } from "react-icons/gi";
import { FaUsers, FaEdit } from "react-icons/fa";

const MenuBar = (props) => {
  const [show, setShow] = useState(true);
  return (
    <StyledMenu show={show}>
      {/* Menu log area */}
      <div className="top-bar">
        <h3 className="site-logo">Pharmacy</h3>
      </div>

      {/* menu container */}
      <div className="menu-container">
        <div>
          {/* drug upload button */}
          <Button display="block" width="100%">
            <Link
              to="#"
              id="upload-drug-link"
              className="d-flex text-light justify-content-between"
            >
              <span>Admin Panel</span>
              <BsPatchPlusFill size={24} />
            </Link>
          </Button>
        </div>
        {/*menu bar list */}
        <div className="menu-list-container">
          <StyledList className="menu-list">
            <MenuListItem
              text="Dashboard"
              Link="/admin/dashboard/"
              icon={<BiHome size={23} />}
              active={
                props.active
                  ? props.active === "dashboard"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Medicine"
              Link="/admin/all/products"
              icon={<GiMedicines size={23} />}
              active={
                props.active
                  ? props.active === "medicine"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Suppliers"
              Link="/admin/all/suppliers"
              icon={<FaUsers size={23} />}
              active={
                props.active
                  ? props.active === "suppliers"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
             <MenuListItem
              text="Users"
              Link="/admin/all/users"
              icon={<FaUsers size={23} />}
              active={
                props.active
                  ? props.active === "users"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Orders"
              icon={<BsBasket size={23} />}
              active={
                props.active
                  ? props.active === "orders"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Delivery"
              icon={<BsTruck size={23} />}
              active={
                props.active
                  ? props.active === "delivery"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Notifications"
              Link="/admin/all/notifications/"
              icon={<IoMdNotificationsOutline size={23} />}
              active={
                props.active
                  ? props.active === "notifications"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
             <MenuListItem
              text="Profile"
              Link="/admin/profile"
              icon={<BiUserCircle size={23} />}
              active={
                props.active
                  ? props.active === "profile"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Edit Profile"
              Link="/admin/edit/profile"
              icon={<FaEdit size={23} />}
              active={
                props.active
                  ? props.active === "editprofile"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Category"
              icon={<BiCategory size={23} />}
              active={
                props.active
                  ? props.active === "category"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Request Help"
              Link="/admin/requested/help"
              icon={<IoMdHelpCircle size={23} />}
              active={
                props.active
                  ? props.active === "help"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Settings"
              icon={<IoMdSettings size={23} />}
              active={
                props.active
                  ? props.active === "settings"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            
          </StyledList>
        </div>
      </div>

      {/* menu hider */}
      <StyledMenuCloser onClick={() => setShow(!show)} show={show}>
        {show ? (
          <AiOutlineClose size={24} color={colors.voilet} />
        ) : (
          <RiMenuUnfoldLine size={24} color={colors.white} />
        )}
      </StyledMenuCloser>
    </StyledMenu>
  );
};

export default MenuBar;
